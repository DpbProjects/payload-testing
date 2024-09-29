import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Example Corp",
      quote: "This product has changed the way we do business. Highly recommended!",
    },
    {
      name: "Jane Smith",
      position: "Marketing Manager, Another Co.",
      quote: "An incredible experience! It has exceeded our expectations.",
    },
    {
      name: "Alice Johnson",
      position: "Freelancer",
      quote: "Fantastic service and support. I couldn't be happier!",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md text-center">
              <p className="text-lg italic mb-4">“{testimonial.quote}”</p>
              <h3 className="text-lg font-semibold">{testimonial.name}</h3>
              <p className="text-gray-600">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
