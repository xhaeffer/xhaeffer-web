import { useState } from "react";
import { Gallery as PhotoSwipe, Item } from "react-photoswipe-gallery";
import PropTypes from "prop-types";

import ContainerBox from "../../../components/Card/ContainerBox";
import Markdown from "../../../components/Paragraph/Markdown";

const Overview = ({ img, alt, description }) => {
  const [imageSrc, setImageSrc] = useState(img);
  const [imageSize, setImageSize] = useState({});

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setImageSize({ width: naturalWidth, height: naturalHeight });
  };

  const handleImageError = () => {
    setImageSrc("https://placehold.co/600x400");
    setImageSize({ width: 600, height: 400 });
  };

  return (
    <ContainerBox data-aos="fade-up">
      <PhotoSwipe>
        <Item
          original={imageSrc}
          thumbnail={imageSrc}
          width={imageSize.width}
          height={imageSize.height}
        >
          {({ ref, open }) => (
            <img
              ref={ref}
              onClick={open}
              onLoad={handleImageLoad}
              onError={handleImageError}
              src={imageSrc}
              alt={alt}
              className="mb-8 object-cover rounded-lg cursor-pointer"
            />
          )}
        </Item>
      </PhotoSwipe>
      <p className="text-white mb-2">Description:</p>
      <Markdown text={description} />
    </ContainerBox>
  );
};

Overview.propTypes = {
  img: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Overview;
