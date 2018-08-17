// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';


// import {
//   StyleSheet,
//   Text,
//   View,
//   Platform,
//   StatusBar,
//   Image
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
/**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

// import React, { Component } from 'react';


// import {
//   StyleSheet,
//   Text,
//   View,
//   Platform,
//   StatusBar,
//   Image
// } from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit App.js
//         </Text>
//         <Text style={styles.instructions}>
//           {instructions}
//         </Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

import React from 'react';
import { View, Text, Button, Image, Icon, StyleSheet, SafeAreaView,StatusBar } from 'react-native';
import { createStackNavigator,NavigationComponent,createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json


// 首页
class HomeScreen extends React.Component {

  static navigationOptions = ()=>({
    title: "Home"
  })
  
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title = "jump to Mine"
          onPress={() => this.props.navigation.push('Details',{
            id:1
          })}
        />
      </SafeAreaView>
    );
  }
}
// 跳转页 details
class DetailsScreen extends React.Component {

  // static navigationOptions = ({ navigation }) => {

  //   let tabBarVisible = false
  //   return {
  //     // 标题
  //     title: "Details",
  //     // 隐藏navbar
  //     // header: null,
  //     tabBarVisible
  //   }
  // }

  render() {
    let { navigation } = this.props;
    let cusId = navigation.getParam('id', 'cusId')

    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="blue"
        />
        <Text>Mine Screen</Text>
        <Text>传递ID参数: {cusId}</Text>
      </SafeAreaView>
    );
  }

}
// 我的
class MineScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      // 标题
      title: 'Mine',
      headerTintColor: 'blue',
      headerTitleStyle: {
        fontWeight: 'bold',
      },

      // left barItem
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color= "blue"
        />
      ),
    };
  };

  // 组件挂载完成后，改动navigation，
  // componentDidMount() {
  //   this.props.navigation.setParams({ increaseCount: this._increaseCount });
  // }

  render() {
    let {navigation} = this.props;
    let cusId = navigation.getParam('id','cusId')

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Mine Screen</Text>
      </View>
    );
  }
}

const nav1 =  createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'Home',
      tabBarComponent:null
    },{
      mode: 'card',
      navigationOptions: {
        gesturesEnabled: true,
      },
    }),
  },
  Details: {
    screen: DetailsScreen,
  }
},{
  initialRouteName: 'Home'
});


const nav2 = createStackNavigator({

  Mine: {
      screen: MineScreen,
    }
  }, {
    initialRouteName: 'Mine'
});

export default createBottomTabNavigator(
  {
    Home:nav1,
    Mine: nav2
  },
  {
    // tabbar 配置
    navigationOptions: ({ navigation }) => ({

      tabBarVisible: navigation.state.index>0 ? false:true,
      tabBarLabel: navigation.state.routeName,
      tabBarIcon: ({ tintColor,focused }) => {
        
        let routeName = navigation.state.routeName
        let soucrePath
        if (routeName === 'Home') {
          soucrePath = focused ? imageArr[1] : imageArr[0]
          this.tabBarLabel = "主页"
        } else if (routeName === 'Mine') {

          soucrePath = focused ? imageArr[3] : imageArr[2]
          this.tabBarLabel = "我的"
        }
        
        return <Image
          style={[{ width: 24, height: 24 }]}
          source={soucrePath}
        />

      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showIcon: true
    },
  }
);

const imageArr = [
  require('./src/res/images/home_n.png'),
  require('./src/res/images/home_s.png'),
  require('./src/res/images/mine_n.png'),
  require('./src/res/images/mine_s.png')
]


// const styles = StyleSheet.create({
//   tabBarImage: {
//     width: 24,
//     height: 24,
//   },
//   tabBar: {
//     backgroundColor: 'white',
//   },
//   tabBarLabel: {
//     fontSize: 12,
//   },
//   tabBarItem: {
//     height: 56,
//   },
// })