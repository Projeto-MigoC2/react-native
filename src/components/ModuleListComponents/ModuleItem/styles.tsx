import { Box, Text, VStack } from "native-base";
import styled from "styled-components/native";
import theme from "../../../utils/Theme";
import { MaterialIcons } from "@expo/vector-icons";

export const ModuleContainer = styled(Box)`
  /* margin: 10px; */
  margin: 0 10px 0 10px;
  padding: 10px;
  background-color: ${theme.colors.lightBoxColor};
  border-radius: 10px;
  width: 100%;
`;

export const ModuleHeader = styled(Box)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ModuleName = styled(Text)`
  color: ${theme.colors.secondaryColor};
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  flex: 1;
`;

export const ExpandIcon = styled(MaterialIcons)`
  margin-right: 10px;
  color: ${theme.colors.secondaryColor};
`;

export const ContentList = styled(VStack)`
  border-radius: 10px;
  width: 98%;
`;

export const ContentName = styled(Text)`
  color: ${theme.colors.terciaryColor};
  font-size: 18px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 20px;
`;
