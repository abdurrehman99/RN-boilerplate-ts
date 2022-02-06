import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {styles} from './style';
import Screen from './screen';

interface ILoginContiner {}

function Index(props: ILoginContiner) {
	const [userData, setUserData] = useState<any>({});

	return (
		<ScrollView style={styles.container}>
			<Screen />
		</ScrollView>
	);
}

export default Index;
