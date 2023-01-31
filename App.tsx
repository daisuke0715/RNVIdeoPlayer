import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import VideoScreen from './src/screen/video/VideoScreen';

const App = () => {
  return (
    <>
      <SafeAreaView />
      <StatusBar />
      <VideoScreen />
    </>
  );
};

export default App;
