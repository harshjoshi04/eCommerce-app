import React, { useEffect, useMemo } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import ProductBar from "@/components/home/ProductBar";
import { userContext } from "@/context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "@/components/Header";

const Home = () => {
  const FilterBar = useMemo(
    () => [
      {
        id: 1,
        title: "Sort",
        Icon: () => <MaterialIcons name="sort" size={16} color="black" />,
      },
      {
        id: 2,
        title: "Filter",
        Icon: () => <AntDesign name="filter" size={16} color="black" />,
      },
    ],
    []
  );

  // useEffect(() => {
  //   (async () => {
  //     AsyncStorage.clear();
  //   })();
  // }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <View className="flex flex-row justify-between mx-4">
          <Text className="font-JakartaExtraBold text-lg">All Featured</Text>
          <View className="flex flex-row items-center gap-3">
            {FilterBar.map(({ id, Icon, title }) => (
              <View
                key={id}
                className="flex flex-row  items-center justify-center gap-1 bg-white rounded-lg p-1 px-2 pb-2"
              >
                <Text className="">{title}</Text>
                <View>
                  <Icon />
                </View>
              </View>
            ))}
          </View>
        </View>
        <ProductBar />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
