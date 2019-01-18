import React, {Component} from 'react'
import {render} from 'react-dom'
import '../../src/css/style.css';
import FbImageLibrary from '../../src'

const images = [
    'https://picsum.photos/1500/1500?image=532',
    'https://picsum.photos/1500/1500?image=668',
    'https://picsum.photos/1500/1500?image=882',
    'https://picsum.photos/1500/1500?image=961',
    'https://picsum.photos/1500/1500?image=998',
    'https://picsum.photos/1500/1500?image=1037',
    'https://picsum.photos/1500/1500?image=1080',
    'https://picsum.photos/1500/1500?image=1072',
]


const thumbnails = [
    'https://picsum.photos/350/350?image=532',
    'https://picsum.photos/350/350?image=668',
    'https://picsum.photos/350/350?image=882',
    'https://picsum.photos/350/350?image=961',
    'https://picsum.photos/350/350?image=998',
    'https://picsum.photos/350/350?image=1037',
    'https://picsum.photos/350/350?image=1080',
    'https://picsum.photos/350/350?image=1072',
]

class Demo extends Component {
    render() {
        return <div>
            <FbImageLibrary images={images} thumbnails={thumbnails} />
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
