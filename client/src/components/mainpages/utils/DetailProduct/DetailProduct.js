import React, { useContext } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { GlobalState } from '../../../../GlobalState';

const DetailProduct = () => {
  const location = useLocation();
  const { title, _id, images, price, description, content, sold } = location.state.product;
  const state = useContext(GlobalState);
  const addCart = state.userAPI.addCart;

  const handleAddToCart = () => {
    addCart(location.state.product);
  };

  const fakeReviews = [
    { id: 1, name: 'John Doe', review: 'Great product! Highly recommend it.', rating: 5 },
    { id: 2, name: 'Jane Smith', review: 'Good value for the price.', rating: 4 },
    { id: 3, name: 'Alice Johnson', review: 'Satisfied with the purchase.', rating: 4 },
  ];

  return (
    <div className='detail'>
      <img src={images.url} alt={title} className='product-image' />
      <div className='box-detail'>
        <div className='row'>
          <h2>{title}</h2>
          {/* <h6>{_id}</h6> */}
        </div>
        <span className='price'>${price}</span>
        <p className='description'>{description}</p>
        <p className='content'>{content}</p>
        <p className='sold'>Sold: {sold}</p>
        <Link to='/cart' className='cart' onClick={handleAddToCart}>BUY NOW</Link>
      </div>
      <div className='reviews'>
        <h3>Customer Reviews</h3>
        {fakeReviews.map(review => (
          <div key={review.id} className='review'>
            <h4>{review.name}</h4>
            <p>{review.review}</p>
            <p>Rating: {review.rating} / 5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailProduct;