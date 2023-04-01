import styled from "styled-components/native";
import theme from "../../utils/Theme";

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
  background-color: ${theme.colors.primaryColor};
`;

export const HeaderText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.secondaryColor};
`;

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 80%;
`;

export const Image = styled.Image`
  width: 100px;
  height: 100px;
`;

