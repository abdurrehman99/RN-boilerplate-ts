import {createRef} from 'react';
import {NavigationContainerRef, StackActions} from '@react-navigation/native';

export const navigationRef = createRef<NavigationContainerRef>();
export const routeNameRef = createRef<string>();
export const isReadyRef = createRef<boolean>();

export function navigate(name: string, params?: object) {
	isReadyRef.current && navigationRef.current?.navigate(name, params);
}
export function push(name: string, params?: object) {
	isReadyRef.current &&
		navigationRef.current?.dispatch(StackActions.push(name, params));
}
export function replace(name: string, params?: object) {
	isReadyRef.current &&
		navigationRef.current?.dispatch(StackActions.replace(name, params));
}
export function reset(routes: {name: string; params?: object}[]) {
	isReadyRef.current &&
		navigationRef.current?.resetRoot({
			index: 0,
			routes,
		});
}
export function goBack() {
	isReadyRef.current && navigationRef.current?.goBack();
}
