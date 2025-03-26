// components/ThreeWrapper.tsx
'use client'

import { Canvas } from '@react-three/fiber'

export function ThreeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Canvas>
      {children}
    </Canvas>
  )
}