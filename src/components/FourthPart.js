import React from 'react';
import image1 from '../assets/images/image1.png';

const FourthPart = () => {
  return (
    <div className="container-fluid mt-5 position-relative">
      <div className="row">
        <div className="col-6 p-0">
          <img src={image1} alt="Img" className="img-fluid" width={700} />
        </div>
        <div className="card text-dark bg-white m-3 position-absolute" style={{ width: '35%', top: '50%', left: '53%', transform: 'translate(-30%, -50%)' }}>
          <div className="card-body">
            <h5 className="card-title">Who we are</h5>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis esse alias aliquam laudantium nisi!.</p>
            <p className="card-text mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui corporis esse alias aliquam laudantium nisi!.</p>
          </div>
          <div style={{ position: 'absolute', top: '165px', left:'60%', width: '100%' }}>
            <button className="btn btn-info">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FourthPart;
