import React from 'react'
import { Plot } from '@/lib/types'
import { cn } from '@/lib/utils'

interface PlotCellProps {
  plot: Plot
  isSelected: boolean
  onClick: (plot: Plot) => void
}

export default function PlotCell({ plot, isSelected, onClick }: PlotCellProps) {
  const isAvailable = plot.status === 'available'
  const isBooked = plot.status === 'booked'
  const isSold = plot.status === 'sold'

  return (
    <button
      type="button"
      onClick={() => onClick(plot)}
      className={cn(
        "min-h-[40px] sm:min-h-[44px] rounded flex items-center justify-center text-[11px] font-semibold transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ds-primary focus-visible:ring-offset-1",
        isAvailable && "bg-[#dcfce7] text-[#166534] border border-[#86efac] hover:bg-[#bbf7d0] hover:border-[#4ade80] hover:scale-105",
        isBooked && "bg-ds-tertiary-container text-ds-on-tertiary-container border border-[#fbbf24] hover:scale-105",
        isSold && "bg-ds-error-container text-ds-on-error-container border border-[#fca5a5] hover:scale-105",
        isSelected && "ring-2 ring-ds-primary ring-offset-1 scale-105"
      )}
      title={`${plot.id} - ${plot.status}`}
      aria-pressed={isSelected}
      aria-label={`Plot ${plot.id}, ${plot.status}`}
    >
      {plot.number}
    </button>
  )
}
