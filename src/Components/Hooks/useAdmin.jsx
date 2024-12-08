import { useQuery } from "@tanstack/react-query"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import useAxiosSecure from "./useAxiosSecure"
import { useContext } from "react"

const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const {user, loading} = useContext(AuthContext)

    const {data: isAdmin} = useQuery({
      enable: !loading,
        queryKey: ["isAdmin", user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
           return res.data?.admin
        }
    })
  return {isAdmin}
}

export default useAdmin