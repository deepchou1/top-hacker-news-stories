export const selectStorytFields = ({ id , by, url, title, score }) => ({
  id,
  by,
  url,
  title,
  score,
});

export const selectUserFields = ({ id, karma }) => ({
  id,
  karma,
});