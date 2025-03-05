import PropTypes from "prop-types";

import ContainerBox from "../../../components/Card/ContainerBox";

const Gallery = ({ gallery }) => {
  return (
    <ContainerBox data-aos="fade-up">
      <p className="text-white mb-2">Gallery:</p>
      <div className="flex flex-wrap gap-2 mx-auto">
        {gallery.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project Gallery #${index + 1}`}
            className="w-24 h-24 object-cover rounded-lg mr-2"
          />
        ))}
      </div>
    </ContainerBox>
  );
};

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Gallery;
