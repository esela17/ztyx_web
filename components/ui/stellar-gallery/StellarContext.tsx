"use client"

import React, { createContext, useContext, useState } from "react"
import { PortfolioItem, portfolioData } from "@/constants/portfolio"

type CardContextType = {
  selectedCard: PortfolioItem | null
  setSelectedCard: (card: PortfolioItem | null) => void
  cards: PortfolioItem[]
}

const CardContext = createContext<CardContextType | undefined>(undefined)

export function useCard() {
  const ctx = useContext(CardContext)
  if (!ctx) throw new Error("useCard must be used within CardProvider")
  return ctx
}

export function CardProvider({ children }: { children: React.ReactNode }) {
  const [selectedCard, setSelectedCard] = useState<PortfolioItem | null>(null)

  return (
    <CardContext.Provider value={{ selectedCard, setSelectedCard, cards: portfolioData }}>
      {children}
    </CardContext.Provider>
  )
}
