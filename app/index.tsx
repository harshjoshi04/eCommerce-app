import { Redirect } from "expo-router";
import React from "react";

const HomeScreen = () => {
  return Redirect({ href: "/(root)" });
};

export default HomeScreen;
