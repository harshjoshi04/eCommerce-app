import React from "react";
import { Image, Text, View } from "react-native";

const Card = () => {
  return (
    <View>
      <View className="flex flex-col items-center bg-white overflow-hidden ">
        <View className="w-40 h-40 ">
          <Image
            src="https://lblbkpanewqemphnxuvv.supabase.co/storage/v1/object/public/images/unsplash_NoVnXXmDNi0.png"
            className=" w-[100%] h-[100%] rounded-lg"
          />
        </View>
        <Text>Card</Text>
      </View>
    </View>
  );
};

export default Card;
