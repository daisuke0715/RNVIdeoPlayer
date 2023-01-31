import React from 'react'
import {
  Wrapper,
  ThumbnailImage,
  Title,
  Time,
  TextArea,
} from './style';

interface Props {
  thumbnail: number;
  description: string;
  currentPlayback: boolean;
  pressVideoChapter: () => void;
}

const VideoChapter: React.FC<Props> = ({ currentPlayback, thumbnail, description, pressVideoChapter }) => {
  return (
    <>
      <Wrapper onPress={pressVideoChapter} currentPlayback={currentPlayback}>
        <ThumbnailImage source={thumbnail} />
        <TextArea>
          <Title>{description}</Title>
          <Time>テストテキスト</Time>
        </TextArea>
      </Wrapper>
    </>
  );
}

export default VideoChapter;
