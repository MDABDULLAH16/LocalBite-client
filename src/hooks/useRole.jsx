import React from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: userData } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/role?email=${user?.email}`);
      return res.data?.result;
    },
  });
//   console.log(userData);
  
    const role = userData?.role;
  return role;
};

export default useRole;
