import { NextPage } from "next";
import styled from "styled-components";

const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;

  .title-container {
    border: solid var(--textElementSecondary);
    border-width: 1px 0 1px;
    color: var(--textElementSecondary);
    padding: 16px;
    width: 100%;
  }

  .title {
    font-size: var(--fontSizePageTitle);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.7px;
  }
`;

interface PageTitleHeaderProps {
  title: string;
  subTitle?: string;
}

export const PageTitleHeader: NextPage<PageTitleHeaderProps> = ({
  title,
  subTitle,
}) => {
  return (
    <HeaderTitle>
      <header className="title-container">
        <h1 className="title">{title}</h1>
        <h2 className="sub-title">{subTitle}</h2>
      </header>
    </HeaderTitle>
  );
};
