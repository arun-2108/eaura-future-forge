import { useEffect, useRef, useState } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
}

export function AbstractTechVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, tx: -1000, ty: -1000 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Adjust for high-DPI displays
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    ctx.scale(dpr, dpr);

    // Initialize nodes
    const nodeCount = Math.min(60, Math.floor((dimensions.width * dimensions.height) / 22000));
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        radius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.35 + 0.15,
        targetAlpha: Math.random() * 0.35 + 0.15,
      });
    }

    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      // Smooth mouse interpolation
      const mouse = mouseRef.current;
      mouse.x += (mouse.tx - mouse.x) * 0.08;
      mouse.y += (mouse.ty - mouse.y) * 0.08;

      // 1. Draw subtle background coordinate grid (light mode)
      const gridSize = 64;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.015)";
      ctx.lineWidth = 0.5;

      for (let x = 0; x < dimensions.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, dimensions.height);
        ctx.stroke();
      }
      for (let y = 0; y < dimensions.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(dimensions.width, y);
        ctx.stroke();
      }

      // 2. Draw connections (lines) between nearby nodes (light mode blue/gray)
      ctx.lineWidth = 0.75;
      for (let i = 0; i < nodes.length; i++) {
        const nodeA = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeB = nodes[j];
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distSq = dx * dx + dy * dy;
          const maxDist = 120;
          const maxDistSq = maxDist * maxDist;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            // Blend from Apple blue to slate gray for connection lines
            const alpha = (1 - dist / maxDist) * 0.08;
            ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
          }
        }
      }

      // 3. Update & Draw individual nodes
      nodes.forEach((node) => {
        // Drift physics
        node.x += node.vx;
        node.y += node.vy;

        // Mouse proximity reaction (gentle push/pull)
        if (mouse.x > -500 && mouse.y > -500) {
          const mdx = node.x - mouse.x;
          const mdy = node.y - mouse.y;
          const mdistSq = mdx * mdx + mdy * mdy;
          const pushRadius = 150;
          const pushRadiusSq = pushRadius * pushRadius;

          if (mdistSq < pushRadiusSq) {
            const mdist = Math.sqrt(mdistSq);
            const force = (1 - mdist / pushRadius) * 0.12;
            const angle = Math.atan2(mdy, mdx);

            // Push gently away from cursor
            node.x += Math.cos(angle) * force;
            node.y += Math.sin(angle) * force;

            // Brighten up nodes near cursor
            node.targetAlpha = 0.55;
          } else {
            node.targetAlpha = node.alpha;
          }
        }

        // Wrap around bounds
        if (node.x < 0) node.x = dimensions.width;
        if (node.x > dimensions.width) node.x = 0;
        if (node.y < 0) node.y = dimensions.height;
        if (node.y > dimensions.height) node.y = 0;

        // Smooth alpha changes
        node.alpha += (node.targetAlpha - node.alpha) * 0.05;

        // Draw particle node (dark charcoal for light mode contrast)
        ctx.fillStyle = `rgba(255, 255, 255, ${node.alpha * 0.45})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Subtle core point for nodes near cursor (Apple blue glow center)
        if (node.alpha > 0.35) {
          ctx.fillStyle = "rgba(6, 182, 212, 0.25)";
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // 4. Draw mouse proximity highlight glow (extremely subtle light blue)
      if (mouse.x > -500 && mouse.y > -500) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 180);
        gradient.addColorStop(0, "rgba(6, 182, 212, 0.04)");
        gradient.addColorStop(1, "rgba(6, 182, 212, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 180, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.tx = e.clientX - rect.left;
      mouseRef.current.ty = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.tx = -1000;
      mouseRef.current.ty = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      if (canvas) {
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [dimensions]);

  return (
    <div ref={containerRef} className="absolute inset-0 h-full w-full pointer-events-none z-0">
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
