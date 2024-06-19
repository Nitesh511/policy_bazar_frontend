import React, { useState } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sonia Khanna',
      quote: 'Got good deal without agent calling or speaking to anyone!!'
    },
    {
      name: 'Neha Jain',
      quote: 'You are doing a great job. Proud to be a customer of Policybazaar.'
    },
    {
      name: 'Parag Lele',
      quote: 'The services provided by Policybazaar are extremely helpful in making the right choice. Overall I had a good experience with Policybazaar.'
    }
  ];

  const showTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px'
      }}
    >
      <h1
        style={{
          color: '#333',
          fontSize: '2.5rem',
          marginBottom: '20px',
          textAlign: 'center'
        }}
      >
        What Our Customers Are Saying
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginBottom: '20px'
        }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              flex: '1 0 200px',
              minHeight: '150px',
              position: 'relative',
              cursor: 'pointer',
              opacity: currentTestimonial === index ? 1 : 0.5,
              transition: 'opacity 0.3s ease'
            }}
            onClick={() => showTestimonial(index)}
          >
            <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>{testimonial.name}</div>
            <div style={{ fontStyle: 'italic', lineHeight: '1.6' }}>{testimonial.quote}</div>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '20px'
        }}
      >
        {Array.from({ length: testimonials.length }, (_, i) => (
          <div
            key={i}
            style={{
              backgroundColor: '#ccc',
              borderRadius: '50%',
              width: '10px',
              height: '10px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
              opacity: currentTestimonial === i ? 1 : 0.5,
              pointerEvents: currentTestimonial === i ? 'none' : 'auto'
            }}
            onClick={() => showTestimonial(i)}
          />
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px'
        }}
      >
        <button
          style={{backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '20px' }}
          onClick={previousTestimonial}
        >
          &larr;
        </button>
        <button
          style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer', fontSize: '20px' }}
          onClick={nextTestimonial}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;