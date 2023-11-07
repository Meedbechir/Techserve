import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

const Services = () => {
  const services1 = [
    {
      icon: <FaDollarSign />,
      title: 'Corporate Finance',
      description: 'Ceci est une description pour les elements cités, juste du texte fictif.',
    },
    {
      icon: <FaDollarSign />,
      title: 'Operation Management',
      description: 'Ceci est une description pour les elements cités, juste du texte fictif.',
    },
    {
      icon: <FaDollarSign />,
      title: 'Risk Management',
      description: 'Ceci est une description pour les elements cités, juste du texte fictif.',
    },
  ];

  const services2 = [
    {
      icon: <FaDollarSign />,
      title: 'Information Management',
      description: 'Ceci est une description pour les elements cités, juste du texte fictif.',
    },
    {
      icon: <FaDollarSign />,
      title: 'Strategy and Optimisation',
      description: 'Ceci est une description pour les elements cités, juste du texte fictif.',
    },
    {
      icon: <FaDollarSign />,
      title: 'Technologies and Innovations',
      description: 'Ceci est une description pour les elements cités, juste du texte fictif.',
    },
  ];

  return (
    <div className='container mt-5'>
      <h3 className='text-center'>Our Services</h3>
      <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      <div className='row mt-5'>
        <div className='col-6 text-center'>
          {services1.map((service, index) => (
            <div className='service-item' key={index}>
              {service.icon}
              <h4 className='text-start'>{service.title}</h4>
              <p className='text-start'>{service.description}</p>
            </div>
          ))}
        </div>
        <div className='col-6 text-center'>
          {services2.map((service, index) => (
            <div className='service-item' key={index}>
              {service.icon}
              <h4 className='text-start'>{service.title}</h4>
              <p className='text-start'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
