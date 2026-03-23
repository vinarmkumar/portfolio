import React, { useEffect, useRef, useState } from "react";

class Particle {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.z = Math.random() * 300 - 150;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.vz = Math.random() * 1.5 + 0.5;
    this.size = Math.random() * 3 + 1;
    this.colors = ["#1cd8d2", "#00bf8f"];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
  }

  update(mouseX, mouseY) {
    this.x += this.vx;
    this.y += this.vy;
    this.z += this.vz;

    if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;
    if (this.z > 300 || this.z < -150) {
      this.z = this.z > 300 ? -150 : 300;
    }

    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance < 150) {
      const force = (150 - distance) / 150 * 0.08;
      this.vx += (dx / distance) * force;
      this.vy += (dy / distance) * force;
    }

    this.vx *= 0.99;
    this.vy *= 0.99;
  }

  draw(ctx) {
    const scale = 300 / (300 + this.z);
    const x = this.x * scale;
    const y = this.y * scale;
    const size = this.size * scale;
    const opacity = scale * 0.8;

    ctx.fillStyle = this.color;
    ctx.globalAlpha = opacity;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

export default function ParticlesBackground() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let particles = [];
    const particleCount = 50;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => new Particle(canvas));
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    let animationId;
    const animate = () => {

      ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update(mousePos.x, mousePos.y);
        p.draw(ctx);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    />
  );
}