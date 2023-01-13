import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${p => p.theme.space[4]};
  height: inherit;
  min-height: 100vh;
  background: rgb(7, 168, 219);
  background: linear-gradient(
    90deg,
    rgba(7, 168, 219, 1) 15%,
    rgba(150, 103, 255, 1) 99%
  );
  background-position: cover;
  background-size: cover;
  background-repeat: no-repeat;
`;
