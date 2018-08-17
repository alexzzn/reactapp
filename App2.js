import React from 'react';
import { View, Text, SafeAreaView,Button } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'; // Version can be specified in package.json

// 首页
class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title='jump'
          onPress={() => this.props.navigation.push('Mine')}
        />
        <Button
          title='jump tab details'
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </SafeAreaView>
    );
  }

  componentWillUnmount() {

  }
}

// 首页
class DetailsScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title = 'jump'
          onPress={() => this.props.navigation.push('Details')}
        />
      </SafeAreaView>
    );
  }
}

// 首页
class MineScreen extends React.Component {

  render() {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Mine Screen</Text>
      </SafeAreaView>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Details: DetailsScreen
});

export const MainStack = createStackNavigator({
  Tabs: TabNavigator,
  Details: DetailsScreen,
  Mine: MineScreen
},{
  initialRouteName:'Tabs'
});