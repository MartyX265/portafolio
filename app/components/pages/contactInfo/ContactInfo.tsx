import { Container, Text, Link, Divider } from "../../atoms";

export default function ContactInfo() {
  return (
    <Container className="p-4 md:p-10 lg:px-48 space-y-8 md:space-y-12">
      <Divider className="border border-gray-700"/>
      <Container className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Container className="text-center md:text-left space-y-3">
          <Container>
            <Text
              type="h1"
              className="text-6xl md:text-8xl lg:text-9xl font-bold"
            >
              ¿HABLAMOS
            </Text>
            <Text
              type="h2"
              className="text-6xl md:text-8xl lg:text-9xl font-bold bg-linear-to-r from-[#4ea0ff] to-[#2b7fff] bg-clip-text text-transparent"
            >
              DE TU IDEA?
            </Text>
          </Container>

          <Text
            type="p"
            className="text-lg md:text-xl lg:text-2xl text-gray-400"
          >
            Disponible para incorporaciones a equipos de producto o proyectos
            freelance desafiantes.
          </Text>
          <Link
            className="aura w-full md:w-fit"
            href="mailto:martinribotta.dev@outlook.com.ar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Container className="w-full md:w-fit btn py-6 md:py-8 bg-[#2b7fff] rounded-lg">
              <Text className="font-bold text-2xl ">ENVIAR EMAIL</Text>
            </Container>
          </Link>
        </Container>
      </Container>
    </Container>
  );
}
