import { Text, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <View className="bg-blue-500 h-screen justify-center">
      <Text className="flex"> demo App</Text>
    </View>
  );
}
