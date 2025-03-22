import React from "react";
import { View } from "react-native";
import { Stack, useSegments } from "expo-router";
import { screens } from "@/data";
import TabBar from "@/components/TabBar";

const _layout = () => {
  const segments = useSegments();
  console.log("Current Segments:", segments);

  const routesWithTabBar = [
    "status",
    "calls",
    "camera",
    "chats",
    "settings",
    "edit-profile",
    "account",
    "chats-settings",
    "notifications",
    "data-storage",
  ];
  const currentRoute = segments.length > 0 ? segments[0] : "";
  const shouldShowTabBar = routesWithTabBar.includes(currentRoute);

  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }}>
        {screens.map(({ name }) => (
          <Stack.Screen key={name} name={name} />
        ))}
      </Stack>
      {shouldShowTabBar && <TabBar />}
    </View>
  );
};

export default _layout;
