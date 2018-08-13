import { AppRegistry } from 'react-native';
import App from './App';
import HomePage from './src/controllers/Home'
import MinePage from './src/controllers/Mine'
import { StackNavigator, TabNavigator, TabBarItem, createBottomTabNavigator, createDrawerNavigator, createStackNavigator } from 'react-navigation'
// AppRegistry.registerComponent('ReactApp', () => App);


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
    }
  }),
  Mine: createStackNavigator({
    Mine: MinePage
  })
},{
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.routeName,
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    })
})

AppRegistry.registerComponent('ReactApp', () => tab2);