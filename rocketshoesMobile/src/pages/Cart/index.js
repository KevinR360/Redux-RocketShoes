import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {RectButton} from 'react-native-gesture-handler';

import {
  SafeAreaView,
  ViewCart,
  ListProductsCart,
  Product,
  HeaderProduct,
  ImageProduct,
  Infos,
  TextTitle,
  TextPrice,
  FooterProduct,
  AmountView,
  ButtonDecrement,
  Amount,
  ButtonIncrement,
  SubTotal,
  Footer,
  TextTotal,
  Total,
  ButtonFinalizar,
  TextButton,
} from './styles';

import * as CartActions from '../../store/modules/cart/actions';

export default function Cart() {
  const total = useSelector(state =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.price * product.amount;
    }, 0)
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <SafeAreaView>
      <ViewCart>
        {cart.length ? (
          <>
            <ListProductsCart
              data={cart}
              keyExtractor={product => String(product.id)}
              renderItem={({item}) => (
                <Product>
                  <HeaderProduct>
                    <ImageProduct source={{uri: item.image}} />
                    <Infos>
                      <TextTitle numberOfLines={2}>{item.title}</TextTitle>
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
                    </Infos>
                    <RectButton
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(item.id))
                      }>
                      <Icon name="delete-forever" size={30} color="#7159c1" />
                    </RectButton>
                  </HeaderProduct>
                  <FooterProduct>
                    <AmountView>
                      <ButtonDecrement onPress={() => decrement(item)}>
                        <Icon
                          name="remove-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </ButtonDecrement>
                      <Amount
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={String(item.amount)}
                        style={{textAlign: 'center'}}
                      />
                      <ButtonIncrement onPress={() => increment(item)}>
                        <Icon
                          name="add-circle-outline"
                          size={20}
                          color="#7159c1"
                        />
                      </ButtonIncrement>
                    </AmountView>
                    <SubTotal
                      type="money"
                      options={{
                        precision: 2,
                        separator: ',',
                        delimiter: '.',
                        unit: 'R$',
                        suffixUnit: '',
                      }}
                      value={item.price * item.amount}
                    />
                  </FooterProduct>
                </Product>
              )}
            />

            <Footer>
              <TextTotal>TOTAL</TextTotal>
              <Total
                type="money"
                options={{
                  precision: 2,
                  separator: ',',
                  delimiter: '.',
                  unit: 'R$',
                  suffixUnit: '',
                }}
                value={total}
              />
            </Footer>

            <ButtonFinalizar>
              <TextButton>FINALIZAR PEDIDO</TextButton>
            </ButtonFinalizar>
          </>
        ) : (
          <Icon
            name="remove-shopping-cart"
            size={130}
            color="#ddd"
            style={{textAlign: 'center'}}
          />
        )}
      </ViewCart>
    </SafeAreaView>
  );
}
