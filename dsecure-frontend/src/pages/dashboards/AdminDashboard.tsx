import { useAuth } from '@/auth/AuthContext'

export default function AdminDashboard() {
  const { user } = useAuth()
  
  const stats = [
    { label: 'Total Devices', value: '2,847', change: '+12%', trend: 'up' },
    { label: 'Active Jobs', value: '14', change: '-2', trend: 'down' },
    { label: 'Success Rate', value: '99.2%', change: '+0.3%', trend: 'up' },
    { label: 'Total Users', value: '156', change: '+5', trend: 'up' }
  ]

  const recentJobs = [
    { id: '3421', devices: 120, status: 'completed', date: '2h ago', type: 'Device Erasure' },
    { id: '3420', devices: 60, status: 'completed', date: '5h ago', type: 'Server Erasure' },
    { id: '3419', devices: 10, status: 'failed', date: '8h ago', type: 'Cloud Erasure' }
  ]

  const users = [
    { email: 'alice@admin.com', role: 'admin', status: 'active', lastActive: '2m ago' },
    { email: 'bob@example.com', role: 'user', status: 'active', lastActive: '1h ago' },
    { email: 'carol@example.com', role: 'user', status: 'inactive', lastActive: '2d ago' }
  ]

  return (
    <div className="container-app py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Welcome back, Admin
          </h1>
          <p className="mt-2 text-slate-600 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
            Signed in as {user?.email}
          </p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            New Job
          </button>
          <button className="btn-primary flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Generate Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(stat => (
          <div key={stat.label} className="card !p-6 flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-slate-600">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-slate-900">{stat.value}</p>
            </div>
            <div className={`flex items-center gap-1 text-sm font-medium ${
              stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.change}
              <svg className={`w-5 h-5 ${stat.trend === 'up' ? 'rotate-0' : 'rotate-180'}`} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 4.414 6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {/* Recent Jobs */}
        <div className="card !p-0">
          <div className="px-6 py-5 border-b border-slate-200">
            <h2 className="font-semibold text-slate-900">Recent Jobs</h2>
          </div>
          <div className="divide-y divide-slate-200">
            {recentJobs.map(job => (
              <div key={job.id} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${
                    job.status === 'completed' ? 'bg-green-400' : 'bg-red-400'
                  }`}></div>
                  <div>
                    <div className="font-medium text-slate-900">Job #{job.id}</div>
                    <div className="text-sm text-slate-500">{job.type} • {job.devices} devices</div>
                  </div>
                </div>
                <div className="text-sm text-slate-500">{job.date}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Users Table */}
        <div className="card !p-0">
          <div className="px-6 py-5 border-b border-slate-200">
            <h2 className="font-semibold text-slate-900">Active Users</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-slate-500 bg-slate-50">
                  <th className="px-6 py-3 font-medium">User</th>
                  <th className="px-6 py-3 font-medium">Role</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                  <th className="px-6 py-3 font-medium">Last Active</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {users.map(user => (
                  <tr key={user.email} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-900">{user.email}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                        user.role === 'admin' ? 'bg-brand-100 text-brand-800' : 'bg-slate-100 text-slate-800'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 ${
                        user.status === 'active' ? 'text-green-600' : 'text-slate-500'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          user.status === 'active' ? 'bg-green-400' : 'bg-slate-400'
                        }`}></span>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">
                      {user.lastActive}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}


