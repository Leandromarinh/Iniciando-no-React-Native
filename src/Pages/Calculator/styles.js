import styled from 'styled-components/native';

import {
  screenHeight,
  screenWidth,
} from '../../Components/Constants/styles/dimensions';

import * as color from '../../Components/Constants/styles/colors';

export const CalculatorStyled = styled.View`
  flex: 1;
  margin-top: ${screenWidth * 0.1}px;
  background-color: ${color.white};
  align-items: center;
  justify-content: center;
`;

export const CalculatorText = styled.Text`
  margin-top: 50%;
  font-size: 25px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 30px;
  background-color: ${color.fluxo};
  height: 40px;
  width: 178px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: ${color.white};
  font-weight: bold;
`;
