import React, { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Impact() {
  const [stats, setStats] = useState({ active: 0, inactive: 0, unknown: 0 })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true
    async function fetchStats() {
      try {
        const res = await fetch(`${BACKEND}/api/turbines/stats`)
        if (!res.ok) throw new Error('Failed to load stats')
        const data = await res.json()
        if (isMounted) setStats(data)
      } catch (e) {
        if (isMounted) setError('Could not load live stats')
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    fetchStats()
    return () => { isMounted = false }
  }, [])

  return (
    <section id="impact" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Fleet status</h2>
          <p className="text-white/60 text-sm mt-2">Live counts from your spreadsheet.</p>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <StatCard label="Active turbines" value={loading ? '—' : stats.active} note="Currently operational"/>
          <StatCard label="Inactive turbines" value={loading ? '—' : stats.inactive} note="Down or decommissioned"/>
          <StatCard label="Unknown" value={loading ? '—' : stats.unknown} note="Missing status"/>
        </div>
        {error && <p className="mt-6 text-amber-300/80 text-sm">{error}</p>}
      </div>
    </section>
  )
}

function StatCard({ label, value, note }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <p className="text-sm text-white/70">{label}</p>
      <p className="mt-2 text-4xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-white/60 text-sm">{note}</p>
    </div>
  )
}
