import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from "@/components/Button";
import { router } from "expo-router";
import InputField from "@/components/Input";

const SignUp = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex flex-col mx-4 gap-y-5 mt-10">
        <Text className="text-3xl font-JakartaExtraBold tracking-wide  ">
          Create an{"\n"}account
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
            />
          </View>
          <View>
            <InputField
              Icons={<FontAwesome name="lock" size={24} color="#626262" />}
              placeholder="Confirm Password"
              secureTextEntry={true}
            />
          </View>
        </View>
        <Text className="text-xs px-1 w-64 text-gray-400 tracking-wide">
          By clicking the <Text className="text-mainColor">Register</Text>{" "}
          button, you agree to the public offer
        </Text>
        <View className="my-4">
          <Button textClass="text-white text-lg  ">Create Account</Button>
        </View>

        <Text className="text-center">
          I Already Have an Account{" "}
          <Text
            className="text-mainColor  underline underline-offset-4"
            onPress={() => router.push("/sign-in")}
          >
            Sign In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
