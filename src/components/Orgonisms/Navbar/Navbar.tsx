import { Button } from "@/components/Atoms";
import { StyledHeader, Subtitle, Title } from "./Navbar.styled";

// Example usage of the StyledHeader component
export const Navbar = () => {
  return (
    <StyledHeader>
      <Title>Your Title</Title>
      <Subtitle>Your Subtitle</Subtitle>
      <Button>Sign in</Button>
    </StyledHeader>
  );
};
