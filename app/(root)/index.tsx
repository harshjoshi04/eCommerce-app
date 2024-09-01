import React from "react";
import { Image } from "react-native";
import { Text, View } from "react-native";
import WelcomeImg from "@/assets/images/HomeSlash.png";
import { LinearGradient } from "expo-linear-gradient";
import Button from "@/components/Button";
import { router } from "expo-router";
const HomeScreen = () => {
  return (
    <View className="h-full relative">
      <Image source={WelcomeImg} resizeMode="contain" />
      <View className="absolute bottom-[50%] w-full  h-16 ">
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.9)"]}
          className="h-[500px] "
        >
          <View className="flex flex-col justify-center items-center h-full space-y-3">
            <Text className="text-white font-JakartaExtraBold text-3xl text-center w-9/12">
              You want Authentic, here you go!
            </Text>
            <Text className="text-white font-JakartaExtraLight mb-6">
              Find it here, buy it now!
            </Text>
            <Button
              className="w-9/12"
              textClass="text-white"
              onPress={() => router.push("/(tabs)")}
            >
              Get Started
            </Button>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default HomeScreen;
