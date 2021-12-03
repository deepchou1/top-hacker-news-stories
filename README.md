This is a [Next.js](https://nextjs.org/) project with TypeScript and styled-components


## Expected end result
Displays 10 random Hacker News stories using [the Hacker News API](https://github.com/HackerNews/API). The stories must be listed in ascending order based on the stories score.
The UI include:
* Story title
* Story URL
* Story timestamp
* Story score
* Author id
* Author karma score
* A dummy image (not from API – just a static asset)


## Process
Worked with following endpoints:
* Top stories: https://hacker-news.firebaseio.com/v0/topstories.json
* Story item: https://hacker-news.firebaseio.com/v0/item/${id}.json
* User: https://hacker-news.firebaseio.com/v0/user/${id}.json
* API documentation: https://github.com/HackerNews/API

"https://hacker-news.firebaseio.com/v0/" is the base url. 

To get top Stories, I got data from (${baseUrl}topstories.json) and then apply random function to get values randomly and then the slice method to get only 10 values, got top Ids from getAllTopStoryIds.

For story/item details, used (${baseUrl}item/${id}.json), passed sorted Ids to it and collected data only for selected fields {id , by, url, time, title, score}

For user, target (${baseUrl}user/${id}.json) and here ${id} came from story details key by (storyItem.by) and get karma score accordingly.


## Getting Started
First, run the development server:

```bash
npm ci
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
