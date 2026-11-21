import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  speed: number;
}

export function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    let animationFrameId = 0;
    let stars: Star[] = [];
    const numStars = 110;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.2,
          opacity: Math.random() * 0.7 + 0.2,
          speed: Math.random() * 0.15 + 0.05,
        });
      }
    };

    const renderFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 235, 255, ${s.opacity})`;
        ctx.fill();

        if (!prefersReducedMotion) {
          s.y += s.speed;
          if (s.y > canvas.height) {
            s.y = 0;
            s.x = Math.random() * canvas.width;
          }
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = window.requestAnimationFrame(renderFrame);
      }
    };

    const handleResize = () => {
      resizeCanvas();
      initStars();
      if (prefersReducedMotion) {
        renderFrame();
      }
    };

    resizeCanvas();
    initStars();
    renderFrame();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="starfield"
      aria-hidden="true"
      className="fixed inset-0 w-screen h-screen z-0 pointer-events-none"
    />
  );
}
