import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import theme from "../../../utils/Theme";
import { Input } from "native-base";




export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin : 5px;
  margin-top: 10px;
`;

export const SearchInput = styled(Input)`
padding-top: 10px;
padding-bottom: 10px;
`;

export const SearchIcon = styled(MaterialIcons)`
    margin-left: 10px;  
  `;

export const IconContainer = styled.View`
  background-color: ${theme.colors.primaryColor};
  border-radius: 20px;
  padding: 5px;
  margin-right: 10px;

`;

export const ChevronRight = styled(MaterialIcons)`
  color: ${theme.colors.secondaryColor};
  
  `;