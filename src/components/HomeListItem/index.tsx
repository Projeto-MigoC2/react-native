import { TouchableOpacity } from "react-native";
import { Container, ListItem, ListItemText } from "./styles";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import theme from "../../utils/Theme";

interface HomeListItemProps {
  title: string;
  iconLib?: "MaterialCommunityIcons" | "Feather";
  iconName?: string;
}

export default function HomeListItem({
  title,
  iconLib,
  iconName,
}: HomeListItemProps) {
  const renderIcon = () => {
    if (!iconLib || !iconName) return <></>;

    const props = {
      color: theme.colors.secondaryColor,
      size: 30,
    };

    const style = {
      marginRight: 10,
    };

    if (iconLib === "MaterialCommunityIcons") {
      return (
        <MaterialCommunityIcons
          color={props.color}
          name={iconName}
          size={props.size}
          style={style}
        />
      );
    }
    if (iconLib === "Feather") {
      return (
        <Feather
          name={iconName}
          style={style}
          color={props.color}
          size={props.size}
        />
      );
    }
  };

  return (
    <Container>
      <ListItem>
        {renderIcon()}
        <ListItemText>{title}</ListItemText>
      </ListItem>
    </Container>
  );
}
