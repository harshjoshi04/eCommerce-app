import React from "react";
import { Image, Text, View } from "react-native";
import Logo from "@/assets/images/logo.png";
import Person from "@/assets/images/person.png";
import { userContext } from "@/context/userContext";

const Header = () => {
  const { user } = userContext();
  return (
    <View className="flex flex-row items-center justify-between mx-4">
      <Image source={Logo} className="w-20 h-20" resizeMode="contain" />
      <View className="flex flex-row items-center gap-x-2">
        <Text>Hi,{user?.userName}</Text>
        <Image source={Person} className="w-9 h-9" resizeMode="contain" />
      </View>
    </View>
  );
};

export default Header;
