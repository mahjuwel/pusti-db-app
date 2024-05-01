import React from 'react';
import { Image, View } from 'react-native';


export default function Logo() {
  return (
    <View>
      <Image source={require("../../assets/logo.png")} style={{marginBottom: 5}} />
    </View>
  )
}