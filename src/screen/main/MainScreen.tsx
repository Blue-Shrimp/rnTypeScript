import React, { useEffect, useState } from 'react'
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { useDispatch, useSelector } from 'react-redux'

import { states as mainStates, actions as mainActions } from '@screens/main/state'

export type RootStackParamList = {
  Main: undefined
  MyPage: undefined
}

export type MainScreenProps = StackScreenProps<RootStackParamList, 'Main'>

const MainScreen = ({ navigation, route }: MainScreenProps) => {
  const dispatch = useDispatch()
  const { myLocation, loading } = useSelector(mainStates)

  console.log(myLocation)

  const _fetchSearchLocation = () => {
    dispatch(
      mainActions.setMyLocation({
        latitude: 1234,
        longitude: 123,
      }),
    )
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => _fetchSearchLocation()}>
          <Text>go</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

export default MainScreen
