import React, { Component } from 'react';
import { Image, Grid, Row, Col } from 'react-bootstrap';
import Modal from './Modal'
import PropTypes from 'prop-types';

class Images extends Component {
  static defaultProps = {
    images: [],
    width: 100,
    hideOverlay: false,
    renderOverlay: () => 'Preview Image',
    overlayBackgroundColor: '#222222',
    onClickEach: null,
    countFrom: 5,
    align: 'center',
    fromLeft: null,
    fromRight: null
  }

  constructor(props) {
    super(props)

    this.state = {
      modal: false,
      countFrom: props.countFrom > 0 && props.countFrom < 5 ? props.countFrom : 5,
      conditionalRender: false
    };

    this.openModal = this.openModal.bind(this);
    this.onClose = this.onClose.bind(this);

    if(props.countFrom <= 0 || props.countFrom > 5) {
      console.warn('countFrom is limited to 5!')
    }
  }

  getStyle() {
    const {width, align, fromLeft, fromRight} = this.props;
    const style = {};

    style['width'] = `${width}%`;
    if(['left', 'right'].includes(align)) {
      const alignText = align === 'left' ? "Left" : "Right";
      style[`margin${alignText}`] = 0
    }
    if(typeof fromLeft === "number") {
      style[`marginLeft`] = `${fromLeft}%`;
    }
    if(typeof fromRight === "number") {
      style[`marginRight`] = `${fromRight}%`;
    }

    return style
  }

  openModal(index) {
    const {onClickEach, images} = this.props;

    if(onClickEach) {
      return onClickEach({src: images[index], index})
    }

    this.setState({modal: true, url: images[index], index})
  }

  onClose() {
    this.setState({modal: false})
  }

  renderOne() {
    const {images, width} = this.props;
    const {countFrom} = this.state;
    const height = `${100 * (width / 100)}vw`;
    const overlay = images.length > countFrom && countFrom == 1 ? this.renderCountOverlay(true) : this.renderOverlay();

    return  <Grid style={this.getStyle()}>
      <Row>
        <Col xs={12} md={12} className={`border height-${images.length == 1 || countFrom == 1 ? 'one' : 'two' } background`} onClick={this.openModal.bind(this, 0)} style={{background: `url(${images[0]})`, height}}>
          {overlay}
        </Col>
      </Row>
    </Grid>;
  }

  renderTwo() {
    const {width, images} = this.props;
    const {countFrom} = this.state;
    const overlay = images.length > countFrom && [2, 3].includes(+countFrom) ? this.renderCountOverlay(true) : this.renderOverlay();
    const height = `${50 * (width / 100)}vw`;
    const conditionalRender = [3, 4].includes(images.length) || images.length > +countFrom && [3, 4].includes(+countFrom);

    return <Grid style={this.getStyle()}>
      <Row>
        <Col xs={6} md={6} className="border height-two background" onClick={this.openModal.bind(this, conditionalRender ? 1 : 0)} style={{background: `url(${conditionalRender ? images[1] : images[0]})`, height}}>
          {this.renderOverlay()}
        </Col>
        <Col xs={6} md={6} className="border height-two background" onClick={this.openModal.bind(this, conditionalRender ? 2 : 1)} style={{background: `url(${conditionalRender ? images[2] : images[1]})`, height}}>
          {overlay}
        </Col>
      </Row>
    </Grid>;
  }

  renderThree(more) {
    const {width, images} = this.props;
    const {countFrom} = this.state;
    const overlay = !countFrom || countFrom > 5 || images.length > countFrom && [4, 5].includes(+countFrom) ? this.renderCountOverlay(true) : this.renderOverlay(conditionalRender ? 3 : 4);
    const height = `${33 * (width / 100)}vw`;
    const conditionalRender = images.length == 4 || images.length > +countFrom && +countFrom == 4;

    return <Grid style={this.getStyle()}>
      <Row>
        <Col xs={6} md={4} className="border height-three background" onClick={this.openModal.bind(this, conditionalRender ? 1 : 2)} style={{background: `url(${conditionalRender ? images[1] : images[2]})`, height}}>
          {this.renderOverlay(conditionalRender ? 1 : 2)}
        </Col>
        <Col xs={6} md={4} className="border height-three background" onClick={this.openModal.bind(this, conditionalRender ? 2 : 3)} style={{background: `url(${conditionalRender ? images[2] : images[3]})`, height}}>
          {this.renderOverlay(conditionalRender ? 2 : 3)}
        </Col>
        <Col xs={6} md={4} className="border height-three background" onClick={this.openModal.bind(this, conditionalRender ? 3 : 4)} style={{background: `url(${ conditionalRender ? images[3] : images[4]})`, height}}>
          {overlay}
        </Col>
      </Row>
    </Grid>;
  }

  renderOverlay(id) {
    const {hideOverlay, renderOverlay, overlayBackgroundColor, width} = this.props;
    const fontSize = `${3 * (width / 100)}vw`;

    if(hideOverlay) {
      return false
    }

    return [
      <div key={`cover-${id}`} className="cover slide" style={{backgroundColor: overlayBackgroundColor}}></div>,
      <div key={`cover-text-${id}`} className="cover-text slide animate-text"  style={{fontSize}}>
        {renderOverlay()}
      </div>
    ]
  }

  renderCountOverlay(more) {
    const {images, width} = this.props;
    const {countFrom} = this.state;
    const extra = images.length - (countFrom && countFrom > 5 ? 5 : countFrom);
    const fontSize = `${7 * (width / 100)}vw`;

    return [more && <div className="cover"></div>, more && <div className="cover-text" style={{fontSize}}><p>+{extra}</p></div>]
  }

  render(){
    const {modal, index, countFrom} = this.state;
    const {images} = this.props;
    const imagesToShow = [...images];

    if(countFrom && images.length > countFrom) {
      imagesToShow.length = countFrom;
    }

    return(
        <div className="grid-container">
          {[1, 3, 4].includes(imagesToShow.length)  && this.renderOne()}
          {imagesToShow.length >= 2 && imagesToShow.length != 4 && this.renderTwo()}
          {imagesToShow.length >= 4 && this.renderThree()}

          {modal && <Modal onClose={this.onClose} index={index} images={images}/>}
        </div>
    )
  }

}

Images.propTypes = {
  images: PropTypes.array.isRequired,
  width: PropTypes.number,
  hideOverlay: PropTypes.bool,
  renderOverlay: PropTypes.func,
  overlayBackgroundColor: PropTypes.string,
  onClickEach: PropTypes.func,
  countFrom: PropTypes.number,
  align: PropTypes.string,
  fromLeft: PropTypes.number,
  fromRight: PropTypes.number
};

export default Images;