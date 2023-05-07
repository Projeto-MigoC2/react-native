import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderView, HeaderText } from "./styles";
import theme from "../../../utils/Theme";

export default function Header({ title }: { title: string }) {
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: theme.colors.primaryColor,
          width: "100%",
        }}
      />
      <HeaderView>
        <HeaderText>{title}</HeaderText>
      </HeaderView>
    </>
  );
}
