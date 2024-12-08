// Testimonials.tsx
import * as React from 'react';
import './Testimonials.css';

const AVTR1 = require('../../assets/avatar1.png');
const AVTR2 = require('../../assets/avatar2.png');
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
    review: 'I had the pleasure of working with Aaron during his 4-month internship...',
    company: 'ABC Corp',
    phone: '+1 234 567 890',
  },
  {
    avatar: AVTR2,
    name: 'Fiona Reaves',
    review: 'Excellent Tutor. Aaron has worked exceptionally with our clients...',
    company: 'Tutor Doctor',
    phone: '+1 345 678 901',
  },
  {
    avatar: AVTR3,
    name: 'Sara Smith',
    review: 'A great professional, really knows her stuff. Thanks for the wonderful insights...',
    company: 'LMN Ltd',
    phone: '+1 456 789 012',
  },
  {
    avatar: AVTR4,
    name: 'David Lee',
    review: 'I learned a lot and the support was amazing. Will definitely return...',
    company: 'Tech Solutions',
    phone: '+1 567 890 123',
  },
];

const Testimonials: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = React.useState<Testimonial | null>(null);

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
            <p className="review">{selectedTestimonial.review}</p>
            <p className="company">{selectedTestimonial.company}</p>
            <p className="phone">{selectedTestimonial.phone}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
