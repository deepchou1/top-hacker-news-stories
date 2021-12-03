import { NextPage } from "next";
import Image from "next/image";
import { StoryType } from "../components/models";
import styled from "styled-components";

const Wrapper = styled.div`
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2);
  width: 350px;
  border-radius: 5px;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);

    h3 {
      color: var(--textElementSecondary);
    }
  }
  h3 {
    margin-top: 10px;
    font-size: var(--fontSizeTitle);
    line-height: 24px;
    letter-spacing: 0.9px;
    text-transform: uppercase;
    font-weight: 500;
  }

  .story-details {
    padding: 24px;
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

  .story-image {
    object-fit: cover;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: var(--fontSizeText);
      font-weight: 700;
    }

    .more-info {
      justify-content: start;
      flex-wrap: wrap;
      p {
        width: 100%;
        &:not(:first-child) {
          margin-top: 0;
        }
      }
    }
  }
`;

interface StoriesProps {
  story: StoryType;
}

const Story: NextPage<StoriesProps> = ({
  story
}) => {

  return (
    <Wrapper>
      <div key={story?.id}>
        <Image
          className="story-image"
          src="/stories-bg.jpg"
          alt="story-image"
          width={500}
          height={250}
          priority
        />
        <div className="story-details">
          <div className="more-info story-info">
            <p>By : {story?.by}</p>
            <p>
              on : {new Intl.DateTimeFormat("en-US").format(story?.time * 1000)} 
            </p>
          </div>
          <h3>{story?.title}</h3>
          <div className="more-info score-info">
            <p>Karma score: {story?.user?.karma}</p>
            <p>Score : {story?.score}</p>
          </div>
          <a
            href={story?.url}
            className="story-link"
            target="_blank"
            rel="noreferrer"
          >
            Link to story
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Story;