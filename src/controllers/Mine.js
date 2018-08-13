import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Animated
} from 'react-native';

export default class MinePage extends Component {

  static navigationOptions = {
    headerTitle: 'Home',
    headerRight:(<Button
      onPress={()=>(
        alert('tap')
      )}
      title='Info'
    />)
  }


  constructor(props) {

    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }
  componentDidMount() {
    Animated.timing(this.state.fadeAnim,{toValue:1}).start()
  }

  render() {

    return(
      <FadeInView>
        <Text>FadeInView</Text>
      </FadeInView>
    )
  }

}

// 
class FadeInView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),          // 透明度初始值设为0
    };
  }
  componentDidMount() {
    Animated.timing(                            // 随时间变化而执行的动画类型
      this.state.fadeAnim,                      // 动画中的变量值
      {
        toValue: 1,                             // 透明度最终变为1，即完全不透明
      }
    ).start();                                  // 开始执行动画
  }
  render() {
    return (
      <Animated.View                            // 可动画化的视图组件
        style={{
          ...this.props.style,
          opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}