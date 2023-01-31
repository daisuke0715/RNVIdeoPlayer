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
    <>
      <SafeAreaView />
      <StatusBar />
      <PlayerBackground>
        <PlayerView>
          <Video
            source={require('./broadchurch.mp4')}
            style={playerStyle}
            resizeMode="contain"/>
        </PlayerView>
      </PlayerBackground>
      <InfoArea>
        <Text>テストテストテストテストテストテストテストテストテストテスト</Text>
      </InfoArea>
    </>
  );
};

export const playerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

const PlayerBackground = styled.View`
`;

const PlayerView = styled.View`
  width: 100%;
  aspectRatio: ${16 / 9};
`;

const InfoArea = styled.View`
  padding: 12px 16px 0;
`;

// Later on in your styles..
var styles = StyleSheet.create({
  backgroundVideo: {
    width: 100,
    aspectRatio: 16/9,
  },
});

export default App;
