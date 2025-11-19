import { useRoutes } from 'react-router-dom'
import { Routes } from '~/routes'

function AllRoute() {
  const elements = useRoutes(Routes)
  return <>{elements}</>
}
export default AllRoute
