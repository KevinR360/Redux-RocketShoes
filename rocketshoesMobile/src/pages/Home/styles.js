import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';
import {TextInputMask} from 'react-native-masked-text';

export const SafeAreaView = styled.View`
  flex: 1;
  padding: 30px;
  background: #191920;
`;

export const Image = styled.Image`
  width: 185px;
`;

export const Card = styled.View`
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 10px 20px;
  width: 220px;
  border-radius: 4px;
  height: 358px;
`;

export const ImageProduct = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Footer = styled.View`
  padding: 10px 0;
`;

export const TextTitle = styled.Text``;

export const TextPrice = styled(TextInputMask)`
  font-size: 16px;
  font-weight: bold;
  text-align: left;
`;

export const ButtonADD = styled(RectButton)`
  border: none;
  background: #7159c1;
  align-self: stretch;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: auto;
`;

export const AmountCart = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.1);
  padding: 10px 10px;
`;

export const TextAmountCart = styled.Text`
  color: #fff;
  margin-left: 5px;
`;

export const TextButton = styled.Text`
  color: #fff;
  padding-right: 40px;
  display: flex;
  font-weight: bold;
`;
