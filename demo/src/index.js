import React, { Component } from "react";
import { render } from "react-dom";
import "../../src/css/style.css";
import FbImageLibrary from "../../src";

const images = [
  "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350",
  ,
  "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg",
  "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
  "https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
];

const imgs = [
  {
    url:
      "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg",
    thumbnail:
      "https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
  },
  {
    isVideo: true,
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    props: {}
    // thumbnail:
    //   "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
  },
  {
    isVideo: true,
    url:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    props: {}
    // thumbnail:
    //   "https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
  },
  {
    url: "https://www.youtube.com/embed/5dsGWM5XGdg",
    iFrame: true,
    props: {}
    // thumbnail:
    //   "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
  },
  {
    url: "https://www.youtube.com/embed/5dsGWM5XGdg",
    iFrame: true,
    props: {}
    // thumbnail:
    //   "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
  },
  {
    url: "https://www.youtube.com/embed/5dsGWM5XGdg",
    iFrame: true,
    props: {}
    // thumbnail:
    //   "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
  },
  {
    url: "https://www.youtube.com/embed/5dsGWM5XGdg",
    iFrame: true,
    props: {}
    // thumbnail:
    //   "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
  },
  {
    url: "https://www.youtube.com/embed/5dsGWM5XGdg",
    iFrame: true,
    props: {}
    // thumbnail:
    //   "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
  },
  {
    url: "https://www.youtube.com/embed/5dsGWM5XGdg",
    iFrame: true,
    props: {}
    // thumbnail:
    //   "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
  },
  {
    url: "https://www.youtube.com/embed/5dsGWM5XGdg",
    iFrame: true,
    props: {}
    // thumbnail:
    //   "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
  },
  {
    url: "https://www.youtube.com/embed/5dsGWM5XGdg",
    iFrame: true,
    props: {}
    // thumbnail:
    //   "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
  },
  {
    url: "https://www.youtube.com/embed/5dsGWM5XGdg",
    iFrame: true,
    props: {}
    // thumbnail:
    //   "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
  },
  {
    url: "https://www.youtube.com/embed/5dsGWM5XGdg",
    iFrame: true,
    props: {}
    // thumbnail:
    //   "https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg"
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
