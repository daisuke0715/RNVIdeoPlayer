import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import IosVideoPlayer from 'react-native-video';
// @ts-ignore
import AndroidVideoPlayer from 'react-native-video-controls';
import { PageWrapper } from '../../components/PageWrapper/style';
import { PlayerView } from '../../components/PlayerView/style';

const playerStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

const VideoScreen: React.FC = () => {
  const isIos = Platform.OS === 'ios';
  const VideoPlayer = isIos ? IosVideoPlayer : AndroidVideoPlayer;
  const [stop, setStop] = useState<boolean>(false);
  const [source, setSource] = useState<number>(require('../../_mock/assets/video1.mp4'));
  const [currentPlayer, setCurrentPlayer] = useState<string>('aa');

  const stopVideo = () => {
    setStop(true);
  };

  const startVideo = () => {
    setStop(false);
  };

  const changeVideoSource = () => {
    stopVideo();
    setSource(require('../../_mock/assets/video2.mp4'));
    setCurrentPlayer(currentPlayer + 'a');
    startVideo();
  };

  useEffect(() => {
  }, []);

  return (
    <PageWrapper>
      { source && (
        <PlayerView>
          <VideoPlayer
            key={currentPlayer}
            source={source}
            paused={stop}
            controls={isIos}
            resizeMode="contain"
            playWhenInactive
            pictureInPicture
            maxBitRate={2000000}
            minLoadRetryCount={5}
            style={playerStyle}
          />
        </PlayerView>
      )}
    </PageWrapper>
  );
};

export default VideoScreen;
