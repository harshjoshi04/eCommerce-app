import React from "react";
import { Image, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ProductEntity } from "@/types/action.interface";

const Card: React.FC<ProductEntity> = ({ image, id, name, title, price }) => {
  return (
    <View>
      <View className="flex flex-col  bg-white overflow-hidden rounded-lg shadow-2xl ">
        <View className="w-40 h-40 ">
          <Image src={image} className=" w-[100%] h-[100%] rounded-lg" />
        </View>
        <View className="flex flex-col space-y-1 px-1">
          <Text className="text-lg font-JakartaMedium px-1">{name}</Text>
          <Text className="text-xs text-neutral-500 h-8 text-ellipsis">
            {title}
          </Text>
          <Text className="px-1 font-JakartaMedium text-black text-md">
            ₹{price}
          </Text>
          <View className="flex flex-row gap-x-0.5 px-1 mb-1">
            {[
              [1, 2, 3, 4, 5].map((item) => (
                <FontAwesome name="star" size={16} color="#EDB310" />
              )),
            ]}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
