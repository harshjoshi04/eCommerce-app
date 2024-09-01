import InputField from "@/components/Input";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from "@/components/Button";
import { router } from "expo-router";

const SignIn = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex flex-col mx-4 gap-y-5 mt-10">
        <Text className="text-3xl font-JakartaExtraBold tracking-wide  ">
          Welcome {"\n"}Back!
        </Text>
        <View className="space-y-2">
          <View>
            <InputField
              Icons={<FontAwesome name="user" size={24} color="#626262" />}
              placeholder="Username or Email"
            />
          </View>
          <View>
            <InputField
              Icons={<FontAwesome name="lock" size={24} color="#626262" />}
              placeholder="Password"
              secureTextEntry={true}
              isSecure={true}
            />
          </View>
        </View>
        <View className="my-4">
          <Button textClass="text-white text-lg  ">Login</Button>
        </View>
        <Text className="text-center">
          Create An Account{" "}
          <Text
            className="text-mainColor underline underline-offset-4"
            onPress={() => router.push("/sign-up")}
          >
            Sign Up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
