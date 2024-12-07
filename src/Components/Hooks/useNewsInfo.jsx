import React from 'react'
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useNewsInfo = () => {
    const axiosPublic = useAxiosPublic();
    const { data: newsInfos = [] } = useQuery({
      queryKey: "newsInfos",
      queryFn: async () => {
        const res = await axiosPublic.get("/newsInfo");
        return res.data
      }
      
    });
  return {newsInfos}
}

export default useNewsInfo