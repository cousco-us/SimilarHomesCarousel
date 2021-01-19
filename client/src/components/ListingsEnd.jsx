import React from 'react';

const ListingsEnd = (props) => {
  const { city } = props;
  return (
    <li>
      <div>
        <h2>See more homes for sale in</h2>
        <h1>{city}</h1>
      </div>
    </li>
  );
};

export default ListingsEnd;
