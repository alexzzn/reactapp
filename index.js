import { AppRegistry } from 'react-native';
import App from './App';
import HomePage from './src/controllers/Home'
import MinePage from './src/controllers/Mine'
import {
   StackNavigator, TabNavigator, 
   TabBarItem, createBottomTabNavigator, 
   createDrawerNavigator, createStackNavigator,
   tabBarIcon,
   tabBarLabel,
   tabBarPosition,
   Icon,
   tabBarOnPress
  } from 'react-navigation'
AppRegistry.registerComponent('ReactApp', () => App);


// const tab = createBottomTabNavigator({

//   Home: createDrawerNavigator({
//     Home: createStackNavigator({
//       Home:HomePage
//     }), 
//   }),
//   Mine:createBottomTabNavigator({
//     Mine: createStackNavigator({
//       Mine: MinePage
//     }), 
//   })
// })

const tab = StackNavigator(
  {
    Home:{
      screen: HomePage,
    },
    Mine: {
      screen: MinePage,
    }
  },
  {
    initialRouteName:'Home',
    navigationOptions:{
      headerStyle:{
        
      },
      headerTitleStyle:{
        fontWeight:'bold'
      },
      gesturesEnabled:'true',
      mode:'ios',
      card:'ios'
    }
  }
)


const tab2 = createBottomTabNavigator({

  Home: createStackNavigator({
    Home: {
      screen: HomePage,
      navigationOptions:({navi}) => ({
        tabBarLabel: "主页",
        tabBarIcon:({tintColor,focused}) => (
          <Icon
            name={focused ? '主页灰.png':'主页灰.png'}
            size={26}
          />
        ),
        tabBarOnPress:(obj) => {
          navi.navigate('HomePage')
        }
      })
    }
  }),
  Mine: createStackNavigator({
    Mine: MinePage
  })
},{
  tabBarOptions: {
    showIcon: true
  },
  navigationOptions:({navi}) => ({
    tabBarIcon: ({ focused, tintColor }) => {

    },
  })
})

// AppRegistry.registerComponent('ReactApp', () => tab2);