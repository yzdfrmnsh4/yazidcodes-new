"use client";

import React, { useEffect, useRef } from 'react';

interface SideRaysProps {
  speed?: number;
  rayColor1?: string;
  rayColor2?: string;
  intensity?: number;
  spread?: number;
  origin?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center';
  tilt?: number;
  saturation?: number;
  blend?: number;
  falloff?: number;
  opacity?: number;
}

export const SideRays: React.FC<SideRaysProps> = ({
  speed = 1.5,
  rayColor1 = '#1d4ed8',
  rayColor2 = '#06b6d4',
  intensity = 1.8,
  spread = 2.5,
  origin = 'top-right',
  tilt = 0,
  saturation = 1.5,
  blend = 0.7,
  falloff = 1.6,
  opacity = 1.0,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Number of rays to draw
    const rayCount = 18;
    const rays: { angleOffset: number; speedOffset: number; sizeOffset: number }[] = [];
    
    for (let i = 0; i < rayCount; i++) {
      rays.push({
        angleOffset: (i / rayCount) * Math.PI * 2,
        speedOffset: Math.random() * 0.5 + 0.5,
        sizeOffset: Math.random() * 0.4 + 0.8,
      });
    }

    let time = 0;

    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, width, height);

      time += 0.005 * speed;

      // Determine origin coordinates
      let ox = width;
      let oy = 0;
      if (origin === 'top-left') {
        ox = 0;
        oy = 0;
      } else if (origin === 'bottom-right') {
        ox = width;
        oy = height;
      } else if (origin === 'bottom-left') {
        ox = 0;
        oy = height;
      } else if (origin === 'center') {
        ox = width / 2;
        oy = height / 2;
      }

      // Draw rays
      ctx.save();
      ctx.globalCompositeOperation = 'screen';
      ctx.globalAlpha = opacity * 0.25; // Soft opacity for ethereal blending
      
      // We will create a radial gradient for falloff
      const maxRadius = Math.sqrt(width * width + height * height) * (1 / falloff);
      
      rays.forEach((ray, index) => {
        // Base angle depending on origin and tilt
        let baseAngle = 0;
        if (origin === 'top-right') {
          baseAngle = Math.PI * 0.75; // pointing down-left
        } else if (origin === 'top-left') {
          baseAngle = Math.PI * 0.25; // pointing down-right
        } else if (origin === 'bottom-right') {
          baseAngle = Math.PI * 1.25; // pointing up-left
        } else if (origin === 'bottom-left') {
          baseAngle = Math.PI * 1.75; // pointing up-right
        } else {
          baseAngle = 0;
        }

        // Add tilt
        baseAngle += (tilt * Math.PI) / 180;

        // Wave motion for each ray
        const currentAngle = baseAngle + Math.sin(time * ray.speedOffset + ray.angleOffset) * 0.15 * spread;
        const widthAngle = 0.06 * ray.sizeOffset * intensity;

        // Create radial gradient for this ray to blend colors nicely
        const grad = ctx.createRadialGradient(ox, oy, 0, ox, oy, maxRadius);
        grad.addColorStop(0, rayColor1);
        grad.addColorStop(blend, rayColor2);
        grad.addColorStop(1, 'transparent');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        
        // Draw slice of pie (ray cone)
        const startAngle = currentAngle - widthAngle;
        const endAngle = currentAngle + widthAngle;
        
        ctx.arc(ox, oy, maxRadius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
      });

      ctx.restore();
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [speed, rayColor1, rayColor2, intensity, spread, origin, tilt, saturation, blend, falloff, opacity]);

  return <canvas ref={canvasRef} className="w-full h-full block pointer-events-none blur-xl" />;
};

export default SideRays;
