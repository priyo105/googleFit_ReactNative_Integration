/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */

import React, {useState} from 'react';
import {Button, SafeAreaView, View} from 'react-native';
import {signInWithGoogle} from './src/login/signInWithGoogle';
import {fetchData} from './src/apis/fetchAllDataStores';
import {GoogleSigninButton} from '@react-native-google-signin/google-signin';
import {fetchSteps} from './src/apis/fetchStepCount';
import {fetchCaloryData} from './src/apis/fetchCalories';
import StepCard from './src/components/stepCard';
import CaloryCard from './src/components/CaloryCard';

function App() {
  const [token, setToken] = useState('');
  const [stepData, setStepData] = useState('init');
  const [caloreData, setCaloryData] = useState('init');

  const setAccessToken = accessToken => {
    setToken(accessToken);
  };

  return (
    <SafeAreaView>
      <GoogleSigninButton
        style={{marginTop: 20, marginLeft: 10}}
        onPress={() => signInWithGoogle(setAccessToken)}
      />

      <View style={{marginTop: 30}}>
        <Button
          title="Fetch All Data Sources"
          onPress={async () => {
            const data = await fetchData(token);
            console.log('data::', data);
          }}
        />
      </View>

      <View style={{marginTop: 30}}>
        <Button
          title="Fetch data"
          onPress={async () => {
            const data = await fetchSteps(token);
            const caloryData = await fetchCaloryData(token);
            setStepData(data);
            setCaloryData(caloryData);
          }}
        />
      </View>
      {stepData !== 'init' && <StepCard data={stepData} />}
      {caloreData !== 'init' && <CaloryCard data={caloreData} />}
    </SafeAreaView>
  );
}

export default App;
