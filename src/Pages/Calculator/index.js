import React, { useState } from 'react';

import { View } from 'react-native';

import Header from '../../Components/Header';

import { CalculatorStyled, ButtonText, CalculatorText, Button } from './styles';

export default function Calculator() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <View>
      <Header title='Calculadora' />
      <CalculatorStyled>
        <CalculatorText> O seu contador vale {counter}</CalculatorText>
        <Button onPress={increment}>
          <ButtonText> Adicionar </ButtonText>
        </Button>
      </CalculatorStyled>
    </View>
  );
}
