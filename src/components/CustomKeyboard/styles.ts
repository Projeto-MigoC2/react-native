import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import MathJax from "react-native-mathjax";

export const KeyContainer = styled(TouchableOpacity)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin: 5px;
`;

export const KeysContainer = styled(View)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ExpressionContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const Expression = styled(MathJax)`
  background-color: white;
  padding: 15px;
  border-radius: 10px;
`;