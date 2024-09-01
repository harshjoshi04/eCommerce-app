import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "@/assets/images/logo.png";
import Person from "@/assets/images/person.png";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row items-center justify-between mx-4">
          <Feather name="menu" size={24} color="black" />
          <Image source={Logo} className="w-20 h-20" resizeMode="contain" />
          <Image source={Person} className="w-9 h-9" resizeMode="contain" />
        </View>
        <View className="flex flex-row justify-between mx-4">
          <Text className="font-JakartaExtraBold text-lg">All Featured</Text>
          <View className="flex flex-row items-center gap-2">
            <View className="flex flex-row items-center gap-1">
              <MaterialIcons name="sort" size={24} color="black" />
              <Text>Sort</Text>
            </View>
            <Text>Filter</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
