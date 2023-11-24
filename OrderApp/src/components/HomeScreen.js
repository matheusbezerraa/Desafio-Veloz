import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://petstore-demo-endpoint.execute-api.com/petstore/pets');
      setData(response.data);
    } catch (error) {
      console.error('Erro ao obter os dados:', error);
    }
  };

  const sortBy = (property) => {
    const sortedData = [...data].sort((a, b) => {
      // Verificar se as propriedades existem
      const aValue = a[property];
      const bValue = b[property];
  
      // Comparação baseada no tipo de dados
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        return aValue - bValue;
      } else {
        // Se as propriedades não são do mesmo tipo, manter a ordem original
        return 0;
      }
    });
  
    setData(sortedData);
  };

  return (
    <View>
      <Button title="Carregar Dados" onPress={fetchData} />
      <Button title="Ordenar por ID" onPress={() => sortBy('id')} />
      <Button title="Ordenar por Tipo" onPress={() => sortBy('type')} />
      <Button title="Ordenar por Preço" onPress={() => sortBy('price')} />

      {data.map((item) => (
        <View key={item.id} style={{ margin: 10 }}>
          <Text>ID: {item.id}</Text>
          <Text>Tipo: {item.type}</Text>
          <Text>Preço: {item.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default HomeScreen;