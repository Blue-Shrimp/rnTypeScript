import React, { useEffect, useState } from 'react'
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  Main: undefined
  MyPage: undefined
}

export type MainScreenProps = StackScreenProps<RootStackParamList, 'Main'>

const MainScreen = ({ navigation, route }: MainScreenProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
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
