import { Container, Pill, Text } from "../../atoms";

export default function AboutMe() {
  return (
    <Container className="p-4 md:p-10 lg:px-48 space-y-4">
      <Pill
        text="FRONTEND DEVELOPER"
        className="border-[#2b7fff] text-[#2b7fff] font-semibold"
      />
      <Text type="h1" className="text-7xl md:text-8xl lg:text-9xl font-bold">
        MARTÍN
      </Text>
      <Text
        type="h2"
        className="text-7xl md:text-8xl lg:text-9xl font-bold bg-linear-to-r from-[#4ea0ff] to-[#2b7fff] bg-clip-text text-transparent"
      >
        RIBOTTA
      </Text>
      <Text type="h2" className="text-xl md:text-2xl lg:text-3xl lg:w-2/3 text-gray-400">
        Desarrollador Frontend especializado en{" "}
        <Text type="span" className="font-bold text-white">
          React, Next.js y Expo.
        </Text>{" "}
        Construyendo experiencias digitales con enfoque editorial y arquitectura
        técnica impecable.
      </Text>
    </Container>
  );
}
