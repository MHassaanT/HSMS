"use client"

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Sidebar from './Sidebar'
import TopBar from './TopBar'
import { isAuthenticated } from '@/lib/auth'

interface AppShellProps {
  children: React.ReactNode
  currentPage: string
}

export default function AppShell({ children, currentPage }: AppShellProps) {
  const router = useRouter()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login')
    }
  }, [router])

  useEffect(() => {
    setSidebarOpen(false)
  }, [currentPage])

  if (!isAuthenticated()) {
    return null // Avoid flash of content while redirecting
  }

  return (
    <div className="flex h-dvh overflow-hidden bg-ds-bg">
      <div className="hidden lg:flex">
        <Sidebar />
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/35 transition-opacity lg:hidden ${
          sidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      <div
        className={"fixed inset-y-0 left-0 z-50 lg:hidden " + (sidebarOpen ? "pointer-events-auto" : "pointer-events-none")}
      >
        <Sidebar
          isOpen={sidebarOpen}
          onNavigate={() => setSidebarOpen(false)}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      <div className="flex-1 flex flex-col min-w-0 min-h-0">
        <TopBar title={currentPage} onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 min-h-0 overflow-hidden">
          {children}
        </main>
      </div>
    </div>
  )
}
