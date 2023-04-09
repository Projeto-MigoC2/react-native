import styled from "styled-components/native";
import theme from "../../utils/Theme";


export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.lightBackgroundColor};
`;

export const Header = styled.View`
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

export const ImageContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 60%;
`;

export const Image = styled.Image`
  width: 100%;
  height: 250px;
`;

export const TitleContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const TitlePart1 = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${theme.colors.terciaryColor};
  margin-right  : 6px;
`;

export const TitlePart2 = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${theme.colors.primaryColor};
`;

export const TitlePart3 = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${theme.colors.secondaryColor};
`;

export const DescriptionContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: ${theme.colors.lightFontColor};
`;



export const List = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
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

