import { useEffect, useRef } from "react";
import * as THREE from "three";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function HeroAnimation() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || prefersReducedMotion()) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 7, 12);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    const grid = new THREE.GridHelper(24, 36, 0x22d3ee, 0x1f2937);
    grid.position.y = -1.2;
    scene.add(grid);

    const particleCount = 420;
    const positions = new Float32Array(particleCount * 3);
    const speeds = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i += 1) {
      const index = i * 3;
      positions[index] = (Math.random() - 0.5) * 22;
      positions[index + 1] = Math.random() * 8 - 0.5;
      positions[index + 2] = (Math.random() - 0.5) * 18;
      speeds[i] = 0.008 + Math.random() * 0.022;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0x22d3ee,
      size: 0.045,
      transparent: true,
      opacity: 0.72,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    const streamMaterial = new THREE.LineBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.42,
      blending: THREE.AdditiveBlending,
    });

    const streams = Array.from({ length: 18 }, (_, i) => {
      const x = -9 + i * 1.05;
      const geometry = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(x, -1, -7),
        new THREE.Vector3(x + 0.35, 1.8 + Math.random() * 3, 7),
      ]);
      const line = new THREE.Line(geometry, streamMaterial);
      line.userData.speed = 0.006 + Math.random() * 0.015;
      scene.add(line);
      return line;
    });

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / Math.max(clientHeight, 1);
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(mount);
    resize();

    let frameId = 0;
    const animate = () => {
      frameId = window.requestAnimationFrame(animate);

      const positionAttribute = particlesGeometry.getAttribute(
        "position",
      ) as THREE.BufferAttribute;

      for (let i = 0; i < particleCount; i += 1) {
        const yIndex = i * 3 + 1;
        positions[yIndex] += speeds[i];
        if (positions[yIndex] > 7.8) {
          positions[yIndex] = -1.1;
        }
      }

      positionAttribute.needsUpdate = true;
      particles.rotation.y += 0.0018;
      grid.rotation.y += 0.0009;

      streams.forEach((line) => {
        line.position.z += line.userData.speed;
        if (line.position.z > 2.2) {
          line.position.z = -2.2;
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mount.removeChild(renderer.domElement);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      grid.geometry.dispose();
      streams.forEach((line) => line.geometry.dispose());
      streamMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="absolute inset-0 opacity-80 [mask-image:linear-gradient(to_bottom,black,black,transparent)]"
    />
  );
}
