import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { default as MainScreen } from '@screens/main/MainScreen'
import { default as MyPageScreen } from '@screens/mypage/MyPageScreen'

export type RootStackParamList = {
  Main: undefined
  MyPage: undefined
}

const MainStack = () => {
  const Stack = createStackNavigator<RootStackParamList>()

  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MyPage" component={MyPageScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default MainStack
