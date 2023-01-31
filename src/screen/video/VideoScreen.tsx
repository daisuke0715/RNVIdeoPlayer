import React, { useEffect, useState } from 'react';
import { Platform, Text } from 'react-native';
import IosVideoPlayer from 'react-native-video';
// @ts-ignore
import AndroidVideoPlayer from 'react-native-video-controls';
import { PlayerBackground } from '../../components/PlayerBackground/style';
import { PageWrapper } from '../../components/PageWrapper/style';
import { PlayerView } from '../../components/PlayerView/style';
import { InfoArea } from 'components/InfoArea/style';
import Loading from '../../components/Loading';
import VideoChapterType from '../../types/VideoChapter';
import VideoChapter from '../../components/VideoChapter';
import { video } from '../../_mock/data/video';

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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [stop, setStop] = useState<boolean>(false);
  const [source, setSource] = useState<number>();
  const [chapters, setChapters] = useState<VideoChapterType[]>([]);
  const [currentChapterIndex, setCurrentChapterIndex] = useState<number>(0);
  const [currentPlayer, setCurrentPlayer] = useState<string>('aa');

  const stopVideo = () => {
    setStop(true);
  };

  const getVideo = () => {
    // NOTE: APIから取得したvideoChapterのデータをchaptersのstateにセットする処理を実装する
    video.video_chapters[currentChapterIndex] && setSource(video.video_chapters[currentChapterIndex].source);
    setIsLoading(false);
  }

  const changeVideoSource = (source: number, index: number) => {
    setSource(source);
    setCurrentChapterIndex(index);
    setCurrentPlayer(currentPlayer + 'a');
  };

  const playNextChapter = () => {
    currentChapterIndex + 1 < video.video_chapters.length ? setCurrentChapterIndex((currentChapterIndex + 1)) : setCurrentChapterIndex(0);
    setCurrentPlayer(currentPlayer + 'a');
  }

  useEffect(() => {
    getVideo();
  }, []);

  useEffect(() => {
    video.video_chapters[currentChapterIndex] && setSource(video.video_chapters[currentChapterIndex].source);
  }, [currentChapterIndex]);

  if (isLoading) return <Loading />;
  return (
    <PageWrapper>
      { source && (
        <>
          <PlayerBackground>
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
                onEnd={() => playNextChapter()}
              />
            </PlayerView>
          </PlayerBackground>
          <InfoArea>
            <Text>{video.title}</Text>
            <Text>{video.description}</Text>
          </InfoArea>
        </>
      )}
      {
        video.video_chapters.map((item, index) => (
          <VideoChapter
            currentPlayback={index === currentChapterIndex}
            thumbnail={item.thumbnail}
            description={item.description}
            pressVideoChapter={() => changeVideoSource(item.source, index)}
          />
        ))
      }
    </PageWrapper>
  );
};

export default VideoScreen;
