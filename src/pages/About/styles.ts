import styled from "styled-components/native";
import theme from "../../utils/Theme";
import { Box, Image, Text, VStack } from "native-base";



export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.lightBackgroundColor};
`;


export const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 60%;
`;

export const MigoImage = styled.Image`
  width: 100%;
  height: 250px;
`;

export const DescriptionContainer = styled(Box)`
  margin: 10px;
  padding: 15px 0px 15px 0px;
  background-color: ${theme.colors.lightBoxColor};
  border-radius: 10px;
  width: 95%;
`;

export const DescriptionText = styled(Text)`
  font-size: 18px;
  text-align: justify;
  margin: 10px 15px 10px 15px;

`

export const TitleContainer = styled.View`
width: 100%;
margin-left: 30px;
`;

export const ParticipantsContainer = styled(VStack)`
  width: 95%;
  margin-top: 10px;
`;

export const ParticipantCard = styled(Box)`
  
  flex-direction: row;
  padding: 10px;
  background-color: ${theme.colors.lightBoxColor};
  border-radius: 10px;
  width: 100%;
`;

export const ParticipantImage = styled(Image)`
`;

export const ParticipantInfo = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 10px;
`;

export const ParticipantName = styled(Text)`
  color: ${theme.colors.lightFontColor};
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
`;


export const ParticipantRole = styled(Text)`
  color: ${theme.colors.lightFontColor};
  font-size: 16px;
  font-weight: bold;
  margin-left: 10px;
  margin-top: 10px;
`;

export const Footer = styled.View`
  flex: 1;
  
  align-items: center;
  padding-bottom: 20px;
  width: 100%;
`;

export const FooterText = styled.Text`
  font-size: 15px;
  color: ${theme.colors.lightFontColor};
`;

export const FooterImagesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const FooterImage1 = styled.Image`
  width: 80px;
  height: 80px;
  margin: 10px;
`;

export const FooterImage2 = styled.Image`
  width: 80px;
  height: 120px;
  margin: 10px;
`;