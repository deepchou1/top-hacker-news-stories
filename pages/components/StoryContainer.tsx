import { useEffect, useState } from "react";
import { getAllTopStoryIds, getStoryData } from "../../services/hackerNewsApi";
import Story from "./Storyies";
import { StoryType } from "../components/models";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin: 32px 16px;

  @media (max-width: 768px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export default function StoriesContainer() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getAllTopStoryIds().then((topStoriesIds) => {
      const promises: StoryType[] = topStoriesIds.map((id: any) =>
        getStoryData(id)
      );
      Promise.all(promises).then((dataArray) => {
        setStories(dataArray.sort((a, b) => a.score - b.score));
      });
    });
  }, []);

  return (
    <Wrapper>
      {stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </Wrapper>
  );
}
