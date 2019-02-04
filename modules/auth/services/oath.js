import { Google } from 'expo';
import logger from '../../common/services/logger';

export async function signInWithGoogleAsync() {
	try {
		logger.trace('Google access token request...');
		const result = await Google.logInAsync({
			androidClientId: '605053064888-2fr6mn6qovnn0nn3ilhtdju3m9h0bavv.apps.googleusercontent.com',
			//iosClientId: YOUR_CLIENT_ID_HERE,
			scopes: ['profile', 'email'],
		});

		if (result.type === 'success') {
			logger.trace('Google access token request succeed.');
			return result.accessToken;
		} else {
			logger.trace('Google access token request cancelled.');
			throw { cancelled: true };
		}
	} catch (e) {
		logger.error(`Google access token error:${e}.`);
		throw new Error({ error: true });
	}
}

export async function getUserInfoAsync(accessToken) {
	try {
		logger.trace('Google user info request...');
		let userInfo = await fetch('https://www.googleapis.com/userinfo/v2/me', {
			headers: { Authorization: `Bearer ${accessToken}` },
		});
		logger.trace(`Google user info request succeed, userInfo:${userInfo}.`);
		return userInfo;
	} catch (e) {
		logger.trace(`Google user info request error, error:${e}.`);
		throw new Error({ error: true });
	}
}

export async function setUserNameAsync(name) {
	try {
		logger.trace(`Set user name request. name:${name}.`);
		return { name }
	} catch (e) {
		logger.trace(`Set user name request error, error:${e}.`);
		throw new Error({ error: true });
	}
}
