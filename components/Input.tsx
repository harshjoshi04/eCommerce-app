import React, { forwardRef } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { twMerge } from "tailwind-merge";

interface InputProps extends TextInputProps {
  Icons?: React.ReactNode;
  isSecure?: boolean;
}

const InputField = forwardRef<TextInput, InputProps>(
  ({ Icons, isSecure, ...prop }, ref) => {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="my-2 w-full">
            <View
              className={twMerge(
                `flex flex-row justify-center items-center relative bg-neutral-100 rounded-2xl border border-neutral-300 focus:border-primary-100 `
              )}
            >
              {Icons && (
                <View className="absolute left-3 bottom-3">{Icons}</View>
              )}
              <TextInput
                ref={ref} // Forward the ref to TextInput
                className={twMerge(
                  "rounded-full p-3 pl-10 font-JakartaSemiBold text-[15px] flex-1 text-left"
                )}
                {...prop}
              />
            </View>
            {isSecure && (
              <View className="flex items-end p-1.5">
                <Text className="text-mainColor font-JakartaMedium">
                  Forgat Password ?
                </Text>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
);

export default InputField;
