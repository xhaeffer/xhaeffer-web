"use client";

import { motion } from "framer-motion";
import { Card } from "flowbite-react";
import PropTypes from "prop-types";

const BigCard = ({
  img = "https://placehold.co/600x400",
  title = "Title",
  category = "Category",
  body = "Body",
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
      <Card
        className="bg-transparent flex flex-col min-h-[350px] max-h-[350px]"
        imgAlt={title}
        imgSrc={img}
      >
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white line-clamp-2">
            {title}
          </h1>
          <h2 className="text-md font-medium text-gray-400">{category}</h2>
          <br />
          <p className="font-normal text-slate-400 line-clamp-3">{body}</p>
        </div>
      </Card>
    </motion.div>
  );
};

BigCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  body: PropTypes.string,
};

export default BigCard;
