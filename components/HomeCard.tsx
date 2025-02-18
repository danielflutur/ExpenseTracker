import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Typo from './Typo'
import { spacingY } from '@/constants/theme'

const HomeCard = () => {
  return (
    <View>
      <Typo>HomeCard</Typo>
    </View>
  )
}

export default HomeCard

const styles = StyleSheet.create({
  container:{

  },
  totalBalanceRow:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginBottom: spacingY._5
  },
  
})