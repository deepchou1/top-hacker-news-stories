import axios from "axios";
import { selectStorytFields, selectUserFields } from "../utils/selectFields";

export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
export const alltopStoriesUrl = `${baseUrl}topstories.json`;
export const storyItemUrl = `${baseUrl}item/`;
export const storyUserUrl = `${baseUrl}user/`;

export const getAllTopStoryIds = async () => {
  const result = await axios
    .get(alltopStoriesUrl)
    .then(({ data }) => data.sort(() => 0.5 - Math.random()).slice(0, 10));
  return result;
};

export const getStory = async (storyId) => {
  const { data } = await axios.get(`${storyItemUrl + storyId}.json`);
  return selectStorytFields(data);
};

export const getUser = async (userId) => {
  const { data } = await axios.get(`${storyUserUrl + userId}.json`);
  return selectUserFields(data);
};

export function getStoryData(storyId) {
  return getStory(storyId).then((storyItem) => {
    return getUser(storyItem.by).then((userItem) => {
      storyItem.user = userItem;
      return storyItem;
    });
  });
}

