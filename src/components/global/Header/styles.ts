import styled from "styled-components/native";
import theme from "../../../utils/Theme";


export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  background-color: ${theme.colors.primaryColor};
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.secondaryColor};
`;