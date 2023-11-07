import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
        <div className="container mt-5">
            <div className="row">
              <div className="col-6">
                <h1>Techserve</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae accusantium, sunt beatae dicta iste voluptatum repellat similique expedita fuga facere! Cum eos dignissimos voluptates laudantium doloremque veritatis temporibus, voluptas est Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit.</p>
              </div>
              <div className="col-6">
              <div className="d-flex justify-content-around">
              <a href="/fb"><FaFacebook size={32}/></a>
              <a href="/in"><FaInstagram size={32}/></a>
              <a href="/ln"><FaLinkedin size={32}/></a>
            </div>
            <p className='text-center pt-5'>Copyright &copy; 2023</p>
              </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
