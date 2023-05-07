import styled from "styled-components/native";
import theme from "../../utils/Theme";
import { Box, Text, VStack } from "native-base";

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

export const ModuleLoadingBox = styled(Box)`
  /* margin: 10px; */
  margin: 0 10px 0 10px;
  padding: 15px 0px 15px 0px;
  background-color: ${theme.colors.lightBoxColor};
  border-radius: 10px;
  width: 100%;
`;
