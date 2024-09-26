import useGetUser from "@/hooks/useGetUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, router } from "expo-router";
import React, { useEffect } from "react";

const HomeScreen = () => {
  useGetUser();
  useEffect(() => {
    (async () => {
      const value = await AsyncStorage.getItem("user");

      if (!value) return router.push("/(auth)/onboading");
      else return router.push("/(root)");
    })();
  });
  return;
};

export default HomeScreen;
