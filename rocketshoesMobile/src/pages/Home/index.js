import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';

import {FlatList} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import {formatPrice} from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  SafeAreaView,
  Card,
  ImageProduct,
  Footer,
  TextTitle,
  TextPrice,
  ButtonADD,
  AmountCart,
  TextAmountCart,
  TextButton,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    getProducts();
  }, []);

  async function handleAddProduct(id) {
    await dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <SafeAreaView>
      {products.length > 1 && (
        <FlatList
          style={{marginTop: 40}}
          horizontal
          data={products}
          extraData={amount}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => (
            <Card>
              <ImageProduct source={{uri: item.image}} />
              <Footer>
                <TextTitle>{item.title}</TextTitle>
                <TextPrice
                  type="money"
                  options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: 'R$',
                    suffixUnit: '',
                  }}
                  value={item.price}
                />
              </Footer>
              <ButtonADD onPress={() => handleAddProduct(item.id)}>
                <AmountCart>
                  <Icon name="add-shopping-cart" size={20} color="#fff" />
                  <TextAmountCart>{amount[item.id] || 0}</TextAmountCart>
                </AmountCart>
                <TextButton>ADICIONAR</TextButton>
              </ButtonADD>
            </Card>
          )}
        />
      )}
    </SafeAreaView>
  );
}
