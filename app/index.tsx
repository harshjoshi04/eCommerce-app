import useGetUser from "@/hooks/useGetUser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, router } from "expo-router";
import React, { useEffect } from "react";

const HomeScreen = () => {
  // useGetUser();
  // useEffect(() => {
  //   (async () => {
  //     const value = await AsyncStorage.getItem("user");
  //     console.log(value);

  //     // if (!value) return router.push("/(auth)/onboading");
  //     // else return
  //     router.push("/(root)");
  //   })();
  // });
  return Redirect({ href: "/(root)/(tabs)/search" });
};

export default HomeScreen;
