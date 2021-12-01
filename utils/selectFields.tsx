export const selectStorytFields = ({ id , by, url, time, title, score }) => ({
  id,
  by,
  url,
  time,
  title,
  score,
});

export const selectUserFields = ({ id, karma }) => ({
  id,
  karma,
});