import styled from "styled-components/native";
import theme from "../../utils/Theme";


export const Container = styled.TouchableOpacity`
width: 100%;
  `;



export const ListItem = styled.View`
  border-radius: 10px;
  background: #ffffff;
  /* box-shadow:  5px 5px 7px #87898c, -5px -5px 7px #ffffff; */
  padding: 20px;
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;

`;

export const ListItemText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${theme.colors.lightFontColor};
  padding-right: 20px;
`;


