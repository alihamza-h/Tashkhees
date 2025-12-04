import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Trail } from '@react-three/drei';
import * as THREE from 'three';

function Atom({ count = 4, radius = 2 }) {
    const lines = useMemo(
        () => new Array(count).fill(0).map(() => ({
            speed: 0.5 + Math.random() * 0.5,
            rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
            color: new THREE.Color(Math.random() > 0.5 ? '#60a5fa' : '#a78bfa').multiplyScalar(2), // Blue to Purple
        })),
        [count]
    );

    return (
        <group>
            {lines.map((props, index) => (
                <Electron key={index} {...props} radius={radius} />
            ))}
            <Core />
        </group>
    );
}

function Electron({ radius = 2, speed = 1, rotation = [0, 0, 0], color = '#60a5fa' }: any) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            const t = state.clock.getElapsedTime() * speed;
            ref.current.position.set(
                Math.sin(t) * radius,
                (Math.cos(t) * radius * Math.sin(t)) / 2,
                Math.cos(t) * radius
            );
        }
    });

    return (
        <group rotation={rotation as [number, number, number]}>
            <Trail local width={2} length={8} color={color} attenuation={(t) => t * t}>
                <mesh ref={ref}>
                    <sphereGeometry args={[0.1]} />
                    <meshBasicMaterial color={color} toneMapped={false} />
                </mesh>
            </Trail>
        </group>
    );
}

function Core() {
    return (
        <mesh>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color="#3b82f6" emissive="#1d4ed8" emissiveIntensity={2} roughness={0.1} metalness={0.8} />
            <pointLight intensity={2} distance={5} color="#60a5fa" />
        </mesh>
    );
}

export function ThreeScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <Atom />
                </Float>
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
}
