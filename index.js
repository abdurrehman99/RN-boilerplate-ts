import {AppRegistry, KeyboardAvoidingView, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Colors} from 'theme';

function MyApp() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
			<StatusBar backgroundColor={Colors.Theme_Blue} />
			<App />
		</KeyboardAvoidingView>
	);
}

AppRegistry.registerComponent(appName, () => MyApp);
