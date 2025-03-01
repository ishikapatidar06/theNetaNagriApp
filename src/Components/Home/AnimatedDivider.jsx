import PropTypes from "prop-types";

export const AnimatedDivider = ({ className = "", color = "#ffaa40" }) => {
  return (
    <div className={`relative  w-full h-0.5 overflow-hidden ${className}`}>
      <div
        className="mx-auto h-full w-3/4 rounded-full"
        style={{ background: color }}
      />
    </div>
  );
};
AnimatedDivider.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.number,
};
