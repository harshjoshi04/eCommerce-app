import React, { forwardRef, PropsWithChildren } from "react";
import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { twMerge } from "tailwind-merge";

interface ButtonProp extends PropsWithChildren, TouchableOpacityProps {
  textClass?: string;
}

const Button = forwardRef<TouchableOpacity, ButtonProp>((props, ref) => {
  const { onPress, children, className, textClass, ...rest } = props;

  return (
    <TouchableOpacity
      ref={ref} // Forward the ref to the TouchableOpacity
      onPress={onPress}
      className={twMerge(
        `bg-mainColor  p-4 rounded-lg flex justify-center items-center`
      )}
      {...rest} // Spread the rest of the props
    >
      <Text
        className={twMerge(
          "font-JakartaBold font-semibold text-gray-400",
          textClass
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
});

export default Button;
