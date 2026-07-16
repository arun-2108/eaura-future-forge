import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const frameCount = 240;
const currentFrame = (index: number) =>
  `/sequence/ezgif-frame-${index.toString().padStart(3, "0")}.jpg`;

export function SequenceCanvas({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Use 4K resolution canvas for crisp rendering
    canvas.width = 3840;
    canvas.height = 2160;
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    const drawFrame = (img: HTMLImageElement) => {
      if (!canvas || !context) return;
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === 1 || i === 1) {
          drawFrame(img);
        }
      };
    }
    imagesRef.current = images;

    const animObj = { frame: 0 };
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=4000",
        scrub: 0.5,
        pin: true,
      }
    });

    tl.to(animObj, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      onUpdate: () => {
        const frameIndex = Math.floor(animObj.frame);
        if (imagesRef.current[frameIndex]?.complete) {
          drawFrame(imagesRef.current[frameIndex]);
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-[#020408] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
