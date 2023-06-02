import React, { useEffect, useState } from 'react'
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'

export type RootStackParamList = {
  Main: undefined
  MyPage: undefined
}

export type MyPageScreenProps = StackScreenProps<RootStackParamList, 'MyPage'>

const MyPageScreen = ({ navigation, route }: MyPageScreenProps) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Text>back</Text>
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

export default MyPageScreen
