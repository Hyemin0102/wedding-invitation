import styled from '@emotion/styled';

export const Heading1 = styled.p`
  font-size: 3rem;
  img {
    width: 160px;
  }
`;

export const Heading2 = styled.p`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.p`
  width: 30%;
  margin: auto;
`;

export const Paragraph = styled.p`
  line-height: 2.2rem;
  white-space: pre-line;
  font-size: 1.5rem;
  background: #FEEEBB;
  padding: 14px;
`;

export const Caption = styled.p<{ textAlign?: string }>`
  width: 80%;
  margin: auto;
  display: flex;
  gap: 6px;
`;

export const AddressCopyIcon = styled.div`
  width: 40px;
  img {
    display: block;
  }
`
