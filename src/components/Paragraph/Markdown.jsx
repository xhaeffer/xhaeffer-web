import MD from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import PropTypes from "prop-types";

const Markdown = ({ text }) => {
  return (
    <div className="prose prose-invert prose-headings:text-lg text-white/80 max-w-full">
      <MD remarkPlugins={[remarkGfm]} rehypePlugins={rehypeRaw}>
        {text}
      </MD>
    </div>
  );
};

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Markdown;
