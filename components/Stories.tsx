import { NextPage } from "next";
import { StoryType } from "../models/story";
import styled from "styled-components";

const StoryCard = styled.div`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  width: 350px;
  border-radius: 5px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);

    h3 {
      color: var(--textElementSecondary);
    }
  }

  .story-details {
    padding: 24px;
  }

  h3 {
    margin-top: 10px;
    font-size: var(--fontSizeTitle);
    line-height: 24px;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .more-info {
    display: flex;
    justify-content: space-between;
  }

  .story-info {
    color: var(--textElementSecondary);
  }

  .story-link {
    background: var(--textElementSecondary);
    display: inline-block;
    width: 100%;
    text-align: center;
    color: var(--textElementWhite);
    padding: 10px;
    margin-top: 10px;
    cursor: pointer;
    border: 1px solid var(--textElementSecondary);

    &:hover {
      background: none;
      color: var(--textElementSecondary);
    }
  }

  @media (max-width: 768px) {
    h3 {
      font-size: var(--fontSizeText);
      font-weight: 700;
    }

    .more-info {
      justify-content: start;
      flex-wrap: wrap;
      span {
        width: 100%;
      }
    }
  }
`;

interface StoriesProps {
  story: StoryType;
}


export const Stories: NextPage<StoriesProps> = ({ story }) => {
  return (
    <StoryCard key={story?.id}>
      <section className="story-details">
        <div className="more-info story-info">
          <span>By : {story?.by}</span>
        </div>
        <h3>{story?.title}</h3>
        <div className="more-info score-info">
          <span>Karma score: {story?.user?.karma}</span>
          <span>Score : {story?.score}</span>
        </div>
        {story?.url && 
          <a
            href={story.url}
            className="story-link"
            target="_blank"
            rel="noreferrer"
          >
            Link to story
          </a>
        }
      </section>
    </StoryCard>
  );
};