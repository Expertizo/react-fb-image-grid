import React, { Component } from "react";
import { render } from "react-dom";
import "../../src/css/style.css";
import FbImageLibrary from "../../src";

const images = [
  "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350",
  ,
  // "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
  // "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
  // "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
  // "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350",
  // "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
  // "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000",
  () => (
    <iframe
      title="cats"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/5dsGWM5XGdg"
      style={{
        maxWidth: "97%",
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
        top: "50%",
        transform: "translateY(-50%)"
      }}
    />
  )
];

const imgs = [
  {
    url:
      "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
    thumbnail:
      "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
  },
  {
    url: "https://www.youtube.com/embed/5dsGWM5XGdg",
    iFrame: true,
    props: {},
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
  },
  {
    isVideo: true,
    url: "http://techslides.com/demos/sample-videos/small.webm",
    props: {},
    thumbnail:
      "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
  }
];

class Demo extends Component {
  render() {
    return (
      <div>
        {/* images can be 'images' or 'imgs' */}
        <FbImageLibrary images={imgs} />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
