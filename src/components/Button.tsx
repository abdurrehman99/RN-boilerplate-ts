import React from 'react';
import {StyleSheet, ActivityIndicator, StyleProp} from 'react-native';
import {TouchableOpacity, Text} from '.';
import {Colors} from '../config/theme';

interface IButtonProps {
	buttonStyle?: StyleProp<any>;
	textStyle?: StyleProp<any>;
	loaderStyle?: StyleProp<any>;
	children: string;
	loading?: boolean;
}

function Index({
	textStyle = {},
	buttonStyle = {},
	loaderStyle = {},
	children,
	loading = false,
}: IButtonProps) {
	return (
		<TouchableOpacity style={[buttonStyle, styles.button]}>
			{loading ? (
				<ActivityIndicator
					color={Colors.Theme_Blue}
					animating
					size="small"
					style={loaderStyle}
				/>
			) : (
				<Text style={[textStyle]}>{children}</Text>
			)}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		textAlign: 'center',
	},
});

export default Index;
