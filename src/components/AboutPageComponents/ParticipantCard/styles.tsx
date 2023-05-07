import { Box, Image, Text } from "native-base";
import styled from "styled-components/native";
import theme from "../../../utils/Theme";

export const Container = styled(Box)`
  margin: 10px;
  padding: 10px;
  background-color: ${theme.colors.lightBoxColor};
  border-radius: 10px;
  width: 100%;
`;

export const ParticipantName = styled(Text)`
  color: ${theme.colors.lightFontColor};
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;

export const ParticipantImage = styled(Image)`
  height: 200px;
  border-radius: 10px;
`;

export const ParticipantRole = styled(Text)`
  color: ${theme.colors.lightFontColor};
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 10px;
`;
