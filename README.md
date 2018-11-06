# react-fb-image-grid
An image library that's used to show the images in beautiful grids.

Below you will find some information on how to perform common tasks.<br>


## Table of Contents

- [What's new](#whats-new)
- [Installation](#installation)
- [Props](#props)
- [Pull Requests](#pr)
- [License](#license)


## What's new `v0.1.5`
* Fixed key warning.


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

```
import FbImageLibrary from 'react-fb-image-grid'

<FbImageLibrary images={[]}/>
```


## Props

Props | Type | Default | Example
:--- | :---: | :---: | :---
images | Array (String) | **required** | `{['https://some-url.com/image.jpg', importedImage]}` `//Local image should be imported first`
countFrom | Number | 5 | `{2}`  `//Should be from 1 to 5`
hideOverlay | Boolean | false | `{true}`
renderOverlay | Function | `() => 'Preview Image'` | `{() => <button>Show Image</button>}`
overlayBackgroundColor | String | `#222222` | `'green'` or `'#000000'` or `'rgb(255, 26, 26)'`
onClickEach | Function | null | `{({src, index}) => {}}`


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