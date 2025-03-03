import PropTypes from "prop-types"

const Caption = ({ text }) => {
  return (
    <p className="font-light text-center text-gray-400">
      {text}
    </p>
  )
}

Caption.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Caption
