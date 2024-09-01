import Button from "@/components/Button";
import { onBoadingDetail } from "@/lib/data";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const onboading = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setactiveIndex] = useState(0);

  const isLastIndex = activeIndex === onBoadingDetail.length - 1;

  return (
    <SafeAreaView className="bg-white relative flex h-full">
      <View className="flex justify-end items-end">
        <TouchableOpacity onPress={() => router.push("/sign-in")}>
          <Text className="p-3 text-md font-JakartaExtraBold ">Skip</Text>
        </TouchableOpacity>
      </View>
      <Swiper
        ref={swiperRef}
        loop={false}
        activeDot={
          <View className="w-7 h-2 rounded-full mx-1 bg-black transition ease-in duration-300" />
        }
        index={activeIndex}
        onIndexChanged={(e) => setactiveIndex(e)}
      >
        {onBoadingDetail.map((item) => (
          <View
            key={item.id}
            className="flex flex-col items-center justify-center h-[90%]  gap-2"
          >
            <Image source={item.image} resizeMode="contain" className="h-3/6" />
            <Text className="font-JakartaExtraBold  text-2xl">
              {item.title}
            </Text>
            <Text className="text-center text-gray-400 px-6">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <View className="absolute bottom-6 w-full">
        <View className="flex flex-row justify-between px-6 items-center">
          <Button
            disabled={activeIndex === 0}
            textClass={`${activeIndex === 0 && "opacity-70"} `}
            onPress={() => swiperRef.current?.scrollBy(-1)}
            className="bg-transparent p-0"
          >
            Prev
          </Button>
          <Button
            textClass="text-mainColor"
            onPress={() => {
              isLastIndex
                ? router.push("/sign-in")
                : swiperRef.current?.scrollBy(1);
            }}
            className="bg-transparent p-0"
          >
            {isLastIndex ? "Get Started" : "Next"}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default onboading;
