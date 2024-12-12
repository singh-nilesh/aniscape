import { ScrollView, Image, Text, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton"

export default function Index() {
  return (
    <SafeAreaView className="bg-canvas h-full">
      <ScrollView contentContainerStyle={{ height:'100%'}}>
        <View className="w-full items-center h-full">

          <Image
            source={images.star_bg}
            className="absolute h-[300px]"
            resizeMode="contain" 
          />
          
          <Image 
            source={images.path}
            className=" absolute top-48"
          />

          <Text className="font-cbold color-primary text-6xl mt-36">Ani
            <Text className="color-secondary">Scape</Text>
          </Text>
          
          <Image 
            source={images.thumbnail_1}
            className="w-[300px] h-[300px]"
            resizeMode="contain"
            />
          
          <Text className="text-primary text-4xl font-cbold p-2"> Manga{' '}
            <Text className="text-white">Reimagined,</Text>
          </Text>

          <Text className="text-secondary text-4xl font-cbold p-2"> Animation{' '}
            <Text className="text-white">Redefined.</Text>
          </Text>
          
          <Text className="text-gray-300 text-sm font-cbold text-center mt-12"> 
            Bring manga to motion with AniScape! Powered by AI, we transform every frame into an immersive short film.
          </Text>

          <CustomButton
            title = "Continue with Email"
            handelPress={() => {}}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
