import { useEffect, useState } from "react";
import { Stories } from "./Stories";
import { StoryType } from "../models/story";
import { getAllTopStoryIds, getStoryData } from "../services/hackerNewsApi";
import { LoadingScreen } from "./LoadingScreen";
import styled from "styled-components";

const StorySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin: 32px 0;

  @media (max-width: 768px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const StoriesContainer = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //after getting 10 sorted random Ids with getAllTopStoryIds() we run map function for ids and the pass Id to getStoryData function
    getAllTopStoryIds().then((topStoriesIds) => {
      const promises: StoryType[] = topStoriesIds.map((id: any) =>
        getStoryData(id)
      );

      //getting array of objects sorted in score's ascending order
      Promise.all(promises).then((StoryAndUserInfo) => {
        setStories(StoryAndUserInfo.sort((a, b) => a.score - b.score));
        setLoading(false);
      });
    });
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      {!loading && (
        <StorySection>
          {stories.map((story) => (
            <Stories key={story.id} story={story} />
          ))}
        </StorySection>
      )}
    </>
  );
}
