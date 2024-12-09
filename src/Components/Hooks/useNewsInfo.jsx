import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useNewsInfo = () => {
  const axiosSecure = useAxiosSecure();
  const { data: newsInfos = [] } = useQuery({
    queryKey: ["newsInfos"],
    queryFn: async () => {
      const res = await axiosSecure.get("/newsInfo");
      return res.data;
    },
  });
  return { newsInfos };
};

export default useNewsInfo;
