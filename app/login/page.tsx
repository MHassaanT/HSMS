"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, Shield, Building2, TrendingUp, MapPin } from 'lucide-react'
import { login } from '@/lib/auth'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    // Small delay for UX
    await new Promise(r => setTimeout(r, 700))
    const success = login(email, password)
    if (success) {
      router.push('/dashboard')
    } else {
      setError('Invalid email or password. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">

      {/* ─── LEFT PANEL — HERO ─── */}
      <div
        className="hidden lg:flex lg:w-[52%] flex-col justify-between p-12 relative overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #0b1c30 0%, #0f2d4a 40%, #0d3a5c 70%, #0e4068 100%)' }}
      >
        {/* Background grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Glowing orb */}
        <div
          className="absolute top-[-80px] right-[-80px] w-[480px] h-[480px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #14b8a6 0%, transparent 70%)' }}
        />

        {/* Top logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#14b8a6] flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-white font-bold text-[15px] leading-tight">Lyallpur Smart City</div>
            <div className="text-[#94a3b8] text-[12px]">Management Portal</div>
          </div>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-[#5eead4] text-[12px] font-medium px-3 py-1 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5eead4] animate-pulse" />
              Live Management Dashboard
            </div>
            <h1 className="text-[40px] font-bold text-white leading-[1.15] mb-4">
              Pakistan&apos;s Most Advanced<br />Housing Scheme Portal
            </h1>
            <p className="text-[#94a3b8] text-[16px] leading-relaxed max-w-[420px]">
              Manage plots, track installments, and automate buyer communications — all from a single, powerful interface.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mt-2">
            {[
              { icon: MapPin, value: '212', label: 'Total Plots' },
              { icon: TrendingUp, value: 'PKR 4.25Cr', label: 'Total Sales' },
              { icon: Shield, value: '100%', label: 'Secure & Encrypted' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white/[0.06] border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <Icon className="w-4 h-4 text-[#14b8a6] mb-2" />
                <div className="text-white font-bold text-[18px] leading-none mb-1">{value}</div>
                <div className="text-[#64748b] text-[11px] font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom footer */}
        <div className="relative z-10 flex items-center gap-2 text-[#475569] text-[12px]">
          <Shield className="w-3.5 h-3.5" />
          <span>Canal Expressway, Faisalabad · Marwa Developers © 2024</span>
        </div>
      </div>

      {/* ─── RIGHT PANEL — FORM ─── */}
      <div className="flex-1 flex items-center justify-center bg-[#f8f9ff] p-8">
        <div className="w-full max-w-[400px]">

          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <div className="w-9 h-9 rounded-lg bg-[#0b1c30] flex items-center justify-center">
              <Building2 className="w-5 h-5 text-[#14b8a6]" />
            </div>
            <div>
              <div className="text-[#0b1c30] font-bold text-[14px] leading-tight">Lyallpur Smart City</div>
              <div className="text-[#64748b] text-[11px]">Management Portal</div>
            </div>
          </div>

          {/* Heading */}
          <div className="mb-8">
            <h2 className="text-[28px] font-bold text-[#0b1c30] leading-tight mb-2">
              Welcome back
            </h2>
            <p className="text-[#64748b] text-[15px]">
              Sign in to access the admin portal.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#334155]">
                Email Address
              </label>
              <input
                id="login-email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="admin@hsms.com"
                className="h-11 border border-[#e2e8f0] rounded-lg px-4 text-[14px] text-[#0b1c30] bg-white focus:outline-none focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/20 transition-all placeholder:text-[#94a3b8]"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-[13px] font-semibold text-[#334155]">
                  Password
                </label>
                <button type="button" className="text-[12px] text-[#14b8a6] font-medium hover:text-[#0d9488] transition-colors">
                  Forgot password?
                </button>
              </div>
              <div className="relative">
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full h-11 border border-[#e2e8f0] rounded-lg px-4 pr-11 text-[14px] text-[#0b1c30] bg-white focus:outline-none focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/20 transition-all placeholder:text-[#94a3b8]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#475569] transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="bg-[#fef2f2] border border-[#fecaca] rounded-lg px-4 py-3 text-[13px] text-[#dc2626] font-medium flex items-center gap-2">
                <span className="text-[#dc2626] text-[16px]">⚠</span>
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              id="login-submit"
              type="submit"
              disabled={loading}
              className="h-11 rounded-lg font-semibold text-[14px] text-white transition-all mt-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{ background: loading ? '#0d9488' : 'linear-gradient(135deg, #0b1c30 0%, #14b8a6 100%)' }}
            >
              {loading ? (
                <>
                  <span
                    className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin"
                  />
                  Signing in…
                </>
              ) : (
                'Sign In to Portal'
              )}
            </button>
          </form>

          {/* Hint */}
          <div className="mt-6 p-4 bg-white border border-[#e2e8f0] rounded-lg">
            <p className="text-[11px] font-semibold text-[#475569] uppercase tracking-wide mb-2">Demo Credentials</p>
            <div className="flex flex-col gap-1 font-mono text-[12px] text-[#334155]">
              <span><span className="text-[#94a3b8]">Email:</span> admin@hsms.com</span>
              <span><span className="text-[#94a3b8]">Password:</span> admin123</span>
            </div>
          </div>

          <p className="text-center text-[12px] text-[#94a3b8] mt-8">
            Lyallpur Smart City · Powered by Marwa Developers
          </p>
        </div>
      </div>
    </div>
  )
}
