import styled from "styled-components/native";
import theme from "../../utils/Theme";
import { Box, Pressable, Text, VStack } from "native-base";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.lightBackgroundColor};
`;

export const ListContainer = styled(VStack) `
  flex: 1;
  width: 98%;
  padding: 20px 10px 10px 10px;
  background-color: ${theme.colors.lightBackgroundColor};
`;

export const SettingsItemBox = styled(Box)`
  /* margin: 10px; */
  
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;  
  `;
  export const PressableBox = styled(Pressable)`
  padding: 15px 0px 15px 0px;
  background-color: ${theme.colors.lightBoxColor};
  width: 100%;
  `;
  
export const SettingsIcon = styled(Feather) `
  color: ${theme.colors.secondaryColor};
  margin-right: 10px;
  margin-left: 10px;  
`;

export const SettingsItemText = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;  
  `;


