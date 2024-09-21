import Header from "@/components/Header";
import React from "react";
import { ScrollView } from "react-native";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const search = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
      </ScrollView>
    </SafeAreaView>
  );
};

export default search;
