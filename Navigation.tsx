import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import TaskList from './screens/TaskList'

const RootStack = createStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer independent>
      <RootStack.Navigator>
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        </RootStack.Group>
        <RootStack.Group>
          <RootStack.Screen name="TaskList" component={TaskList} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation