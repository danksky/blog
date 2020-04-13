> Note: Not only the content, but the _format_ of the data with which you'll be building a map in this tutorial changes rapidly. Please reach out if something doesn't work anymore so I can keep this updated.

```js
<a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
    big man
small man
>
```

## Setup

1. Create a React project.

```
$ npx create-react-app <MyAppName>
```

2. Clear out any stuff from App.js that nobody asked for.

```diff
import React from 'react';
- import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
-      <header className="App-header">
-         <img src={logo} className="App-logo" alt="logo" />
-        <p>
-          Edit <code>src/App.js</code> and save to reload.
-        </p>
-        <a
-          className="App-link"
-          href="https://reactjs.org"
-          target="_blank"
-          rel="noopener noreferrer"
-        >
-          Learn React
-        </a>
-      </header>
    </div>
  );
}

export default App;
```

2. Install [D3](TODO)

`npm install d3` TODO

## Let's get a "Basemap."

### Source

A base map is a ____. We're going to be making a choropleth map; in other words, the basemap is what we'll _start with_ before you "color in the lines" to present your geographical revelations.
We'll use this [110 meter-quality map](https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json) from the TopoJSON [World Atlas repository](https://github.com/topojson/world-atlas).

### Grab it

Because the [geometry](TODO) of the map is formatted in JSON, we can use D3's `json()` method download it for our use.
console.log it
// TODO: Screenshot it here
// paste the screenshot
// See that the format of the thing is this?
// The format of the country entry is like this: ...

## Visualize the Map 

// Just load the plain old map.
// Now create a sample JS map with country data (we will try to mimick this format by reformatting data later). 

# Let's Use Real Data

// later find out... oh no! not even the United States shows up!
// 