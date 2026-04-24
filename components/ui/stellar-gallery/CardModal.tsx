"use client"

import React, { useRef, useState } from "react"
import { Heart, X, ExternalLink } from "lucide-react"
import { useCard } from "./StellarContext"
import Image from "next/image"

export function CardModal() {
  const { selectedCard, setSelectedCard } = useCard()
  const [isFavorited, setIsFavorited] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  if (!selectedCard) return null

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = (y - centerY) / 15
    const rotateY = (centerX - x) / 15
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.5s ease-out"
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)"
    }
  }

  const toggleFavorite = () => setIsFavorited((v) => !v)
  const handleClose = () => setSelectedCard(null)
  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) handleClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={handleBackdropClick}>
      <div className="relative max-w-md w-full">
        <button onClick={handleClose} className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10">
          <X className="w-8 h-8" />
        </button>

        <div style={{ perspective: "1000px" }} className="w-full">
          <div
            ref={cardRef}
            className="relative cursor-pointer rounded-[24px] bg-[#111320] p-4 transition-all duration-500 ease-out w-full border border-white/10"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative w-full mb-6" style={{ aspectRatio: "16 / 9" }}>
              <Image
                fill
                loading="lazy"
                className="absolute inset-0 h-full w-full rounded-xl bg-black object-cover"
                alt={selectedCard.title}
                src={selectedCard.image || "/placeholder.svg"}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="text-right space-y-4">
              <h3 className="text-[#F0F1FF] text-xl font-black">{selectedCard.title}</h3>
              <p className="text-[#9496C0] text-sm leading-relaxed">{selectedCard.description}</p>
            </div>

            <div className="flex gap-3 mt-8">
              <button
                type="button"
                className="inline-flex h-12 flex-1 items-center justify-center rounded-xl text-sm font-bold text-black bg-[#5B5EFF] hover:bg-[#5B5EFF]/90 transition-all active:scale-[0.97]"
              >
                <div className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>عرض التفاصيل</span>
                </div>
              </button>
              <button
                type="button"
                onClick={toggleFavorite}
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl text-[#F0F1FF] bg-white/5 border border-white/10 hover:bg-white/10 transition-all active:scale-[0.97]"
              >
                <Heart className="h-5 h-5" fill={isFavorited ? "#5B5EFF" : "none"} stroke={isFavorited ? "#5B5EFF" : "currentColor"} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
