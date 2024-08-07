import { ReactNode, useState } from 'react';
import styled from '@emotion/styled';
import ExpandMore from '@/assets/icons/expand_more.svg?react';

interface IAccordionProps {
  title: string;
  children: ReactNode;
}
const Accordion = ({ title, children }: IAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <AccordionHeader isActive={isOpen} onClick={toggleAccordion}>
        <p>{title}</p>

        <span>
          <ExpandMore fill="gray" />
        </span>
      </AccordionHeader>

      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  font-family: ONE-Mobile-POP, serif;
  margin-bottom: 20px;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid #ededed;
`;

const AccordionHeader = styled.div<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  background-color: #fff4d6;
  //border: 1px solid #ededed;
  & > p {
    color: #44484d;
    font-family: 'Ownglyph_UNZ-Rg',sans-serif;
    font-size: 24px;
  }
  & > span {
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    transition: all 0.3s ease;
    transform: ${(props) => (props.isActive ? 'rotate(180deg)' : undefined)};
  }
`;

const AccordionContent = styled.div`
  font-size: 14px;
  text-align: justify;
  padding: 10px 20px;
  background-color: #ffffff;
  font-family: 'Ownglyph_UNZ-Rg',sans-serif;
`;
