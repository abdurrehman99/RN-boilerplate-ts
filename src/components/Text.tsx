import React from 'react';
import {Text, StyleProp} from 'react-native';

interface ITextProps {
	style?: StyleProp<any>;
	size?: 'small' | 'regular' | 'medium' | 'large' | 'extaLarge';
	children: string;
	numberOfLines?: number;
}

function Index({
	style = {},
	size = 'medium',
	children,
	numberOfLines,
}: ITextProps) {
	return (
		<Text numberOfLines={numberOfLines} style={style}>
			{`${children.toString()}`}
		</Text>
	);
}

export default Index;
