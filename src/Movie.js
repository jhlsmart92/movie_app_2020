// import React from "React";
// import PropTypes from "prop-types";

// function Movie({id, year, title, summary, poster}) {
//     return  < h4 > {title}< /h4>;
// }
   
//     Movie.PropTypes = {
//         id: PropTypes.number.isRequired,
//         year: PropTypes.number.isRequired,
//         title: PropTypes.string.isRequired,
//         summary: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired
//     };

// export default Movie;

import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return <h4>{title}</h4>;
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};
export default Movie;