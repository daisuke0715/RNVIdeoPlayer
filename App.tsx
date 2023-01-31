import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Dimensions,
  Text
} from 'react-native';
import Video from 'react-native-video';
import styled from 'styled-components/native';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <Video
        source={''}
        style={styles.backgroundVideo}
      />
    </SafeAreaView>
  );
};

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    width: 300,
    height: 300
  },
});

export default App;
