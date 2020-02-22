import styled from 'styled-components';

export const Title: any = styled.p`
  font-size: 50px;
  font-weight: ${(props: any): number =>
    props.fontWeight ? props.fontWeight : 900};
`;

export const SubTitle: any = styled.p``;

export const Bold: any = {
  color: styled.span`
    color: #ea5550;
    font-weight: 900;
  `,
  default: styled.span`
    font-weight: 900;
  `,
};

export const Paragraph: any = styled.p`
  font-size: 20px;
  font-weight: 300;
  line-height: 1.8;
`;

const Text = { Title, Paragraph, Bold };

export default Text;
