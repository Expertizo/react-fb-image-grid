import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Modal from "./Modal";
import PropTypes from "prop-types";

class Images extends Component {
  static defaultProps = {
    hideOverlay: false,
    renderOverlay: () => "Preview",
    overlayBackgroundColor: "#222222",
    onClickEach: null,
    countFrom: 5
  };

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      countFrom:
        props.countFrom > 0 && props.countFrom < 5 ? props.countFrom : 5,
      conditionalRender: false,
      imageUrls: [],
      selectedImage: {},
      thumbnails: []
    };

    this.openModal = this.openModal.bind(this);
    this.onClose = this.onClose.bind(this);

    if (props.countFrom <= 0 || props.countFrom > 5) {
      console.warn("countFrom is limited to 5!");
    }
  }
  generateVideoThumbnail = async (url, i) => {
    let canvas = document.createElement("canvas");
    canvas.width = 640;
    canvas.height = 480;
    canvas.crossOrigin = "anonymous";
    let context = canvas.getContext("2d");
    let video = document.createElement("video");
    video.width = 0;
    video.id = `video-${i}`;
    video.crossOrigin = "anonymous";
    let source = document.createElement("source");
    source.src = url;
    video.appendChild(source);
    document.getElementsByTagName("html")[0].append(video);
    video.autoplay = true;
    video.muted = true;
    video.ontimeupdate = () => {
      video.pause();
      context.drawImage(
        document.getElementById(`video-${i}`),
        0,
        0,
        canvas.width,
        canvas.height
      );
      const { thumbnails } = this.state;
      thumbnails[i] = canvas.toDataURL("image/jpeg");
      this.setState({ thumbnails });
    };
  };

  sortImages = images => {
    const imageUrls = [];
    const thumbnails = [];
    images.forEach((img, i) => {
      if (this.pureTypeOf(img) === "object") {
        if ("iFrame" in img && img.iFrame) {
          imageUrls.push(() => (
            <div className="flex-container-div">
              <iframe
                title="cats"
                className="iframe"
                src={img.url}
                {...img.props}
              />
            </div>
          ));
          thumbnails.push(img.thumbnail || null);
        } else if ("isVideo" in img && img.isVideo) {
          imageUrls.push(() => (
            <div className="flex-container-div">
              <video
                width="400"
                controls
                source={img.url}
                {...img.props}
                crossOrigin="anonymous"
              >
                <source src={img.url} />
              </video>
            </div>
          ));
          thumbnails.push(
            img.thumbnail || this.generateVideoThumbnail(img.url, i)
          );
        } else {
          imageUrls.push(img.url);
          thumbnails.push(img.thumbnail || img.url);
        }
      } else {
        imageUrls.push(img);
        thumbnails.push(img);
      }
    });
    this.setState({ imageUrls, thumbnails });
  };

  componentDidMount() {
    const { images } = this.props;
    if (!images.length) return;
    this.sortImages(images);
  }

  openModal(index) {
    const { onClickEach, images } = this.props;
    const { imageUrls } = this.state;

    if (onClickEach) {
      return onClickEach({ src: imageUrls[index], index });
    }

    this.setState({
      modal: true,
      url: imageUrls[index],
      index,
      selectedImage: images[index]
    });
  }

  onClose() {
    this.setState({ modal: false });
  }

  pureTypeOf = obj => {
    return Object.prototype.toString
      .call(obj)
      .slice(8, -1)
      .toLowerCase();
  };
  isIframe = temp => {
    return "iFrame" in temp && temp.iFrame;
  };

  renderIframe = (url, props = {}) => (
    <iframe className="iframe iframe-overlay" src={url} {...props} />
  );

  renderOne() {
    const { images } = this.props;
    const { countFrom, thumbnails } = this.state;
    const overlay =
      images.length > countFrom && countFrom == 1
        ? this.renderCountOverlay(true)
        : this.renderOverlay();
    const firstItem = images[0];
    const firstItemRender = this.isIframe(firstItem)
      ? this.renderIframe(firstItem.url, firstItem.props)
      : overlay;
    return (
      <Grid>
        <Row>
          <Col
            xs={12}
            md={12}
            className={`border height-one background`}
            onClick={this.openModal.bind(this, 0)}
            style={{ background: `url(${thumbnails[0]})` }}
          >
            {firstItemRender}
            {this.renderOverlay()}
          </Col>
        </Row>
      </Grid>
    );
  }

  renderTwo() {
    const { images } = this.props;
    const { countFrom, thumbnails } = this.state;
    const overlay =
      images.length > countFrom && [2, 3].includes(+countFrom)
        ? this.renderCountOverlay(true)
        : this.renderOverlay();
    const conditionalRender =
      [3, 4].includes(images.length) ||
      (images.length > +countFrom && [3, 4].includes(+countFrom));
    const firstItem = images[0];
    const secondItem = images[1];
    const firstItemRender = this.isIframe(firstItem)
      ? this.renderIframe(firstItem.url, firstItem.props)
      : this.renderOverlay();
    const secondItemRende = this.isIframe(secondItem)
      ? this.renderIframe(secondItem.url, secondItem.props)
      : overlay;

    return (
      <Grid>
        <Row>
          <Col
            xs={6}
            md={6}
            className="border height-two background"
            onClick={this.openModal.bind(this, conditionalRender ? 1 : 0)}
            style={{
              background: `url(${
                conditionalRender ? thumbnails[1] : thumbnails[0]
              })`
            }}
          >
            {firstItemRender}
            {this.renderOverlay()}
          </Col>
          <Col
            xs={6}
            md={6}
            className="border height-two background"
            onClick={this.openModal.bind(this, conditionalRender ? 2 : 1)}
            style={{
              background: `url(${
                conditionalRender ? thumbnails[2] : thumbnails[1]
              })`
            }}
          >
            {secondItemRende}
            {overlay}
          </Col>
        </Row>
      </Grid>
    );
  }

  renderThree(more) {
    const { images } = this.props;
    const { countFrom, thumbnails } = this.state;
    const overlay =
      !countFrom ||
      countFrom > 5 ||
      (images.length > countFrom && [4, 5].includes(+countFrom))
        ? this.renderCountOverlay(true)
        : this.renderOverlay(
            conditionalRender ? 3 : 4,
            conditionalRender ? 3 : 4
          );
    const conditionalRender =
      images.length == 4 || (images.length > +countFrom && +countFrom == 4);
    const firstItem = images[conditionalRender ? 1 : 2];
    const secondItem = images[conditionalRender ? 2 : 3];
    const thirdItem = images[conditionalRender ? 3 : 4];
    const firstItemRende = this.isIframe(firstItem)
      ? this.renderIframe(firstItem.url, firstItem.props)
      : this.renderOverlay(conditionalRender ? 1 : 2);
    const secondItemRende = this.isIframe(secondItem)
      ? this.renderIframe(secondItem.url, secondItem.props)
      : this.renderOverlay(conditionalRender ? 2 : 3);
    const thirdItemRende = this.isIframe(thirdItem)
      ? this.renderIframe(thirdItem.url, thirdItem.props)
      : overlay;

    return (
      <Grid>
        <Row>
          <Col
            xs={6}
            md={4}
            className="border height-three background"
            onClick={this.openModal.bind(this, conditionalRender ? 1 : 2)}
            style={{
              background: `url(${
                conditionalRender ? thumbnails[1] : thumbnails[2]
              })`
            }}
          >
            {firstItemRende}
            {this.renderOverlay()}
          </Col>
          <Col
            xs={6}
            md={4}
            className="border height-three background"
            onClick={this.openModal.bind(this, conditionalRender ? 2 : 3)}
            style={{
              background: `url(${
                conditionalRender ? thumbnails[2] : thumbnails[3]
              })`
            }}
          >
            {secondItemRende}
            {this.renderOverlay()}
          </Col>
          <Col
            xs={6}
            md={4}
            className="border height-three background"
            onClick={this.openModal.bind(this, conditionalRender ? 3 : 4)}
            style={{
              background: `url(${
                conditionalRender ? thumbnails[3] : thumbnails[4]
              })`
            }}
          >
            {overlay}
            {thirdItemRende}
          </Col>
        </Row>
      </Grid>
    );
  }

  renderOverlay(id) {
    const { hideOverlay, renderOverlay, overlayBackgroundColor } = this.props;

    if (hideOverlay) {
      return false;
    }

    return [
      <div
        key={`cover-${id}`}
        className="cover slide"
        style={{ backgroundColor: overlayBackgroundColor }}
      />,
      <div
        key={`cover-text-${id}`}
        className="cover-text slide animate-text"
        style={{ fontSize: "100%" }}
      >
        {renderOverlay()}
      </div>
    ];
  }

  renderCountOverlay(more) {
    const { images } = this.props;
    const { countFrom } = this.state;
    const extra = images.length - (countFrom && countFrom > 5 ? 5 : countFrom);

    return [
      more && <div key="count" className="cover" />,
      more && (
        <div
          key="count-sub"
          className="cover-text"
          style={{ fontSize: "200%" }}
        >
          <p>+{extra}</p>
        </div>
      )
    ];
  }

  render() {
    const { modal, index, countFrom, imageUrls, selectedImage } = this.state;
    const { images } = this.props;
    const imagesToShow = [...images];

    if (countFrom && images.length > countFrom) {
      imagesToShow.length = countFrom;
    }

    return (
      <div className="grid-container">
        {[1, 3, 4].includes(imagesToShow.length) && this.renderOne()}
        {imagesToShow.length >= 2 &&
          imagesToShow.length != 4 &&
          this.renderTwo()}
        {imagesToShow.length >= 4 && this.renderThree()}

        {modal && (
          <Modal
            onClose={this.onClose}
            index={index}
            images={imageUrls}
            allImages={this.props.images}
            selectedImage={selectedImage}
          />
        )}
      </div>
    );
  }
}

Images.propTypes = {
  images: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({ url: PropTypes.string.isRequired }))
  ]).isRequired,
  hideOverlay: PropTypes.bool,
  renderOverlay: PropTypes.func,
  overlayBackgroundColor: PropTypes.string,
  onClickEach: PropTypes.func,
  countFrom: PropTypes.number
};

export default Images;
