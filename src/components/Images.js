import React, { Component } from 'react';
import {Grid} from "@material-ui/core";
import Modal from './Modal'
import PropTypes from 'prop-types';

class Images extends Component {
  static defaultProps = {
    images: [],
    hideOverlay: false,
    renderOverlay: () => 'Preview Image',
    overlayBackgroundColor: '#222222',
    onClickEach: null,
    countFrom: 5
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

    if (props.countFrom <= 0 || props.countFrom > 5) {
      console.warn('countFrom is limited to 5!')
    }
  }

  openModal(index) {
    const { onClickEach, images } = this.props;

    if (onClickEach) {
      return onClickEach({ src: images[index], index })
    }

    this.setState({ modal: true, url: images[index], index })
  }

  onClose() {
    this.setState({ modal: false })
  }

  renderOne() {
    const { images } = this.props;
    const { countFrom } = this.state;
    const overlay = images.length > countFrom && countFrom == 1 ? this.renderCountOverlay(true) : this.renderOverlay();

    return (<Grid container>
      <Grid item xs={12} md={12} className={`border height-one background`} onClick={this.openModal.bind(this, 0)} style={{ background: `url(${images[0]})` }}>
        {overlay}
      </Grid>
    </Grid>)

  }

  renderTwo() {
    const { images } = this.props;
    const { countFrom } = this.state;
    const overlay = images.length > countFrom && [2, 3].includes(+countFrom) ? this.renderCountOverlay(true) : this.renderOverlay();
    const conditionalRender = [3, 4].includes(images.length) || images.length > +countFrom && [3, 4].includes(+countFrom);

    return (<Grid container>
      <Grid item xs={6} md={6} className="border height-two background" onClick={this.openModal.bind(this, conditionalRender ? 1 : 0)} style={{ background: `url(${conditionalRender ? images[1] : images[0]})` }}
      >
        {this.renderOverlay()}
      </Grid>
      <Grid item xs={6} md={6} className="border height-two background" onClick={this.openModal.bind(this, conditionalRender ? 2 : 1)} style={{ background: `url(${conditionalRender ? images[2] : images[1]})` }}>
        {overlay}
      </Grid>
    </Grid>)

  }

  renderThree(more) {
    const { images } = this.props;
    const { countFrom } = this.state;
    const overlay = !countFrom || countFrom > 5 || images.length > countFrom && [4, 5].includes(+countFrom) ? this.renderCountOverlay(true) : this.renderOverlay(conditionalRender ? 3 : 4);
    const conditionalRender = images.length == 4 || images.length > +countFrom && +countFrom == 4;

    return (<Grid container>
      <Grid item xs={4}  className="border height-three background" onClick={this.openModal.bind(this, conditionalRender ? 1 : 2)} style={{ background: `url(${conditionalRender ? images[1] : images[2]})` }}>
        {this.renderOverlay(conditionalRender ? 1 : 2)}
      </Grid>
      <Grid item xs={4}  className="border height-three background" onClick={this.openModal.bind(this, conditionalRender ? 2 : 3)} style={{ background: `url(${conditionalRender ? images[2] : images[3]})` }}>
        {this.renderOverlay(conditionalRender ? 2 : 3)}
      </Grid>
      <Grid item xs={4}  className="border height-three background" onClick={this.openModal.bind(this, conditionalRender ? 3 : 4)} style={{ background: `url(${conditionalRender ? images[3] : images[4]})` }}>
        {overlay}
      </Grid>
    </Grid>)

  }

  renderOverlay(id) {
    const { hideOverlay, renderOverlay, overlayBackgroundColor } = this.props;

    if (hideOverlay) {
      return false
    }

    return [
      <div key={`cover-${id}`} className="cover slide" style={{ backgroundColor: overlayBackgroundColor }}></div>,
      <div key={`cover-text-${id}`} className="cover-text slide animate-text" style={{ fontSize: '100%' }}>
        {renderOverlay()}
      </div>
    ]
  }

  renderCountOverlay(more) {
    const { images } = this.props;
    const { countFrom } = this.state;
    const extra = images.length - (countFrom && countFrom > 5 ? 5 : countFrom);

    return [more && <div key="count" className="cover"></div>, more && <div key="count-sub" className="cover-text" style={{ fontSize: '200%' }}><p>+{extra}</p></div>]
  }

  render() {
    const { modal, index, countFrom } = this.state;
    const { images } = this.props;
    const imagesToShow = [...images];

    if (countFrom && images.length > countFrom) {
      imagesToShow.length = countFrom;
    }

    return (
      <div className="grid-container">
        {[1, 3, 4].includes(imagesToShow.length) && this.renderOne()}
        {imagesToShow.length >= 2 && imagesToShow.length != 4 && this.renderTwo()}
        {imagesToShow.length >= 4 && this.renderThree()}

        {modal && <Modal onClose={this.onClose} index={index} images={images} />}
      </div>
    )
  }

}

Images.propTypes = {
  images: PropTypes.array.isRequired,
  hideOverlay: PropTypes.bool,
  renderOverlay: PropTypes.func,
  overlayBackgroundColor: PropTypes.string,
  onClickEach: PropTypes.func,
  countFrom: PropTypes.number,
};

export default Images;