import styled from "styled-components";

const StyledText = styled.span`
  font-family: sans-serif;
`;

interface TextProps {
  /*
   * Value default is 'span'
   */
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  // eslint-disable-next-line no-undef
  children: React.ReactNode;
}

export function Text({ tag = "span", children, ...props }: TextProps) {
  return (
    <StyledText as={tag} {...props}>
      {children}
    </StyledText>
  );
}
