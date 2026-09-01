import { useContext, useEffect } from "react"
import { useNavigate } from "react-router"
import { authContext } from "../Context/AuthContextProvider"

export default function AppProtectedRoutes({children}) {
    const {token} = useContext(authContext)
    const navigate = useNavigate()
    useEffect(()=>{
        // temporarily disabled to allow access without login (screenshots) — re-enable before submitting
        // if(!token){
        //     navigate("/login")
        // }
    },[token])
  return (
    <>
        {children}
    </>
  )
}

