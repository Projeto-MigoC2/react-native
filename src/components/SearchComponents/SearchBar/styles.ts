import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../../utils/Theme";
import { Input } from "native-base";




export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled(Input)`
  border-radius: 10px;
  padding: 10px;
  margin-top: 20px;
`;



export const IconContainer = styled.View`
  background-color: ${theme.colors.primaryColor};
  border-radius: 20px;
  padding: 5px;

`;

export const ChevronRight = styled(MaterialIcons)`
  color: ${theme.colors.secondaryColor};
  
  `;