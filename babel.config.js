module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: [
					'.ios.ts',
					'.android.ts',
					'.js',
					'.ts',
					'.ios.tsx',
					'.android.tsx',
					'.tsx',
					'.jsx',
					'.json',
				],
				alias: {
					api: './src/config/api',
					fonts: './src/assets/fonts',
					icons: './src/assets/icons',
					images: './src/assets/images',
					metrix: './src/config/metrix',
					constants: './src/constants',
					navigation: './src/navigation',
					screens: './src/screens',
					components: './src/components',
					theme: './src/config/theme',
					store: './src/store',
				},
			},
		],
	],
};
