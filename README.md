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

- install react router
- `npm i react-router`

- added app router and outlet for body
- added new watch page
- added action close menu
- dispatched an action to close the menu by default when we go to watch page
- Added HOC for ad component in video card

# Debouncing:

typing slow = 200ms
typing fast = 30ms

Perfomance:

- iphone pro max = 14 letter \* 1000 = 140000
- with debouncing= 3 API calls \* 1000 = 3000

Debouncing with 200ms

- if difference between 2 key strokes is <200ms - DECLINE API call
- > 200ms make an API call

# Cache:

time complexity to search in array = O(n)
time complexity to search in Object = O(1)

[i, ip, iph, iphone]

{
i:
ip:
iph:
iphone:
}

new Map();

- Added debouncing with clearing the event once the component is destroyed
- Stored the search results as cache in redux store
- Fixed showSuggestions while scrolling

- Added nested comments for n levels

## Updating Live chat

- Problems

  - Get Data Live
  - Update the UI

- Live Data

  - Web sockets - handshake -> bidirectional (no regular interval) example: Zerodha Trading Apps, Whatsapp (always in live chat use web sockets) otherwise the order of the chat will be messed up
  - API polling - ui <- server (after an interval) (unidirectional) Example: Gmail, cric buzz, youtube chat

- Added chat with API polling
- deleted messages so that it does not explode the DOM

- Added input box to send the message and chat inside live chat session
- added chat slice

- Learnt about useMemo, useCallback and useRef
- useMemo - to reduce heavy calculation
- useCallback - to reduce heavy function def cache
- useRef - it will persist the value when rerendering- so basically it will not render again on state change
