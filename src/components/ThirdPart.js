import React from 'react';
import image2 from '../assets/images/image2.jpg';

const ThirdPart = () => {
  return (
    <div className="container-fluid mt-5 position-relative">
      <div className="row">
        <div className="col-6">
          <div className="card text-dark bg-white m-3">
            <div className="card-body">
              <h5 className="card-title">Who we are</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis esse alias aliquam laudantium nisi!.</p>
              <p className="card-text mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis esse alias aliquam laudantium nisi!.</p>
              <button className="btn btn-info">Learn More</button>
            </div>
          </div>
        </div>
        <div className="col-6">
          <img src={image2} alt="Img2" className='img-fluid' width={3500}/>
        </div>
      </div>
    </div>
  );
}

export default ThirdPart;
