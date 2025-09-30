import { useMemo, useState } from 'react'
import { exportToCsv } from '@/utils/csv'

export default function AdminMachines() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 5
  const allRows = useMemo(() => ([
    ['edge-01','v2.1.0','online'],
    ['edge-02','v2.1.0','offline'],
    ['lab-01','v2.0.9','online'],
    ['lab-02','v2.0.9','online'],
    ['qa-01','v2.1.0','online'],
    ['qa-02','v2.1.0','offline'],
    ['dev-01','v2.2.0','online'],
  ].map(([h,a,s])=>({ hostname:h, agent:a, status:s }))), [])
  const filtered = allRows.filter(r => r.hostname.toLowerCase().includes(query.toLowerCase()))
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const rows = filtered.slice((page-1)*pageSize, page*pageSize)
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Machines</h1>
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <input className="border rounded px-3 py-2 w-full md:w-72" placeholder="Search hostname" value={query} onChange={(e)=>{setQuery(e.target.value); setPage(1)}} />
        <div className="ml-auto flex gap-2">
          <button className="btn-secondary" onClick={()=>exportToCsv('machines.csv', rows)}>Export CSV</button>
        </div>
      </div>
      <div className="card">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              <th className="py-2">Hostname</th>
              <th className="py-2">Agent</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.hostname} className="border-t">
                <td className="py-2">{r.hostname}</td>
                <td className="py-2">{r.agent}</td>
                <td className="py-2">{r.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex items-center justify-between text-sm text-slate-600">
          <div>Page {page} of {totalPages}</div>
          <div className="flex gap-2">
            <button className="btn-secondary" disabled={page<=1} onClick={()=>setPage(p=>Math.max(1,p-1))}>Previous</button>
            <button className="btn-secondary" disabled={page>=totalPages} onClick={()=>setPage(p=>Math.min(totalPages,p+1))}>Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}


