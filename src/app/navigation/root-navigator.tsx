import React from 'react';
import {
    NavigationContainer,
    NavigationContainerRef
} from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
// Without Expo

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Text, ViewStyle, ImageStyle } from 'react-native';
import { RootParamList } from './types';
import { PrimaryNavigator } from './primary-navigator';
import { HomeScreen, SettingsScreen, MapScreen } from '../screens';
import { OtherScreen } from '../screens/other-screen/other-screen';
import { Icon } from '../components';
import { IconTypes } from '../components/icon/icons';
import { spacing } from '../theme';

const Stack = createStackNavigator<RootParamList>();
// Without Expo
// const Stack = createNativeStackNavigator<RootParamList>()

const Tab = createBottomTabNavigator();

const RootStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
                // Without Expo
                // stackPresentation: "modal",
            }}
        >
            <Stack.Screen
                name="primaryStack"
                component={PrimaryNavigator}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
};

export const RootStackNavigator = React.forwardRef<
    NavigationContainerRef,
    Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
    return <RootStack />;
});

const ICON: ImageStyle = {
    width: 15,
    height: 15
};

export const TabNavigator = React.forwardRef<
    NavigationContainerRef,
    Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
    return (
        <NavigationContainer {...props} ref={ref}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = 'home';
                        } else if (route.name === 'Settings') {
                            iconName = 'settings';
                        } else if (route.name === 'Map') {
                            iconName = 'settings';
                        }
                        // You can return any component that you like here!
                        return (
                            <Icon icon={iconName as IconTypes} style={ICON} />
                        );
                    }
                })}
                tabBarOptions={{
                    activeTintColor: '#5D2555',
                    inactiveTintColor: 'gray'
                }}
            >
                <Tab.Screen name="Home" component={RootStackNavigator} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
});

RootStackNavigator.displayName = 'RootNavigator';
