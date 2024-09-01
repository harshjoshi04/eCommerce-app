import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { twMerge } from "tailwind-merge";

interface TabIconProp {
  Icons: React.ReactNode;
  title: string;
  boxStyle?: string;
  textShow?: boolean;
  isActive: boolean;
}

const TabIcon: FC<TabIconProp> = ({
  isActive,
  Icons,
  title,
  boxStyle,
  textShow = true,
}) => {
  return (
    <View
      className={twMerge(
        "flex flex-col justify-center items-center ",
        boxStyle
      )}
      style={!textShow && styles.shadowProp}
    >
      <View>{Icons}</View>
      {textShow && (
        <Text
          className={twMerge(
            "font-JakartaSemiBold",
            isActive && "text-mainColor"
          )}
        >
          {title}
        </Text>
      )}
    </View>
  );
};

export default TabIcon;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2.22,

    // Android shadow (elevation)
    elevation: 5,
  },
});
