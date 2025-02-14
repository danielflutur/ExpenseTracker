import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '@/constants/theme'
import { ModalWrapperProps } from '@/types'

const ModalWrapper = ({
  style,
  children,
  bg = colors.neutral800
}: ModalWrapperProps) => {
  return (
    <View>
      <Text>ModalWrapper</Text>
    </View>
  )
}

export default ModalWrapper

const styles = StyleSheet.create({})