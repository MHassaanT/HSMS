import React from 'react'
import { Block, Plot } from '@/lib/types'
import { generatePlots } from '@/lib/data'
import PlotCell from './PlotCell'

interface PlotGridProps {
  block: Block
  selectedPlotId: string | null
  onPlotSelect: (plot: Plot) => void
}

export default function PlotGrid({ block, selectedPlotId, onPlotSelect }: PlotGridProps) {
  const plots = React.useMemo(() => generatePlots(block), [block])
  
  const availableCount = plots.filter(p => p.status === 'available').length
  const bookedCount = plots.filter(p => p.status === 'booked').length
  const soldCount = plots.filter(p => p.status === 'sold').length

  const gridColsClass = 
    block.id === 'general' ? 'grid-cols-10' :
    block.id === 'commercial' ? 'grid-cols-6' :
    'grid-cols-8' // overseas & executive

  const gridMinWidthClass =
    block.id === 'general' ? 'min-w-[520px]' :
    block.id === 'commercial' ? 'min-w-[340px]' :
    'min-w-[430px]'

  return (
    <div className="flex flex-col mb-8">
      {/* Block Header */}
      <div className="flex flex-col gap-3 border-b border-[#E2E8F0] pb-3 mb-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex min-w-0 flex-col">
          <h2 className="text-[18px] font-semibold text-ds-on-surface">{block.name}</h2>
          <span className="text-[13px] text-ds-on-surface-variant">{block.description}</span>
        </div>
        
        <div className="flex flex-col gap-2 sm:items-end">
          <div className="flex flex-wrap items-center gap-2">
            <span className="bg-[#dcfce7] text-[#166534] rounded px-2 py-0.5 text-[11px] font-medium">{availableCount} Available</span>
            <span className="bg-ds-tertiary-container text-ds-on-tertiary-container rounded px-2 py-0.5 text-[11px] font-medium">{bookedCount} Booked</span>
            <span className="bg-ds-error-container text-ds-on-error-container rounded px-2 py-0.5 text-[11px] font-medium">{soldCount} Sold</span>
          </div>
          <span className="text-[11px] uppercase text-ds-on-surface-variant font-medium tracking-wide">SCALE 1:200</span>
        </div>
      </div>

      {/* Grid */}
      <div className="overflow-x-auto pb-1">
        <div className={`grid ${gridColsClass} ${gridMinWidthClass} md:min-w-0 gap-1.5`}>
          {plots.map((plot) => (
            <PlotCell
              key={plot.id}
              plot={plot}
              isSelected={plot.id === selectedPlotId}
              onClick={onPlotSelect}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
