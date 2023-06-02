import React, { Fragment } from 'react'
import { StatusBar, Platform } from 'react-native'
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { default as MainStack } from '@screens/MainStack'

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle={Platform.select({ ios: 'dark-content', android: 'default' })} />
      <SafeAreaProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </Fragment>
  )
}

export default App
