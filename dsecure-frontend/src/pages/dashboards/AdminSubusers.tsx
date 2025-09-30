export default function AdminSubusers() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-slate-900">Manage Subusers</h1>
      <div className="card">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-slate-500">
              <th className="py-2">Email</th>
              <th className="py-2">Role</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['alice@admin.com','admin'],
              ['bob@example.com','user'],
            ].map(([e,r]) => (
              <tr key={e} className="border-t">
                <td className="py-2">{e}</td>
                <td className="py-2">{r}</td>
                <td className="py-2"><button className="btn-secondary">Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}


