import { View, ViewStyle, ColorValue } from 'react-native'
import React from 'react'

type Props = {
  lineColor?: ColorValue
  /** 是否是横向 */
  horizontal?: Boolean
  /** 分割线高度 */
  lineHeight?: Number
  style?: ViewStyle
}

const DividingLine = (props: Props) => {
  let lineHeight = props.lineHeight ?? 1

  let horizontal = props.horizontal ?? true

  // 00000019 iOS 默认系统分割色
  const iOSDefaultLineColor = '#00000019'

  if (horizontal) {
    return <View style={{
      backgroundColor: props.lineColor ?? iOSDefaultLineColor,
      height: lineHeight,
      ...props.style
    }}>
    </View>
  } else {
    return <View style={{
      backgroundColor: props.lineColor ?? iOSDefaultLineColor,
      width: lineHeight,
      ...props.style
    }}>
    </View>
  }


}

export default DividingLine
