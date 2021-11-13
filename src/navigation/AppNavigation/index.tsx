import React from 'react';
//Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//TYPES
import {PostParams, PostParamsList} from './interface';
//SCREENS
import {Posts} from '../../screens/PostsScreen';
import {PostDetails} from '../../screens/PostDetailScreen';
import {SettingScreen} from '../../screens/SettingsScreen';

const Stack = createNativeStackNavigator<PostParamsList>();

export const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={PostParams.Posts} component={Posts} />
      <Stack.Screen name={PostParams.PostDetail} component={PostDetails} />
      <Stack.Screen name={PostParams.Settings} component={SettingScreen} />
    </Stack.Navigator>
  );
};
