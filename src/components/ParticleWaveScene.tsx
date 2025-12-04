import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ParticleWave() {
    const pointsRef = useRef<THREE.Points>(null);

    const particlesCount = 2000;

    const positions = useMemo(() => {
        const positions = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 20;
            positions[i3 + 1] = (Math.random() - 0.5) * 10;
            positions[i3 + 2] = (Math.random() - 0.5) * 20;
        }

        return positions;
    }, []);

    const colors = useMemo(() => {
        const colors = new Float32Array(particlesCount * 3);
        const greenColors = [
            new THREE.Color('#10b981'),
            new THREE.Color('#34d399'),
            new THREE.Color('#6ee7b7'),
            new THREE.Color('#a7f3d0')
        ];

        for (let i = 0; i < particlesCount; i++) {
            const i3 = i * 3;
            const color = greenColors[Math.floor(Math.random() * greenColors.length)];
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;
        }

        return colors;
    }, []);

    useFrame((state) => {
        if (pointsRef.current) {
            const time = state.clock.getElapsedTime();
            const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;

            for (let i = 0; i < particlesCount; i++) {
                const i3 = i * 3;
                const x = positions[i3];
                const z = positions[i3 + 2];

                // Create wave effect
                positions[i3 + 1] = Math.sin(x * 0.3 + time) * Math.cos(z * 0.3 + time) * 2;
            }

            pointsRef.current.geometry.attributes.position.needsUpdate = true;
            pointsRef.current.rotation.y = time * 0.05;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesCount}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={particlesCount}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial size={0.1} vertexColors sizeAttenuation transparent opacity={0.8} />
        </points>
    );
}

export function ParticleWaveScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 5, 10], fov: 75 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
                <ParticleWave />
            </Canvas>
        </div>
    );
}
