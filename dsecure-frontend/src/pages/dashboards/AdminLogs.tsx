export default function AdminLogs() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Logs</h1>
      <div className="card">
        <pre className="text-xs text-slate-700 overflow-auto max-h-64">{`[09:01:12] job 3421 start\n[09:07:51] job 3421 complete\n[10:14:02] job 3422 start\n[10:20:45] job 3422 fail: disk read error`}</pre>
      </div>
    </div>
  )
}


