import { userContext } from "@/context/userContext";
import { GetUserById } from "@/lib/dbConnection";
import { ResponseEntity } from "@/types/action.interface";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";

const useGetUser = () => {
  const { user, setUser } = userContext();
  useEffect(() => {
    (async () => {
      if (!user) {
        const id = await AsyncStorage.getItem("user");
        console.log(id);
        if (id) {
          const response: ResponseEntity = await GetUserById(id);
          setUser(response.data);
        }
      }
    })();
  }, []);
};

export default useGetUser;
