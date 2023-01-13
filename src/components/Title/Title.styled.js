import styled from 'styled-components';

export const TitleStyled = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  /* margin-bottom: ${p => p.theme.space[3]}; */
  text-shadow: ${p => p.theme.shadows.primary};
  margin-bottom: ${p => p.mb};

  @media screen and (min-width: 360px) {
    padding-left: 40px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  } ;
`;
