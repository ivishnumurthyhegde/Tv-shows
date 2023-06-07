import React from 'react';

const StarRating = ({ rating }) => {
  const filledStars = Math.round(rating); // Rounded to the nearest whole number

  const starStyle = {
    display: 'inline-block',
    color: '#FFD700', // Color for filled stars
    marginRight: '2px', // Adjust as needed
  };

  const emptyStarStyle = {
    ...starStyle,
    color: '#C0C0C0', // Color for empty stars
  };

  const stars = [];
  for (let i = 1; i <= 10; i++) {
    if (i <= filledStars) {
      stars.push(<span key={i} style={starStyle}>★</span>);
    } else {
      stars.push(<span key={i} style={emptyStarStyle}>★</span>);
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
