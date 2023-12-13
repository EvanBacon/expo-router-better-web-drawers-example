import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            title: "Bacon's",
          }}
        />
        <Drawer.Screen
          name="menu"
          options={{
            title: "Menu",
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            title: "About",
          }}
        />
        <Drawer.Screen
          name="specials"
          options={{
            title: "Specials",
          }}
        />
        <Drawer.Screen
          name="catering"
          options={{
            title: "Catering",
          }}
        />
        <Drawer.Screen
          name="contact"
          options={{
            title: "Contact",
          }}
        />

        <Drawer.Screen
          name="+not-found"
          options={{
            drawerItemStyle: {
              display: "none",
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
