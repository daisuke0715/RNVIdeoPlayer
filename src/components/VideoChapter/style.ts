import styled from 'styled-components/native';
// @ts-ignore
import colors from '../../colors';

export const Wrapper = styled.TouchableOpacity<{ currentPlayback: boolean }>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ currentPlayback }) =>  currentPlayback ? colors.paleGrey : 'white'};
`;

export const ThumbnailArea = styled.View`
`;

export const ThumbnailImage = styled.Image` 
  width: 30%;  
  aspect-ratio: ${16 / 9};
  margin: 10px 15px;
  border-radius: 5px;
`;

export const TextArea = styled.View`
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.darkBlue};
`;

export const Time = styled.Text`
  font-weight: normal;
  font-size: 10px;
  color: ${colors.darkBlue};
  margin-top: 10px;
`;
