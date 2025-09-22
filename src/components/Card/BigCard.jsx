import { motion } from "framer-motion";
import { Card } from "flowbite-react";
import PropTypes from "prop-types";

const DEFAULT_IMG = "https://placehold.co/600x400";

const BigCard = ({
  img = DEFAULT_IMG,
  title = "Title",
  type = "Type",
  category = "Category",
  summary = "Summary",
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
      <Card
        className="dark:bg-[#31363F] mx-auto flex flex-col max-w-[20rem] h-[25rem] overflow-hidden"
        renderImage={() => (
          <div className="relative">
            <img
              className="w-full h-[11rem]"
              onError={(e) => (e.currentTarget.src = DEFAULT_IMG)}
              src={img}
              alt={title}
            />
            <div className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
              {category}
            </div>
          </div>
        )}
      >
        <div className="flex flex-col flex-grow overflow-hidden">
          <h1 className="text-2xl font-semibold tracking-tight text-white line-clamp-2">
            {title}
          </h1>
          <h2 className="font-medium text-gray-400">{type}</h2>
          <br />
          <p className="font-normal text-slate-400 mt-2 max-[350px]:line-clamp-1 line-clamp-3">
            {summary}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

BigCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  category: PropTypes.string,
  summary: PropTypes.string,
};

export default BigCard;
