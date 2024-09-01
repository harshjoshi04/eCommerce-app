import { Tabs } from "expo-router";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import TabIcon from "@/components/TabIcon";

// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "#F83758",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          height: 88,
          paddingBottom: 20,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              isActive={focused}
              Icons={
                <Feather
                  name="home"
                  size={24}
                  color={focused ? "#F83758" : "black"}
                />
              }
              title="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="whishlist"
        options={{
          title: "whishlist",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              isActive={focused}
              Icons={
                <Feather
                  name="heart"
                  size={24}
                  color={focused ? "#F83758" : "black"}
                />
              }
              title="Wishlist"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="shoping"
        options={{
          title: "shoping",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              isActive={focused}
              boxStyle="bg-white -translate-y-5 border p-4  rounded-full border-gray-200 shadow-xl "
              textShow={false}
              Icons={
                <Feather
                  name="shopping-cart"
                  size={24}
                  color={focused ? "#F83758" : "black"}
                />
              }
              title=""
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              isActive={focused}
              Icons={
                <Feather
                  name="search"
                  size={24}
                  color={focused ? "#F83758" : "black"}
                />
              }
              title="Search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              isActive={focused}
              Icons={
                <Feather
                  name="settings"
                  size={24}
                  color={focused ? "#F83758" : "black"}
                />
              }
              title="Setting"
            />
          ),
        }}
      />
    </Tabs>
  );
}
