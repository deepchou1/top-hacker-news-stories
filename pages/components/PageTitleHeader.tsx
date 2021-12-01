import { NextPage } from "next";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  .title-container {
    border: solid var(--textElementSecondary);
    border-width: 1px 0 1px;
    color: var(--textElementSecondary);
    padding: 16px;
    width: 100%;
    text-align: center;
  }

  .title {
    font-size: var(--fontSizePageTitle);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.7px;
  }
  .sub-title {
    display: block;
    font-weight: 400;
  }
`;

export interface PageTitleHeaderProps {
  title: string;
  subTitle?: string;
}

export const PageTitleHeader: NextPage<PageTitleHeaderProps> = ({
  title,
  subTitle,
}) => {
  return (
    <Wrapper>
      <div className="title-container">
        <span className="title">{title}</span>
        <span className="sub-title">{subTitle}</span>
      </div>
    </Wrapper>
  );
};
