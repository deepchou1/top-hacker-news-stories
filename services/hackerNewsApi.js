import axios from "axios";
import { selectStorytFields, selectUserFields } from "../utils/selectFields";

export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
export const allTopStoriesUrl = `${baseUrl}topstories.json`;
export const storyItemUrl = `${baseUrl}item/`;
export const storyUserUrl = `${baseUrl}user/`;


//getting data from allTopStoriesUrl API link----
export const getAllTopStoryIds = async () => {
  const allStoryData = await axios
    .get(allTopStoriesUrl)
    .then(({ data }) => data.sort(() => 0.5 - Math.random()).slice(0, 10)); //applying random function and then slice method which use only first 10 entries randomly.
    return allStoryData;
};


//getting story data details by passing sorted storyId in the API link----
export const getStory = async (storyId) => {
  const { data } = await axios.get(`${storyItemUrl + storyId}.json`);
  return selectStorytFields(data); //getting only selected/required key values for story item
};


//getting user details by passing userId from storyId.by and got karma detail accordingly----
export const getUser = async (userId) => {
  const { data } = await axios.get(`${storyUserUrl + userId}.json`);
  return selectUserFields(data); //getting only selected/required key values for user Id
};


export async function getStoryData(storyId) {
  const storyItem = await getStory(storyId);
  const userItem = await getUser(storyItem.by);
  storyItem.user = userItem;
  return storyItem;
}
