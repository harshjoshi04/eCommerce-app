import React, { FC } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

interface AuthModalProp {
  isView: boolean;
  close: () => void;
}

const AuthModal: FC<AuthModalProp> = ({ isView, close }) => {
  return (
    <Modal isVisible={isView}>
      <View className="bg-white py-20 rounded-xl shadow-xl ">
        <View className="flex flex-col items-center gap-y-4 justify-center ">
          <View className="p-4 rounded-full bg-green-400">
            <MaterialIcons name="done" size={36} color="white" />
          </View>
          <Text className="font-bold text-lg">
            Authenication Successfully !
          </Text>
          <TouchableOpacity
            className="bg-mainColor px-10 py-2 rounded-xl"
            onPress={() => {
              router.push("/(root)");
              close();
            }}
          >
            <Text className="text-white">Done</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AuthModal;
