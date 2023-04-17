import { Box } from "native-base";
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

export const SearchContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 10px;
  width: 95%;
  `;

export const SearchList = styled.View`
  flex: 1;
  width: 100%;
  padding: 0px 10px 10px 10px;
  background-color: ${theme.colors.lightBackgroundColor};
  `;

export const SearchListItem = styled(Box)`
  border-radius: 10px;
  background: #ffffff;
  padding: 20px;
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  `;

export const SearchListItemTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.secondaryColor};
  `;