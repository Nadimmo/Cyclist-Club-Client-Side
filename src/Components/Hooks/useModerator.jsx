import { useContext } from 'react'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../../AuthProvider/AuthProvider'

const useModerator = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)

    const {data: isModerator, isPending: isModeratorLoading} = useQuery({
        queryKey: ["isModerator", user?.email],
        queryFn: async()=>{
            const res = await axiosSecure.get(`/user/moderator/${user?.email}`)
           return res.data?.moderator
        }
    })
  return {isModerator, isModeratorLoading}
}

export default useModerator