# Youtube with React

- Created react app using `npm create vite@latest -- --template react`
- Installed tailwind css from website https://tailwindcss.com/docs/installation/using-vite

- Added Skeleton of youtube
- Created search bar
- Added list for sidebar

- Installing redux toolkit

```
npm i -D @reduxjs/toolkit
npm i -D react-redux
```

- Added redux store
- Added toggle menu feature to close and open sidebar when we click on hamburger menu

- Added Button List
- Create GOOGLE API KEY
- ADDED YOUTUBE VIDEOS API
- Fetched videos from API

- Added videos inside video container
- created slice for videos and did memoization so that the call to api is not made when the store is filled
- Added early return and added shimmer effect
