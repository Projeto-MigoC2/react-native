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
  padding: 0px 10px 10px 10px;
  background-color: ${theme.colors.lightBackgroundColor};
`;
