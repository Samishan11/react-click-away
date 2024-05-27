# react-click-away

`react-click-away` is a lightweight React hook designed to detect clicks or keydown events outside of a specified DOM element. This hook is particularly useful for implementing functionality such as closing modal dialogs, dropdown menus, or any other UI elements when users interact outside of them. Built with TypeScript, react-click-away offers flexibility and seamless integration into any React application.

## Installation

You can install `react-click-away` using npm or yarn:

```sh
npm install react-click-away
OR
yarn add react-click-away

```

## Usage

Here's an example of how you can use react-click-way in your React application:

```js
import React, { useState } from "react";
import useClickAway from "react-click-away";

const App = () => {
  const ref = useRef < HTMLDivElement > null;
  const [open, setOpen] = useState < boolean > false;

  useClickAway(ref, ["click", "keydown"], () => {
    if (open) {
      handelSideBar();
    }
  });

  return <div ref={ref}> .... </div>;
};

export default App;
```
