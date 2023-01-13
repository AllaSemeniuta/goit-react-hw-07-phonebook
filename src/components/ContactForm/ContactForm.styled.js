import styled from 'styled-components';

export const Input = styled.input`
  outline: transparent;
  border-radius: ${p => p.theme.radii.normal};
  border-color: #fff;
  font-size: 16px;
  box-shadow: ${p => p.theme.shadows.primary};
  width: 250px;
  padding: 4px;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 300px;
  }
  @media screen and (min-width: 1200px) {
  } ;
`;

export const Label = styled.label`
  margin-bottom: ${p => p.theme.space[2]};
  font-size: 16px;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    font-size: 20px;
  }
  @media screen and (min-width: 1200px) {
  } ;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  align-items: flex-start;
  max-width: 310px;
  background: rgba(150, 230, 255, 0.65);
  border-radius: 20px;
  padding-bottom: ${p => p.theme.space[3]};
  padding-top: ${p => p.theme.space[4]};
  padding-left: 16px;
  /* padding-left: ${p => p.theme.space[4]};
  padding-right: ${p => p.theme.space[4]};  */
  box-shadow: ${p => p.theme.shadows.primary};
  /* margin-bottom: ${p => p.theme.space[6]}; */

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 420px;
    border-radius: 26px;
  }
  @media screen and (min-width: 1200px) {
  } ;
`;

export const Wrapper = styled.section`
  margin-bottom: 60px;
  padding-top: 80px;

  @media screen and (min-width: 480px) {
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1200px) {
  } ;
`;
