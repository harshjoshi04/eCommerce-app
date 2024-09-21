import InputField from "@/components/Input";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from "@/components/Button";
import { router } from "expo-router";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";
import { SignInAuth } from "@/types/auth.interface";
import AuthModal from "@/components/modal/AuthModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema } from "@/lib/zodValidation";
import { ResponseEntity } from "@/types/action.interface";
import { SignInUser } from "@/lib/dbConnection";
import { userContext } from "@/context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignIn = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInAuth>({
    resolver: zodResolver(SignInSchema),
  });

  const [disable, setdisable] = useState(false);

  const [isAuth, setisAuth] = useState(false);

  const { setUser } = userContext();

  const onLogin: SubmitHandler<SignInAuth> = async (data) => {
    try {
      setdisable(true);
      const res: ResponseEntity = await SignInUser(data);
      if (res.status) {
        setUser(res.data);
        await AsyncStorage.setItem("user", res.data.id.toString());
        setisAuth(true);
      }
    } catch (error) {
    } finally {
      setdisable(false);
      reset();
    }
  };

  const close = () => setisAuth(false);

  return (
    <SafeAreaView className="bg-white mt-8 h-full">
      <View className="flex flex-col mx-4 gap-y-5 mt-5 h-full">
        <Text className="text-3xl font-JakartaExtraBold tracking-wide  ">
          Welcome {"\n"}Back!
        </Text>
        <View className="space-y-2">
          <View>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  Icons={<AntDesign name="mail" size={24} color="#626262" />}
                  onBlur={onBlur}
                  disableFullscreenUI={disable}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="Email"
                />
              )}
            />
            {errors && errors.email && (
              <Text className="text-red-500">
                {errors.email.message === "Required"
                  ? "Please enter email"
                  : errors.email.message}
              </Text>
            )}
          </View>
          <View>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  Icons={<FontAwesome name="lock" size={24} color="#626262" />}
                  placeholder="Password"
                  secureTextEntry={true}
                  // isSecure={true}
                  onBlur={onBlur}
                  disableFullscreenUI={disable}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
            />
            {errors && errors.password && (
              <Text className="text-red-500">
                {errors.password.message === "Required"
                  ? "Please enter password"
                  : errors.password.message}
              </Text>
            )}
          </View>
        </View>
        <View className="my-4">
          <Button
            textClass="text-white text-lg  "
            onPress={handleSubmit(onLogin)}
          >
            Login
          </Button>
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
      <AuthModal isView={isAuth} close={close} />
    </SafeAreaView>
  );
};

export default SignIn;
