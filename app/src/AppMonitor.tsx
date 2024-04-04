import { RouterProvider } from "react-router-dom"
import { router } from "./presentation/router/router"


export const AppMonitor = () => {
  return (
    <RouterProvider router={router}/>
  )
}