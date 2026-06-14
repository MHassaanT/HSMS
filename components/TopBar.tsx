"use client"

import { Bell, HelpCircle, Search, LogOut, Menu } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { logout } from '@/lib/auth'

export default function TopBar({ title, onMenuClick }: { title: string; onMenuClick?: () => void }) {
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.replace('/login')
  }

  return (
    <header className="min-h-[64px] bg-ds-surface border-b border-[#E2E8F0] px-4 sm:px-6 py-3 flex items-center justify-between gap-3 shrink-0">
      {/* LEFT */}
      <div className="flex min-w-0 items-center gap-3">
        <button
          type="button"
          onClick={onMenuClick}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-ds-outline-variant text-ds-on-surface-variant transition-colors hover:bg-ds-surface-container hover:text-ds-on-surface lg:hidden"
          aria-label="Open navigation"
        >
          <Menu className="h-5 w-5" />
        </button>
        <div className="flex min-w-0 flex-col">
          <h1 className="truncate text-[18px] sm:text-[20px] font-semibold text-ds-on-surface leading-tight">{title}</h1>
          <div className="hidden truncate text-[12px] text-ds-on-surface-variant sm:block">
            Lyallpur Smart City / {title}
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-4">
        {/* Search */}
        <div className="hidden md:flex items-center relative">
          <Search className="w-4 h-4 text-ds-secondary absolute left-3" />
          <input
            type="text"
            placeholder="Search plots, buyers..."
            className="w-64 h-9 pl-9 pr-3 border border-ds-outline-variant rounded text-[13px] focus:outline-none focus:border-ds-secondary transition-colors"
          />
        </div>

        {/* Icons */}
        <div className="relative cursor-pointer">
          <Bell className="w-5 h-5 text-ds-on-surface-variant hover:text-ds-on-surface transition-colors" />
          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-ds-error rounded-full border border-ds-surface" />
        </div>
        
        <HelpCircle className="hidden sm:block w-5 h-5 text-ds-on-surface-variant cursor-pointer hover:text-ds-on-surface transition-colors" />

        {/* Divider */}
        <div className="hidden sm:block h-6 w-px bg-ds-outline-variant mx-1" />

        {/* User Chip */}
        <div className="hidden sm:flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 rounded-full bg-ds-primary-dim flex items-center justify-center shrink-0">
            <span className="text-white text-[12px] font-medium">MA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-medium text-ds-on-surface leading-tight">Malik Mudassar</span>
            <span className="text-[11px] text-ds-on-surface-variant">Chairman</span>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          title="Sign Out"
          className="ml-1 p-1.5 rounded hover:bg-ds-surface-container transition-colors text-ds-on-surface-variant hover:text-ds-error"
        >
          <LogOut className="w-4 h-4" />
        </button>
      </div>
    </header>
  )
}
