import { Button, Container, Title, Text, Center, Stack } from "@mantine/core";

export default function App() {
  return (
    <Container size="sm" style={{ marginTop: 60 }}>
      <Stack gap="md" align="center">
        <Title order={1}>Welcome to My Website</Title>

        <Text size="lg" ta="center" c="dimmed">
          This is a simple website built with React + Vite + Mantine + TypeScript.
        </Text>

        <Button size="md">Click Me</Button>
      </Stack>
    </Container>
  );
}
