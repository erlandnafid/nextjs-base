import ProtectedRoutes from '@comps/hoc/ProtectedRoutes'

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard page</h1>
    </div>
  )
}

export default ProtectedRoutes(Dashboard)
