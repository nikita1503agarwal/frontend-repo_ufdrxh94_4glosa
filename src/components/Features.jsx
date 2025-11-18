import React, { useEffect, useMemo, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || ''

export default function Features() {
  const [active, setActive] = useState([])
  const [inactive, setInactive] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true
    async function load() {
      try {
        const [a, i] = await Promise.all([
          fetch(`${BACKEND}/api/turbines?status=Active`).then(r => r.ok ? r.json() : []),
          fetch(`${BACKEND}/api/turbines?status=Inactive`).then(r => r.ok ? r.json() : []),
        ])
        if (isMounted) {
          setActive(a)
          setInactive(i)
        }
      } catch (e) {
        if (isMounted) setError('Could not load turbines')
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    load()
    return () => { isMounted = false }
  }, [])

  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl font-semibold">Turbine overview</h2>
            <p className="text-white/60 text-sm mt-2">Grouped by status directly from your spreadsheet.</p>
          </div>
          <ImportButton/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TurbineList title={`Active (${active.length})`} items={active} emptyText={loading ? 'Loading…' : 'No active turbines'}/>
          <TurbineList title={`Inactive (${inactive.length})`} items={inactive} emptyText={loading ? 'Loading…' : 'No inactive turbines'}/>
        </div>
        {error && <p className="mt-6 text-amber-300/80 text-sm">{error}</p>}
      </div>
    </section>
  )
}

function TurbineList({ title, items, emptyText }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
      <h3 className="font-medium text-white/90">{title}</h3>
      <ul className="mt-4 space-y-3 max-h-[420px] overflow-auto pr-2">
        {items.length === 0 ? (
          <li className="text-white/60 text-sm">{emptyText}</li>
        ) : items.map(t => (
          <li key={t.id || t.name} className="flex items-start justify-between gap-3 rounded-xl bg-white/[0.03] border border-white/10 p-3">
            <div>
              <div className="text-sm font-medium">{t.name}</div>
              <div className="text-xs text-white/60">{[t.location, t.capacity_mw ? `${t.capacity_mw} MW` : null].filter(Boolean).join(' · ')}</div>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full border ${t.status === 'Active' ? 'border-emerald-400 text-emerald-300' : 'border-white/20 text-white/60'}`}>{t.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ImportButton() {
  const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1pmvtL16uqi84IPZ_Yo9LDeYQzcAAtWGFLfnna4Y0jH4/edit?gid=879230322#gid=879230322'
  async function handleImport() {
    try {
      const url = new URL(`${BACKEND}/api/turbines/import`)
      url.searchParams.set('sheet_url', SHEET_URL)
      const res = await fetch(url.toString(), { method: 'POST' })
      if (!res.ok) throw new Error('Import failed')
      const data = await res.json()
      alert(`Imported: ${data.inserted} inserted, ${data.updated} updated`)
      window.location.reload()
    } catch (e) {
      alert('Import failed. Make sure the sheet is publicly accessible (Anyone with the link can view).')
    }
  }
  return (
    <button onClick={handleImport} className="text-sm bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 px-3 py-2 rounded-lg transition">
      Sync from Google Sheets
    </button>
  )
}
