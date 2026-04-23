"use client"

import React, { Suspense } from "react"
import { cn } from "@/lib/utils"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import { CardProvider } from "./stellar-gallery/StellarContext"
import { StarfieldBackground } from "./stellar-gallery/Starfield"
import { GalleryGalaxy } from "./stellar-gallery/GalleryGalaxy"
import { CardModal } from "./stellar-gallery/CardModal"

export default function StellarCardGallerySingle() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <CardProvider>
      <div className={cn(
        "w-full relative overflow-hidden bg-black rounded-[32px] md:rounded-[40px] border border-white/10 shadow-2xl transition-all duration-500",
        isMobile ? "h-[500px]" : "h-[600px]"
      )}>
        {/* Background Starfield */}
        <StarfieldBackground />

        {/* 3D Scene */}
        <Canvas
          camera={{ 
            position: [0, 0, isMobile ? 30 : 20], 
            fov: isMobile ? 75 : 60 
          }}
          className="absolute inset-0 z-10"
          gl={{ antialias: true }}
          onCreated={({ gl }) => {
            gl.domElement.style.pointerEvents = "auto"
          }}
        >
          <Suspense fallback={null}>
            <Environment preset="night" />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <GalleryGalaxy />
            <OrbitControls
              enablePan={false}
              enableZoom={true}
              enableRotate={true}
              minDistance={isMobile ? 15 : 10}
              maxDistance={60}
              autoRotate={true}
              autoRotateSpeed={0.5}
              rotateSpeed={0.5}
              zoomSpeed={1}
            />
          </Suspense>
        </Canvas>

        {/* UI Overlay */}
        <div className="absolute top-6 md:top-8 right-6 md:right-8 z-20 text-white pointer-events-none text-right">
          <h1 className="text-2xl md:text-3xl font-black mb-2 uppercase tracking-tighter text-[#5B5EFF]">المجرة الرقمية</h1>
          <p className="text-[10px] md:text-xs opacity-50 font-bold tracking-widest">
            {isMobile ? "المس للاستكشاف" : "اسحب للاستكشاف • استخدم التمرير للتقريب"}
          </p>
        </div>

        {/* Modal Overlay */}
        <CardModal />
      </div>
    </CardProvider>
  )
}
