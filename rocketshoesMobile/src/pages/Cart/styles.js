import styled from 'styled-components';
import {RectButton} from 'react-native-gesture-handler';
import {TextMask} from 'react-native-masked-text';

export const SafeAreaView = styled.View`
  flex: 1;
  background: #191920;
  padding: 20px;
  margin-top: 40px;
`;

export const ViewCart = styled.View`
  display: flex;
  background: #fff;
  padding: 20px;
  border-radius: 4px;
`;

export const ListProductsCart = styled.FlatList`
  max-height: 375px;
`;

export const Product = styled.View`
  display: flex;
  margin-top: 20px;
`;

export const HeaderProduct = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ImageProduct = styled.Image`import {TextInputMask} from 'react-native-masked-text';
  height: 80px;
  width: 80px;
  margin-right: 10px;
  background: #999;
`;

export const Infos = styled.View`
  display: flex;
  flex: 1;
`;

export const TextTitle = styled.Text`
  font-size: 16px;
  color: #333;
  margin-top: 5px;
`;

export const TextPrice = styled(TextMask)`
  font-size: 19px;
  font-weight: bold;
  margin-top: auto;
`;

export const FooterProduct = styled.View`
  margin-top: 20px;
  display: flex;
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 10px 20px;
`;

export const AmountView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonDecrement = styled(RectButton)``;

export const ButtonIncrement = styled(RectButton)``;

export const Amount = styled.TextInput`
  border: 1px solid #ddd;
  background: #fff;
  border-radius: 4px;
  font-size: 16px;
  height: 26px;
  width: 50px;
  padding: 0 10px;
`;

export const SubTotal = styled(TextMask)`
  font-weight: bold;
  font-size: 19px;
`;

export const Footer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;

export const TextTotal = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #999;
`;

export const Total = styled(TextMask)`
  font-size: 30px;
  font-weight: bold;
`;

export const ButtonFinalizar = styled(RectButton)`
  align-self: stretch;
  background: #7159c1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 30px;
  padding: 10px 20px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 19px;
`;
