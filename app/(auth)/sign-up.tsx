import React, { useContext, useState } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Button from "@/components/Button";
import { router } from "expo-router";
import InputField from "@/components/Input";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import AntDesign from "@expo/vector-icons/AntDesign";
import { SignUpAuth } from "@/types/auth.interface";
import { SignUpSchema } from "@/lib/zodValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpUser } from "@/lib/dbConnection";
import { ResponseEntity } from "@/types/action.interface";
import { userContext } from "@/context/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthModal from "@/components/modal/AuthModal";

const SignUp = () => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<SignUpAuth>({
    resolver: zodResolver(SignUpSchema),
  });
  const { setUser } = userContext();
  const [isAuth, setisAuth] = useState(false);
  const [disable, setdisable] = useState(false);

  const onSubmit: SubmitHandler<SignUpAuth> = async (data) => {
    try {
      setdisable(true);
      const res: ResponseEntity = await SignUpUser(data);
      if (res.status) {
        setUser(res.data);
        await AsyncStorage.setItem("user", res.data.id.toString());
        setisAuth(true);
      }
    } catch (error) {
    } finally {
      reset();
      setdisable(false);
    }
  };
  const close = () => setisAuth(false);
  return (
    <SafeAreaView className="bg-white mt-8 h-full">
      <View className="flex flex-col mx-4 gap-y-5 mt-5 h-full">
        <Text className="text-3xl font-JakartaExtraBold tracking-wide  ">
          Create an{"\n"}account
        </Text>
        <View className="space-y-2">
          <View>
            <Controller
              name="userName"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  Icons={<FontAwesome name="user" size={24} color="#626262" />}
                  onBlur={onBlur}
                  disableFullscreenUI={disable}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="Username"
                />
              )}
            />
            {errors && errors.userName && (
              <Text className="text-red-500">
                {errors.userName.message === "Required"
                  ? "Please enter username"
                  : errors.userName.message}
              </Text>
            )}
          </View>
          <View>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  Icons={<AntDesign name="mail" size={24} color="#626262" />}
                  onBlur={onBlur}
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
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  disableFullscreenUI={disable}
                  value={value}
                  secureTextEntry={true}
                  placeholder="Password"
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
          <View>
            <Controller
              name="comfirmPassword"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputField
                  Icons={<FontAwesome name="lock" size={24} color="#626262" />}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  disableFullscreenUI={disable}
                  secureTextEntry={true}
                  value={value}
                  placeholder="Comfirm Password"
                />
              )}
            />
            {errors && errors.comfirmPassword && (
              <Text className="text-red-500">
                {errors.comfirmPassword.message === "Required"
                  ? "Please enter confirm password"
                  : errors.comfirmPassword.message}
              </Text>
            )}
          </View>
        </View>
        <Text className="text-xs px-1 w-64 text-gray-400 tracking-wide">
          By clicking the <Text className="text-mainColor">Register</Text>{" "}
          button, you agree to the public offer
        </Text>
        <View className="my-4">
          <Button
            onPress={handleSubmit(onSubmit)}
            textClass="text-white text-lg  "
          >
            Create Account
          </Button>
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
      <AuthModal isView={isAuth} close={close} />
    </SafeAreaView>
  );
};

export default SignUp;
