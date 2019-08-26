import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import logo from '../../assets/Logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: #141419;
  flex-direction: row;
  height: 60px;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  background: #141419;
  height: 60px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const BasketContainer = styled(RectButton)`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
