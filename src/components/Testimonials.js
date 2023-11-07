import React from 'react';

const Testimonials = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card text-center">
            <img src="url_de_l_image_1" className="card-img-top" alt="Img1" />
            <div className="card-body">
              <h5 className="card-title">Kelly Rilley</h5>
              <h6 className="card-subtitle mb-2 text-muted">Reddy</h6>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, itaque voluptatum. Iusto autem a assumenda consectetur commodi. Tempore eveniet dolore dolorum, dolores et numquam facilis, ipsum autem, animi ad totam.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center">
            <img src="url_de_l_image_2" className="card-img-top" alt="Img2" />
            <div className="card-body">
              <h5 className="card-title">Oliver Robinson</h5>
              <h6 className="card-subtitle mb-2 text-muted">Yougroup</h6>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, itaque voluptatum. Iusto autem a assumenda consectetur commodi. Tempore eveniet dolore dolorum, dolores et numquam facilis, ipsum autem, animi ad totam.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center">
            <img src="url_de_l_image_3" className="card-img-top" alt="Img3" />
            <div className="card-body">
              <h5 className="card-title">Nicole Brown</h5>
              <h6 className="card-subtitle mb-2 text-muted">Good Box</h6>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, itaque voluptatum. Iusto autem a assumenda consectetur commodi. Tempore eveniet dolore dolorum, dolores et numquam facilis, ipsum autem, animi ad totam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
