import { StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'

export type UIButtonProps = {

  /** 是否可用 default: true  */
  enable?: boolean
  /** 是否被选择 default: false */
  selected?: boolean
  /** 触碰事件 */
  onPress?: () => void



  // disableProps、selectedProps 等属性可以不传 text | style | textStyle 其中一个
  // 默认会获取到normalPros中的 text | style | textStyle

  /** 正常的属性 */
  normalProps: UIButtonStateProps
  /** 不可用的属性 */
  disableProps?: UIButtonStateProps
  /** 选择的属性 */
  selectedProps?: UIButtonStateProps
  // 暂不处理
  // highlightedProps?: UIButtonStateProps
}

/** UIButton 状态属性  */
export interface UIButtonStateProps {
  /** 不同状态下的文案 */
  text?: string,
  /** 不同状态下的样式 */
  style?: StyleProp<ViewStyle>,
  /** 不同状态下的text样式 */
  textStyle?: ViewStyle | TextStyle
}

enum UIButtonState {
  nomal = 0,
  disable = 1,
  selected = 1 << 1,
  // highlighted = 1 << 2
}

const UIButton = (props: UIButtonProps) => {

  let enable = props.enable != undefined ? props.enable : true

  let initState: UIButtonState = UIButtonState.nomal

  if (enable) {
    if (props.selected) {
      initState = UIButtonState.selected
    }
  } else {
    initState = UIButtonState.disable
  }

  let stateProps: UIButtonStateProps = props.normalProps

  if (initState & UIButtonState.disable) {
    stateProps = props.disableProps ?? props.normalProps
  } else if (initState & UIButtonState.selected) {
    stateProps = props.selectedProps ?? props.normalProps
  }

  const ContainerView = enable ? TouchableOpacity : View

  const style = stateProps.style ?? props.normalProps.style
  const text = stateProps.text ?? props.normalProps.text
  const textStyle = stateProps.textStyle ?? props.normalProps.textStyle

  return (
    <ContainerView
      style={[styles.container, style]}
      onPress={props.onPress}
    >
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>

    </ContainerView>
  )
}

export default UIButton

const styles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  textStyle: {
    fontSize: 14,
    color: '#333333'
  }




})