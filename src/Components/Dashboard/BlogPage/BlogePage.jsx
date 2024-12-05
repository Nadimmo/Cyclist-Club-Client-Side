
// src/BlogPage.jsx
import React from 'react';

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-800">Rangpur Cyclist Group Blog</h1>
        <p className="mt-4 text-gray-600">Explore our features, insights, and tips for cycling enthusiasts.</p>
      </header>

      {/* Section 1: About Our Group */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">1. About Rangpur Cyclist Group</h2>
        <p className="text-gray-700">
          Rangpur Cyclist Group was founded in 2016 with the aim of bringing together people who love cycling and want to embrace a healthier, more active lifestyle. Our community includes cyclists of all ages, backgrounds, and skill levels.
        </p>
      </section>

      {/* Section 2: Weekly Rides */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">2. Weekly Rides</h2>
        <p className="text-gray-700">
          Our weekly rides are the heart of our group’s activities. Every Friday, we explore different routes and nearby cities, creating an adventurous experience for our members. These rides not only promote fitness but also offer a chance to enjoy the beauty of our surroundings and connect with like-minded individuals.
        </p>
      </section>

      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">3. Eco-Friendly Initiatives</h2>
        <p className="text-gray-700">
          As a cycling group, we take pride in promoting eco-friendly practices. Our rides and activities minimize environmental impact, and we encourage everyone to adopt sustainable habits. Regular clean-up rides help keep our trails and cities clean, reinforcing our commitment to the environment.
        </p>
      </section>

      {/* Section 3: Safety and Preparation Tips */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">4. Safety and Preparation Tips</h2>
        <p className="text-gray-700">
          Safety is a priority for all our rides. We recommend every member follow our safety guidelines, which include wearing helmets, carrying repair tools, and staying hydrated. Ensuring proper preparation before each ride helps create a safe environment for all cyclists.
        </p>
      </section>

      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">5. Health Benefits of Cycling</h2>
        <p className="text-gray-700">
          Cycling is one of the best ways to improve cardiovascular health, strengthen muscles, and boost overall well-being. Many of our members have witnessed significant improvements in their health and mental fitness through regular rides.
        </p>
      </section>

      {/* Section 4: Upcoming Events */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">6. Upcoming Events</h2>
        <p className="text-gray-700">
          Our calendar is filled with exciting events and gatherings. From fun rides to competitive races, our events are designed to engage all cycling enthusiasts. We also organize an annual celebration on our founding day to recognize the achievements and growth of our community.
        </p>
      </section>

      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">7. Riding Gear Essentials</h2>
        <p className="text-gray-700">
          Having the right gear can make a huge difference in the cycling experience. We recommend essentials like a sturdy helmet, gloves, water bottles, repair kits, and proper cycling shoes. Our blog regularly features gear recommendations and maintenance tips to keep your bike and gear in top shape.
        </p>
      </section>

      {/* Section 5: How to Join */}
      <section className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8 mb-8">
        <h2 className="text-2xl font-semibold text-teal-700 mb-4">8. How to Join the Group</h2>
        <p className="text-gray-700">
          Interested in joining us? We’re always welcoming new members to our group. Whether you’re a beginner or a seasoned cyclist, our community is open to all. Follow us on social media or reach out directly to learn more about upcoming rides, safety protocols, and how you can get involved.
        </p>
      </section>
    </div>
  );
};

export default BlogPage;
