import React, { useRef, useEffect } from "react";

/**
 * ParticleCanvas Component
 * Renders a full-screen canvas with interactive particles.
 */
const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Mouse state for interaction
    const mouse = {
      x: undefined,
      y: undefined,
      radius: 200, // Radius of interaction
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseOut);

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        // Base velocity for random floating
        this.baseX = (Math.random() - 0.5) * 1.5;
        this.baseY = (Math.random() - 0.5) * 1.5;

        // Current velocity (starts as base velocity)
        this.velocity = {
          x: this.baseX,
          y: this.baseY,
        };

        this.friction = 0.95; // Damping factor
        this.density = Math.random() * 30 + 1; // Used for calculating repulsion response
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(156, 163, 175, 0.5)"; // Neutral slate color
        ctx.fill();
      }

      update() {
        // Interaction logic
        if (mouse.x !== undefined && mouse.y !== undefined) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          // Repulsion force
          if (distance < mouse.radius) {
            // Calculate repulsion direction and force
            const maxDistance = mouse.radius;
            const force = (maxDistance - distance) / maxDistance;

            // Accelerate away from mouse
            const directionX = dx / distance;
            const directionY = dy / distance;

            // Subtract acceleration from velocity to repel
            this.velocity.x -= directionX * force * 1; // Strength multiplier
            this.velocity.y -= directionY * force * 1;
          }
        }

        // Apply friction to dampen speed (prevent infinite acceleration)
        this.velocity.x *= this.friction;
        this.velocity.y *= this.friction;

        // Restore minimum movement (floating) if particle slows down too much
        if (Math.abs(this.velocity.x) < Math.abs(this.baseX)) {
          this.velocity.x += this.baseX * 0.1;
        }
        if (Math.abs(this.velocity.y) < Math.abs(this.baseY)) {
          this.velocity.y += this.baseY * 0.1;
        }

        // Update position
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        // Boundary handling: wrap around screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
    }

    const particlesArray = [];
    let currentParticleCount = 0;

    const init = () => {
      const count = window.innerWidth < 640 ? 40 : 100;
      if (count === currentParticleCount) return;

      currentParticleCount = count;
      particlesArray.length = 0;
      for (let i = 0; i < count; i++) {
        particlesArray.push(new Particle());
      }
    };

    // Set canvas dimensions to fill the window
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas(); // Initial sizing calls init()

    // Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none", // Allow clicks to pass through
        zIndex: 0, // Behind content but visible depending on parent
      }}
    />
  );
};

export default ParticleCanvas;
