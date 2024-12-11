import { StatusBar, Text, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";


export default function Index() {
  return (
    <SafeAreaView
      className="bg-white flex-1 items-center justify-center"
    >
      <Text className="text-3xl font-pblack">Demo Text!</Text>
      <Link href="/(tabs)/home" className="color-red-700"> Go to home page</Link>
      
    </SafeAreaView>
  )
}
