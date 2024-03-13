/* eslint-disable prettier/prettier */
import {GoogleSignin} from '@react-native-google-signin/google-signin';
export const signInWithGoogle = async setAccessToken => {
  try {
    GoogleSignin.configure({
      webClientId:
        '1012393236578-f4ud4r3hlg8qkpam6prmglnn0gsi1q5s.apps.googleusercontent.com',
      androidClientId:
        '1012393236578-jv1vaso9j62b5pjccs80ud3g8h0po8tt.apps.gswwoogleusercontent.com',
      scopes: ['https://www.googleapis.com/auth/fitness.activity.read'],
      offlineAccess: true,
    });
    await GoogleSignin.hasPlayServices();
    // const userInfo = await GoogleSignin.signIn();
    const {accessToken} = await GoogleSignin.getTokens();
    setAccessToken(accessToken);

    console.log(accessToken);
    return accessToken;
  } catch (error) {
    console.error('Error signing in:', error);
  }
};
