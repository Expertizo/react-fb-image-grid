# react-fb-image-grid

An image library that's used to show the images in beautiful grids.

Below you will find some information on how to perform common tasks.<br>

## Table of Contents

- [What's new](#whats-new)
- [Installation](#installation)
- [Props](#props)
- [Pull Requests](#pr)
- [License](#license)

## What's new `v0.1.6`

- Added option to provide thumbnail.

## Demo

![react-fb-image-grid](https://media.giphy.com/media/g04KayLmHrF5hqXzf6/giphy.gif)

## Some Features Video

https://youtu.be/HdEhsDNkw6s

## Installation

Run the following

```
npm install react-fb-image-grid
```

or

```
yarn add react-fb-image-grid
```

## Basic Usage

```jsx
import FbImageLibrary from "react-fb-image-grid";

<FbImageLibrary images={["img_01", "img_02", "..."]} />;
```

or

```jsx
import FbImageLibrary from "react-fb-image-grid";

<FbImageLibrary
  images={[
    { url: "img_01", thumbnail: "thumb_01" },
    { url: "......", thumbnail: "........" }
  ]}
/>;
```

or

```jsx
import FbImageLibrary from 'react-fb-image-grid'

<FbImageLibrary images={[
  {url: 'video_01', thumbnail: 'thumb_01',isVideo:true},
  {url: 'video_02',isVideo:true},
  {url: 'Youtube/video_03',iFrame:true},
  {url: 'Youtube/video_02', thumbnail: 'thumb_02',iFrame:true},
  ...
]}/>
```

## Props

| Props                  |                        Type                        |         Default         | Example                                                                                                                        |
| :--------------------- | :------------------------------------------------: | :---------------------: | :----------------------------------------------------------------------------------------------------------------------------- |
| images                 | **Array (String)** <br> OR <br> **Array (Object)** |      **required**       | `{['imgURL', 'imgURL', '...']}` <br> OR <br> `{[ {url: 'imgURL, thumbnail: 'thumbnailURL'}, {url, '...', thumbnail: '...'} ]}` |
| countFrom              |                       Number                       |            5            | `{2}` - _Should be between 1 to 5_                                                                                             |
| hideOverlay            |                      Boolean                       |          false          | `{true}`                                                                                                                       |
| renderOverlay          |                      Function                      | `() => 'Preview Image'` | `{() => <button>Show Image</button>}`                                                                                          |
| overlayBackgroundColor |                       String                       |        `#222222`        | `'green'` or `'#000000'` or `'rgb(255, 26, 26)'`                                                                               |
| onClickEach            |                      Function                      |          null           | `{({src, index}) => {}}`                                                                                                       |
| isVideo                |                      Boolean                       |         `false`         | `{true}`                                                                                                                       |
| iFrame                 |                      Boolean                       |         `true`          | `{true}`                                                                                                                       |

## Pull Requests

Feel free to make Pull Requests for your feature/fix.
To run the project, run

```
npm install
```

or

```
yarn
```

then

```
npm start
```

## License

[MIT](./LICENSE)
