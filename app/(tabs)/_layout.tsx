import { View, Text, Image, ImageSourcePropType, ImageBackground } from 'react-native'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'
import { TabActions } from '@react-navigation/native'


interface TabIconProps {
  icon: ImageSourcePropType;
  color: string;
  name: string;
}

// function to display Icon Image
const TabIcon = ({ icon, color, name }: TabIconProps) => {
  return (
    <View className='items-center'>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className='w-6 h-6'
      />
    </View>
  )
}

// Bottom tabBar
const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarActiveTintColor: '#5cc3e3',
        tabBarStyle: {
          backgroundColor:'#221d2c',
          borderTopWidth: 1,
          borderTopColor:'bf3e9d',
          height: 55
        }
      }}>

        <Tabs.Screen name='home' options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Home"
            />
          )
        }} />

        <Tabs.Screen name='create' options={{
          title: "Create",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.upload}
              color={color}
              name="Create"
            />
          )
        }} />

        <Tabs.Screen name='bookmark' options={{
          title: "Bookmark",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.bookmark}
              color={color}
              name="Bookmark"
            />
          )
        }} />

        <Tabs.Screen name='profile' options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              color={color}
              name="Profile"
            />
          )
        }} />

      </Tabs>
    </>
  )
}

export default TabsLayout