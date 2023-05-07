import { Image } from "react-native";
import {
  Container,
  ParticipantImage,
  ParticipantName,
  ParticipantRole,
} from "./styles";

interface ParticipantCardProps {
  name: string;
  picture: string;
  role: string;
}

export default function ParticipantCard({
  name,
  picture,
  role,
}: ParticipantCardProps) {
  console.log("../../../assets/" + picture);

  // get the image from the assets folder

  return (
    <>
      <Container>
        <ParticipantImage
          style={{ height: 100 }}
          source={{
            uri: "../../assets/" + picture,
          }}
          alt="awdad"
        />
        <ParticipantName>{name}</ParticipantName>
        <ParticipantRole>{role}</ParticipantRole>
      </Container>
    </>
  );
}
