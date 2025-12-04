import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function FloatingBox({ position, color, size = 1 }: any) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={position}>
                <boxGeometry args={[size, size, size]} />
                <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
            </mesh>
        </Float>
    );
}

function FloatingSphere({ position, color, size = 1 }: any) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.005;
            meshRef.current.rotation.y += 0.008;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
            <mesh ref={meshRef} position={position}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.3} />
            </mesh>
        </Float>
    );
}

function FloatingTorus({ position, color, size = 1 }: any) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.008;
            meshRef.current.rotation.z += 0.006;
        }
    });

    return (
        <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.8}>
            <mesh ref={meshRef} position={position}>
                <torusGeometry args={[size, size * 0.4, 16, 100]} />
                <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
            </mesh>
        </Float>
    );
}

export function GeometricScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 50 }} gl={{ antialias: true, alpha: true }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#10b981" />

                {/* Green geometric shapes */}
                <FloatingBox position={[-3, 2, 0]} color="#10b981" size={1.2} />
                <FloatingSphere position={[3, -1, -2]} color="#34d399" size={0.8} />
                <FloatingTorus position={[0, -2, -1]} color="#6ee7b7" size={0.7} />
                <FloatingBox position={[2, 2, -3]} color="#a7f3d0" size={0.9} />
                <FloatingSphere position={[-2, -1, -2]} color="#10b981" size={1} />
                <FloatingTorus position={[-1, 1, -2]} color="#34d399" size={0.6} />
            </Canvas>
        </div>
    );
}
