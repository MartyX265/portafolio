import { FaRegCopyright } from "react-icons/fa";
import { Container, Text } from "../../atoms";

export default function Footer() {
  return (
    <Container
      type="footer"
      className="bg-[#0a0d12] text-gray-400 p-4 md:p-10 lg:px-48"
    >
      <Container className="flex flex-row justify-between items-center">
        <Text className="flex items-center gap-2">
          <FaRegCopyright /> 2026 Martin Ribotta.
        </Text>
        <Text>⌰⍜⍀⟒⋔ ⟟⌿⌇⎍⋔ ⎅⍜⌰⍜⍀.</Text>
      </Container>
    </Container>
  );
}
