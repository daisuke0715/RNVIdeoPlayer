import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import colors from '../../colors';

export const PageWrapper = styled.ScrollView.attrs({
  keyboardShouldPersistTaps: 'handled',
})`
  background: white;
`;

export const PageWrapperView = styled.View`
  background: ${colors.paleGrey};
  min-height: ${Dimensions.get('window').height};
`;

export const PageWrapperInner = styled.View`
  background: ${colors.paleGrey};
`;
