import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import colors from '../../colors';

const { height } = Dimensions.get('window');

export const Wrapper = styled.View`
  padding-top: 100px;
  align-items: center;
  background: ${colors.paleGrey};
  height: ${height};
`;
