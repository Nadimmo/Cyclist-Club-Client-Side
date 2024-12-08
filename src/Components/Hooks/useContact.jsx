import React from 'react'
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useContact = () => {
    const axiosPublic = useAxiosPublic();

  const {refetch, data: contact = [] } = useQuery({
    queryKey: "contact",
    queryFn: async () => {
      const res = await axiosPublic.get("/contact");
      return res.data;
    },
  });


  return {contact, refetch}
}

export default useContact