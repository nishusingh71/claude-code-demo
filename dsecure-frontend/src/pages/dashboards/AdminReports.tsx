import { useMemo, useState } from 'react'
import { exportToCsv, openPrintView } from '@/utils/csv'

export default function AdminReports() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 5
  const allRows = useMemo(() => [1,2,3,4,5,6,7,8,9,10].map((i) => ({
    id: `AR-2025-${1000+i}`,
    date: `2025-09-${String(i).padStart(2,'0')}`,
    devices: i * 25,
  })), [])
  const filtered = allRows.filter(r => r.id.toLowerCase().includes(query.toLowerCase()))
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const rows = filtered.slice((page-1)*pageSize, page*pageSize)
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Audit Reports</h1>
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <input className="border rounded px-3 py-2 w-full md:w-72" placeholder="Search by ID" value={query} onChange={(e)=>{setQuery(e.target.value); setPage(1)}} />
        <div className="ml-auto flex gap-2">
          <button className="btn-secondary" onClick={()=>exportToCsv('reports.csv', rows)}>Export CSV</button>
          <button className="btn-secondary" onClick={()=>{
            const body = `<h1>Audit Reports</h1>` +
              `<table><thead><tr><th>Report ID</th><th>Date</th><th>Devices</th></tr></thead><tbody>`+
              rows.map(r=>`<tr><td>${r.id}</td><td>${r.date}</td><td>${r.devices}</td></tr>`).join('')+
              `</tbody></table>`
            openPrintView('Audit Reports', body)
          }}>Print</button>
        </div>
      </div>
      <div className="card">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              <th className="py-2">Report ID</th>
              <th className="py-2">Date</th>
              <th className="py-2">Devices</th>
              <th className="py-2">Download</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="py-2">{r.id}</td>
                <td className="py-2">{r.date}</td>
                <td className="py-2">{r.devices}</td>
                <td className="py-2"><a href="#" className="text-brand">PDF</a></td>
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


