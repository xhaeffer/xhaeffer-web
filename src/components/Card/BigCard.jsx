"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "flowbite-react";
import PropTypes from "prop-types";

const DEFAULT_IMG = "https://placehold.co/600x400";

const BigCard = ({
  img = DEFAULT_IMG,
  title = "Title",
  category = "Category",
  summary = "Summary",
}) => {
  const [validImg, setValidImg] = useState(img);

  useEffect(() => {
    const checkImage = async (url) => {
      try {
        const res = await fetch(url, { method: "HEAD" });
        if (!res.ok) throw new Error("Image not available");

        setValidImg(url);
      } catch {
        setValidImg(DEFAULT_IMG);
      }
    };

    if (img !== DEFAULT_IMG) {
      checkImage(img);
    }
  }, [img]);

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
      <Card
        className="flex flex-col min-h-[400px] max-h-[400px] overflow-hidden"
        renderImage={() => (
          <img className="w-full h-[180px]" src={validImg} alt={title} />
        )}
      >
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white line-clamp-2">
            {title}
          </h1>
          <h2 className="text-md font-medium text-gray-400">{category}</h2>
          <br />
          <p className="font-normal text-slate-400 line-clamp-3">{summary}</p>
        </div>
      </Card>
    </motion.div>
  );
};

BigCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  summary: PropTypes.string,
};

export default BigCard;
