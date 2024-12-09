import React, { useState, useRef, useEffect } from 'react';
import './Testimonials.css';
import CustomScrollbar from '../about/CustomScrollbar'; // Adjust the path based on where you place the component

const AVTR1 = require('../../assets/avatar1.png');
const AVTR2 = require('../../assets/avatar2.jpg');
const AVTR3 = require('../../assets/avatar3.png');
const AVTR4 = require('../../assets/avatar4.png');

// Array of testimonial objects
interface Testimonial {
  avatar: string;
  name: string;
  review: string;
  company: string;
  phone: string;
}

const data: Testimonial[] = [
  {
    avatar: AVTR1,
    name: 'Lucie Porter',
    review: `I had the pleasure of working with Aaron during his 4-month internship, where he 
    played a key role in our ASP.NET MVC project with SQL. When progress stalled, Aaron took the lead, 
    advancing the project in unexpected ways. His technical skills, particularly in database-driven 
    websites, are excellent, but his leadership truly stood out. The team unanimously nominated him as leader, 
    and he excelled in coordinating tasks and keeping everyone motivated. Even after his internship, 
    Aaron remained involved, offering valuable support. His talent, skills, and commitment make him an asset to any team,
    and I highly recommend him.`,

    company: 'Interact Health PRO',
    phone: '+1 416 303 3788',
  },
  {
    avatar: AVTR2,
    name: 'Fiona Reaves',
    review: `Excellent Tutor. Aaron has worked exceptionally with our clients. 
    Aaron has been tutoring with us for many years and had helped our clients achieve success in their academic career. 
    Aaron is patient and creates his own lesson material`,
    company: 'Tutor Doctor',
    phone: '+1 403 640 2223',
  },
  {
    avatar: AVTR3,
    name: 'Joseph Koshy',
    review: `I am impressed by the websites that Aaron has created for my business. He truly understands how to combine 
    functionality with aesthetic appeal, delivering a site that not only looks fantastic but also meet business needs. 
    His attention to detail, technical expertise, and ability to implement feedback seamlessly made the entire process smooth 
    and enjoyable.`,
    company: 'JusMe',
    phone: '+1 587 889 6136',
  }
];

const Testimonials: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

  const openModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <div className="testimonial-container">
        {data.map((testimonial, index) => (
          <div
            className="testimonial"
            key={index}
            onClick={() => openModal(testimonial)}
          >
            <img src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} />
            <h3>{testimonial.name}</h3>
            <p className="review">"{testimonial.review.slice(0, 100)}..."</p>
            <p className="company">{testimonial.company}</p>
            <p className="phone">{testimonial.phone}</p>
          </div>
        ))}
      </div>

      {isModalOpen && selectedTestimonial && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <img src={selectedTestimonial.avatar} alt={`Avatar of ${selectedTestimonial.name}`} />
            <h3>{selectedTestimonial.name}</h3>
            <CustomScrollbar>
              <p className="review">{selectedTestimonial.review}</p>
              <p className="company">{selectedTestimonial.company}</p>
              <p className="phone">{selectedTestimonial.phone}</p>
            </CustomScrollbar>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
