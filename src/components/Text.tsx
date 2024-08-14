import styled from '@emotion/styled';

export const Heading1 = styled.div`
  font-size: 3rem;
  img {
    width: 160px;
  }
`;

export const Heading2 = styled.div`
  font-size: 1rem;
  margin: 10px;
  white-space: pre-line;
`;

export const PointTitle = styled.div`
  width: 30%;
  margin: auto;
`;

export const Paragraph = styled.div`
  line-height: 2.2rem;
  white-space: pre-line;
  font-size: 1.3rem;
  background: #FEEEBB;
  padding: 14px;
  word-break: keep-all;
  margin: 0 20px 20px;
  border-radius: 30px;
`;

export const Caption = styled.div<{ textAlign?: string }>`
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
