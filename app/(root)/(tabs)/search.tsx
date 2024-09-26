import Card from "@/components/Card";
import Header from "@/components/Header";
import { GetProduct } from "@/lib/dbConnection";
import { ProductEntity } from "@/types/action.interface";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const search = () => {
  const [product, setproduct] = useState<ProductEntity[] | []>([]);
  useEffect(() => {
    (async () => {
      const data = await GetProduct();
      if (data.status) {
        setproduct(data.data);
      }
    })();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <View className="flex-1 mx-4">
          <View className="flex-1 justify-center items-center bg-gray-100">
            {/* Create a 2-column grid using Flexbox */}
            <View className="flex flex-wrap flex-row justify-between  space-x-2 w-full">
              {product.map((item) => (
                <View className="w-[48%]" key={item.id}>
                  <Card {...item} />
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default search;
