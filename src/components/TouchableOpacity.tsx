import React, {ReactNode} from 'react';
import {TouchableOpacity, StyleProp} from 'react-native';

interface ITouchableProps {
	style?: StyleProp<any>;
	children: ReactNode;
	activeOpacity?: number;
}

function Index({
	style = {},
	children,
	activeOpacity,
	...rest
}: ITouchableProps) {
	return (
		<TouchableOpacity
			{...rest}
			activeOpacity={activeOpacity || 0.5}
			style={style}>
			{children}
		</TouchableOpacity>
	);
}

export default Index;
