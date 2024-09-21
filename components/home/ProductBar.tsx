import React, { useMemo, useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import Beauty from "@/assets/images/beauty.png";
import Fashion from "@/assets/images/fashion.png";
import Kids from "@/assets/images/kids.png";
import Men from "@/assets/images/mens.png";
import Women from "@/assets/images/womens.png";
import Banner from "@/assets/images/banner.jpg";
import Swiper from "react-native-swiper";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ProductBar = () => {
  const swiperRef = useRef<Swiper>(null);
  const BannerImage = useMemo(() => [Banner, Women], []);
  const [activeIndex, setactiveIndex] = useState(0);
  const ProductData = useMemo(
    () => [
      {
        id: 1,
        title: "Beauty",
        imgSource: Beauty,
      },
      {
        id: 2,
        title: "Fashion",
        imgSource: Fashion,
      },
      {
        id: 3,
        title: "Kids",
        imgSource: Kids,
      },
      {
        id: 4,
        title: "Men",
        imgSource: Men,
      },
      {
        id: 5,
        title: "Women",
        imgSource: Women,
      },
    ],
    []
  );
  return (
    <>
      <View className="m-2 bg-white flex flex-row justify-around items-center mt-4  rounded-lg shadow-xl">
        {ProductData.map((item) => (
          <View
            key={item.id}
            className="flex items-center justify-center my-1 mx-2"
          >
            <Image
              source={item.imgSource}
              resizeMode="contain"
              className="w-14 h-14"
            />
            <Text className="text-xs">{item.title}</Text>
          </View>
        ))}
      </View>
      <View className="mx-4 h-60 mt-4">
        <Swiper
          ref={swiperRef}
          loop={false}
          activeDot={
            <View className="w-2 h-2 rounded-full mx-1 bg-neutral-500 transition ease-in duration-300 " />
          }
          index={activeIndex}
          onIndexChanged={(e) => setactiveIndex(e)}
        >
          {BannerImage.map((item) => (
            <View>
              <Image
                source={item}
                className="h-48 w-full rounded-xl"
                resizeMode="cover"
              />
            </View>
          ))}
        </Swiper>
      </View>
      <View className="bg-blue-400 mx-4 flex flex-row justify-between items-center p-4 rounded-lg">
        <View>
          <Text className="text-white">Deal of the Day</Text>
          <View className="flex flex-row items-center space-x-1 pt-0.5">
            <MaterialCommunityIcons name="alarm" size={16} color="white" />
            <Text className="text-white">22h 55m remaining</Text>
          </View>
        </View>
        <View className="border border-white px-3 py-2 rounded-md flex flex-row space-x-2">
          <Text className="text-white font-bold">View All</Text>
          <FontAwesome name="long-arrow-right" size={20} color="white" />
        </View>
      </View>
    </>
  );
};

export default ProductBar;
