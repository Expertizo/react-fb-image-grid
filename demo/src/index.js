import React, {Component} from 'react'
import {render} from 'react-dom'
import '../../src/css/style.css';
import FbImageLibrary from '../../src'

const images = ['https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350',
    'https://www.gettyimages.ie/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
    'https://wallpaperbrowse.com/media/images/soap-bubble-1958650_960_720.jpg',
    'https://cdn.pixabay.com/photo/2016/10/27/22/53/heart-1776746_960_720.jpg',
    'https://images.pexels.com/photos/257840/pexels-photo-257840.jpeg?auto=compress&cs=tinysrgb&h=350',
    "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350",
    "https://wallpaperbrowse.com/media/images/3848765-wallpaper-images-download.jpg"]

class Demo extends Component {
    render() {
        return <div>
            <FbImageLibrary images={images}/>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
