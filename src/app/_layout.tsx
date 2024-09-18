// src\app\_layout.tsx
import '@/styles/global.css'

import { View, StatusBar } from 'react-native'

import { Slot } from 'expo-router'

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import { Loading } from '@/components/loading'

export default function Layout() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <View className='flex-1 bg-green-500'>
      <StatusBar
        barStyle='light-content'
        backgroundColor="transparent"
        translucent
      />
      <Slot />
    </View>
  )
}
