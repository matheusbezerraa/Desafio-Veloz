import React from 'react';
import { View, Text } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View>
      <Text>ID: {item.id}</Text>
      <Text>Tipo: {item.type}</Text>
      <Text>Preço: {item.price}</Text>
    </View>
  );
};

export default DetailsScreen;