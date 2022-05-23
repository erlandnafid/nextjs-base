import Unauthorized from '@comps/Unauthorized'

const ProtectedRoutes = (Component) => {
  const Protected = (props) => {
    const pageRender = () => {
      return props.isAuth ? <Component {...props} /> : <Unauthorized />
    }
    return pageRender()
  }
  return Protected
}

export default ProtectedRoutes
