import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DetailProduct = () => {
  const location = useLocation();
  const { title, _id, images, price, description, content, sold } = location.state.product;

  return (
    <div className='detail'>
      <img src={images.url} alt={title} />
      <div className='box-detail'>
        <div className='row'>
          <h2>{title}</h2>
          {/* <h6>{_id}</h6> */}
        </div>
        <span>${price}</span>
        <p>{description}</p>
        <p>{content}</p>
        <p>Sold: {sold}</p>
        <Link to='/cart' className='cart'>BUY NOW</Link>
      </div>
    </div>
  );
};

export default DetailProduct;