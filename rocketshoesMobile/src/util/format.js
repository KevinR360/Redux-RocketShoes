import Intl from 'react-native-intl';

export const formatPrice = value => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(value);
};
