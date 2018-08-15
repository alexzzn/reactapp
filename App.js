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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text,Button } from 'react-native';
import { createStackNavigator,NavigationComponent,createBottomTabNavigator } from 'react-navigation'; // Version can be specified in package.json
// https://reactnavigation.org/docs/zh-Hans/tab-based-navigation.html
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title = "jump to Mine"
          onPress={() => this.props.navigation.push('Mine',{
            id:1
          })}
        />
      </View>
    );
  }
}

class MineScreen extends React.Component {
  static navigationOptions = {
    title: 'MineScreen',
  };
  static navigationOptions = ({ navigation }) => {
    return {
      // 标题
      title: navigation.getParam('otherParam'),
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
  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  render() {
    let {navigation} = this.props;
    let cusId = navigation.getParam('id','cusId')

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Mine Screen</Text>
        <Text>传递ID参数: {cusId}</Text>
      </View>
    );
  }
}

// export default createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//     navigationOptions: () => ({
//       title: 'Home',
//     },{
//       mode: 'modal',
//       navigationOptions: {
//         gesturesEnabled: true,
//       },
//     }),
//   },
//   Mine: {
//     screen: MineScreen,
//   }
// },{
//   initialRouteName: 'Home'
// });


export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    Mine: MineScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home_${focused ? 'n' : 's'}`;
        } else if (routeName === 'Mine') {
          iconName = `mine_${focused ? 'n' : 's'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);