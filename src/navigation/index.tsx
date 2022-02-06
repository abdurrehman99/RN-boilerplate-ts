import React from 'react';
import {Platform, useColorScheme} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import {useSelector} from 'react-redux';
import {
	NavigationContainer,
	DarkTheme,
	DefaultTheme,
} from '@react-navigation/native';
import {Colors} from '../config/theme';
import {isReadyRef, navigationRef, routeNameRef} from './root';
import App from '../App';
const Stack = createStackNavigator();
const BottomTabs = createBottomTabNavigator();

function MainStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				...TransitionPresets.SlideFromRightIOS,
			}}
			initialRouteName="home">
			{/* <Stack.Screen name="home" component={() => {}} /> */}
		</Stack.Navigator>
	);
}

function AuthStack() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				...TransitionPresets.SlideFromRightIOS,
			}}
			initialRouteName="home">
			{/* <Stack.Screen name="home" component={() => {}} /> */}
		</Stack.Navigator>
	);
}

function MainTab() {
	return (
		<BottomTabs.Navigator
			initialRouteName={'1'}
			// tabBarOptions={{
			// 	activeTintColor: Colors.Mid_blue,
			// 	inactiveTintColor: Colors.Cloudly_blue,
			// 	style: {
			// 		paddingTop: 5,
			// 		...Platform.select({
			// 			ios: {marginBottom: 0},
			// 			android: {paddingBottom: 5},
			// 		}),
			// 		backgroundColor: Colors.White,
			// 	},
			// 	labelStyle: {margin: 0, padding: 0, fontSize: 12},
			// }}
		>
			<BottomTabs.Screen key={'1'} name={'1'} component={() => <App />} />
		</BottomTabs.Navigator>
	);
}

function Navigation() {
	const scheme = useColorScheme();
	const isAuthenticated = useSelector(
		(state: any) => state.auth.isAuthenticated,
	);
	return (
		<SafeAreaProvider>
			<NavigationContainer
				onReady={() => {
					// @ts-ignore
					isReadyRef.current = true;
					// @ts-ignore
					routeNameRef.current =
						navigationRef?.current?.getCurrentRoute()?.name;
				}}
				ref={navigationRef}
				theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
				<SafeAreaView
					style={{
						flex: 1,
						backgroundColor: Colors.White,
					}}>
					{isAuthenticated ? <MainStack /> : <AuthStack />}

					<Toast ref={(ref: any) => Toast.setRef(ref)} />
				</SafeAreaView>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default Navigation;
