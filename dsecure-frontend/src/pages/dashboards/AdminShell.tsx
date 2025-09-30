import { NavLink, Outlet } from 'react-router-dom'

export default function AdminShell() {
  return (
    <div className="container-app py-8">
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-6">
        <aside className="card h-fit md:sticky md:top-24">
          <nav className="flex md:flex-col gap-2 text-sm">
            <NavLink to="/admin/performance" className={({isActive})=>isActive? 'text-brand':'text-slate-700 hover:text-slate-900'}>Performance</NavLink>
            <NavLink to="/admin/reports" className={({isActive})=>isActive? 'text-brand':'text-slate-700 hover:text-slate-900'}>Audit Reports</NavLink>
            <NavLink to="/admin/machines" className={({isActive})=>isActive? 'text-brand':'text-slate-700 hover:text-slate-900'}>Machines</NavLink>
            <NavLink to="/admin/logs" className={({isActive})=>isActive? 'text-brand':'text-slate-700 hover:text-slate-900'}>Logs</NavLink>
            <NavLink to="/admin/subusers" className={({isActive})=>isActive? 'text-brand':'text-slate-700 hover:text-slate-900'}>Subusers</NavLink>
          </nav>
        </aside>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  )
}


