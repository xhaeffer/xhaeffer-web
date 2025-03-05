import { useState } from "react";
import { Gallery as PhotoSwipe, Item } from "react-photoswipe-gallery";
import PropTypes from "prop-types";

import ContainerBox from "../../../components/Card/ContainerBox";

const Gallery = ({ gallery }) => {
  const [imageSizes, setImageSizes] = useState({});
  const [imageSources, setImageSources] = useState(gallery);

  const handleImageLoad = (index, e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setImageSizes((prev) => ({
      ...prev,
      [index]: { width: naturalWidth, height: naturalHeight },
    }));
  };

  const handleImageError = (index) => {
    setImageSources((prev) =>
      prev.map((src, i) =>
        i === index ? "https://placehold.co/600x400" : src,
      ),
    );

    setImageSizes((prev) => ({
      ...prev,
      [index]: { width: 600, height: 400 },
    }));
  };

  return (
    <ContainerBox data-aos="fade-up">
      <p className="text-white mb-2">Gallery:</p>
      <PhotoSwipe>
        <div className="flex flex-wrap gap-2 mx-auto">
          {imageSources.map((image, index) => (
            <Item
              key={index}
              original={image}
              thumbnail={image}
              width={imageSizes[index]?.width || undefined}
              height={imageSizes[index]?.height || undefined}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  onLoad={(e) => handleImageLoad(index, e)}
                  onError={() => handleImageError(index)}
                  src={image}
                  alt={`Project Gallery #${index + 1}`}
                  className="w-24 h-24 object-cover rounded-lg cursor-pointer"
                />
              )}
            </Item>
          ))}
        </div>
      </PhotoSwipe>
      {/* <div className="flex flex-wrap gap-2 mx-auto">
        {gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project Gallery #${index + 1}`}
            className="w-24 h-24 object-cover rounded-lg mr-2"
          />
        ))}
      </div> */}
    </ContainerBox>
  );
};

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
