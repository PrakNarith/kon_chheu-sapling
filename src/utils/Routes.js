import React from 'react'
import { Image } from 'react-native'
import {
  createStackNavigator, createBottomTabNavigator, createSwitchNavigator
} from 'react-navigation'

import HomeScreen from '../screens/HomeScreen'
import SaplingDetailScreen from '../screens/SaplingDetailScreen'
import SavedScreen from '../screens/SavedScreen'
import Icons from '../resources/constants/Icons'

const homeStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  SaplingDetail: {
    screen: SaplingDetailScreen
  }
},
{
  initialRouteName: 'Home',
  headerMode: 'none',
  navigationOptions: {
    gesturesEnabled: false
  }
})

const savedStack = createStackNavigator({
  Saved: {
    screen: SavedScreen
  }
}, {
  headerMode: 'none'
})

const tabBarOption = {
  swipeEnabled: true,
  tabBarOptions: {
    labelStyle: {
      padding: 4,
      justifyContent: 'center',
      alignItems: 'center'
    },
    style: {
      paddingVertical: 8,
      backgroundColor: 'white',
      margin: 0,
      height: 70
    }
  }
}

/* eslint-disable */
const MainStack = createBottomTabNavigator({
  Home: {
    screen: homeStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image source={focused ? Icons.activeFeed : Icons.inactiveFeed} />
      )
    }
  },
  Saved: {
    screen: savedStack,
    navigationOptions: {
      tabBarIcon: ({ focused }) => (
        <Image source={focused ? Icons.activeHeart : Icons.inactiveHeart} />
      )
    }
  }
}, tabBarOption)

const AppStack = createSwitchNavigator({
  MainStack: {
    screen: MainStack
  }
}, { headerMode: 'none' })

export default AppStack
