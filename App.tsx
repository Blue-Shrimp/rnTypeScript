import React, { Fragment } from 'react'
import { StatusBar, Platform } from 'react-native'
import 'react-native-gesture-handler'

import { Provider } from 'react-redux'
import createStore from '@stores/index'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { default as MainStack } from '@screens/MainStack'

const App = () => {
  const store = createStore()

  return (
    <Fragment>
      <StatusBar barStyle={Platform.select({ ios: 'dark-content', android: 'default' })} />
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <MainStack />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </Fragment>
  )
}

export default App
