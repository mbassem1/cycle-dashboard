import React from 'react';
import LightGallery from 'lightgallery/react';
import './styles.scss';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = () => {
  const onInit = () => {
    // eslint-disable-next-line no-console
    console.log('lightGallery has been initialized');
  };
  return (
    <LightGallery onInit={onInit} speed={500} plugins={[lgThumbnail, lgZoom]} mode="lg-fade">
      <a href="https://picsum.photos/280/190">
        <img alt="img1" src="https://picsum.photos/280/190" />
        <i className="las la-search-plus" />
      </a>
      <a href="https://picsum.photos/280/190">
        <img alt="img1" src="https://picsum.photos/280/190" />
        <i className="las la-search-plus" />
      </a>
      <a href="https://picsum.photos/280/190">
        <img alt="img1" src="https://picsum.photos/280/190" />
        <i className="las la-search-plus" />
      </a>
      <a href="https://picsum.photos/280/190">
        <img alt="img1" src="https://picsum.photos/280/190" />
        <i className="las la-search-plus" />
      </a>
      <a href="https://picsum.photos/280/190">
        <img alt="img1" src="https://picsum.photos/280/190" />
        <i className="las la-search-plus" />
      </a>
      <a href="https://picsum.photos/280/190">
        <img alt="img1" src="https://picsum.photos/280/190" />
        <i className="las la-search-plus" />
      </a>
      <a href="https://picsum.photos/280/190">
        <img alt="img1" src="https://picsum.photos/280/190" />
        <i className="las la-search-plus" />
      </a>
    </LightGallery>
  );
};

export default Gallery;
