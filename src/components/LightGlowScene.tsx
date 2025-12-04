import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ position, color, speed }: any) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * speed;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.5;
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
            <MeshDistortMaterial
                color={color}
                attach="material"
                distort={0.4}
                speed={2}
                roughness={0.1}
                metalness={0.8}
            />
        </Sphere>
    );
}

function FloatingRings() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2;
            groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[3, 0.1, 16, 100]} />
                <meshStandardMaterial color="#10b981" metalness={0.9} roughness={0.1} emissive="#10b981" emissiveIntensity={0.5} />
            </mesh>
            <mesh rotation={[0, Math.PI / 2, 0]}>
                <torusGeometry args={[3.5, 0.08, 16, 100]} />
                <meshStandardMaterial color="#34d399" metalness={0.9} roughness={0.1} emissive="#34d399" emissiveIntensity={0.5} />
            </mesh>
            <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                <torusGeometry args={[4, 0.06, 16, 100]} />
                <meshStandardMaterial color="#6ee7b7" metalness={0.9} roughness={0.1} emissive="#6ee7b7" emissiveIntensity={0.5} />
            </mesh>
        </group>
    );
}

export function LightGlowScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
                <pointLight position={[-10, -10, -10]} intensity={1} color="#10b981" />
                <spotLight position={[0, 10, 0]} intensity={1.5} angle={0.3} penumbra={1} color="#34d399" />

                {/* Central glowing sphere */}
                <AnimatedSphere position={[0, 0, 0]} color="#a7f3d0" speed={0.3} />

                {/* Orbiting rings */}
                <FloatingRings />

                {/* Small accent spheres */}
                <Sphere args={[0.3, 32, 32]} position={[2, 1, -1]}>
                    <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={1} metalness={0.9} roughness={0.1} />
                </Sphere>
                <Sphere args={[0.25, 32, 32]} position={[-2, -1, -1]}>
                    <meshStandardMaterial color="#34d399" emissive="#34d399" emissiveIntensity={1} metalness={0.9} roughness={0.1} />
                </Sphere>
                <Sphere args={[0.2, 32, 32]} position={[1, -2, 0]}>
                    <meshStandardMaterial color="#6ee7b7" emissive="#6ee7b7" emissiveIntensity={1} metalness={0.9} roughness={0.1} />
                </Sphere>
            </Canvas>
        </div>
    );
}
