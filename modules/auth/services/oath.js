import { Google } from 'expo';

export async function signInWithGoogleAsync() {
    try {
        const result = await Google.logInAsync({
            androidClientId: '605053064888-2fr6mn6qovnn0nn3ilhtdju3m9h0bavv.apps.googleusercontent.com',
            //iosClientId: YOUR_CLIENT_ID_HERE,
            scopes: ['profile', 'email'],
        });

        if (result.type === 'success') {
            return result;
        } else {
            return { cancelled: true };
        }
    } catch (e) {
        return { error: true };
    }
}

async function getUserInfoAsync(accessToken) {
	let userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
	  headers: { Authorization: `Bearer ${accessToken}`},
	});
  
	return userInfoResponse;
  }