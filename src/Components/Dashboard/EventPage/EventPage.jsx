<<<<<<< HEAD
// src/EventPage.jsx
import React from 'react';
import EventCard from './EventCard';

const EventPage = () => {
  // Sample event data for demonstration purposes
  const events = [
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'City Ride to Dinajpur',
      description: 'Join us for a scenic ride from Rangpur to Dinajpur.',
      location: 'Starting Point: Rangpur Central Park',
      date: 'November 10, 2024',
      time: '7:00 AM',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Charity Ride for Education',
      description: 'A fundraising ride to support local schools.',
      location: 'Starting Point: Rangpur University',
      date: 'November 17, 2024',
      time: '8:00 AM',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Sunset Beach Ride',
      description: 'A relaxed ride to enjoy the sunset by the beach.',
      location: 'Starting Point: Rangpur Beach Road',
      date: 'November 24, 2024',
      time: '5:30 PM',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'City Ride to Dinajpur',
      description: 'Join us for a scenic ride from Rangpur to Dinajpur.',
      location: 'Starting Point: Rangpur Central Park',
      date: 'November 10, 2024',
      time: '7:00 AM',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Charity Ride for Education',
      description: 'A fundraising ride to support local schools.',
      location: 'Starting Point: Rangpur University',
      date: 'November 17, 2024',
      time: '8:00 AM',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Sunset Beach Ride',
      description: 'A relaxed ride to enjoy the sunset by the beach.',
      location: 'Starting Point: Rangpur Beach Road',
      date: 'November 24, 2024',
      time: '5:30 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-800">Upcoming Events</h1>
        <p className="mt-4 text-gray-600">
          Check out our latest events and mark your interest to join the fun!
        </p>
      </header>

      {/* Event Cards Grid */}
      <section className="max-w-8xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            description={event.description}
            location={event.location}
            date={event.date}
            time={event.time}
          />
        ))}
      </section>
    </div>
  );
};

export default EventPage;
=======
// src/EventPage.jsx
import React from 'react';
import EventCard from './EventCard';

const EventPage = () => {
  // Sample event data for demonstration purposes
  const events = [
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'City Ride to Dinajpur',
      description: 'Join us for a scenic ride from Rangpur to Dinajpur.',
      location: 'Starting Point: Rangpur Central Park',
      date: 'November 10, 2024',
      time: '7:00 AM',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Charity Ride for Education',
      description: 'A fundraising ride to support local schools.',
      location: 'Starting Point: Rangpur University',
      date: 'November 17, 2024',
      time: '8:00 AM',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Sunset Beach Ride',
      description: 'A relaxed ride to enjoy the sunset by the beach.',
      location: 'Starting Point: Rangpur Beach Road',
      date: 'November 24, 2024',
      time: '5:30 PM',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'City Ride to Dinajpur',
      description: 'Join us for a scenic ride from Rangpur to Dinajpur.',
      location: 'Starting Point: Rangpur Central Park',
      date: 'November 10, 2024',
      time: '7:00 AM',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Charity Ride for Education',
      description: 'A fundraising ride to support local schools.',
      location: 'Starting Point: Rangpur University',
      date: 'November 17, 2024',
      time: '8:00 AM',
    },
    {
      image: 'https://via.placeholder.com/400x200',
      title: 'Sunset Beach Ride',
      description: 'A relaxed ride to enjoy the sunset by the beach.',
      location: 'Starting Point: Rangpur Beach Road',
      date: 'November 24, 2024',
      time: '5:30 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-teal-800">Upcoming Events</h1>
        <p className="mt-4 text-gray-600">
          Check out our latest events and mark your interest to join the fun!
        </p>
      </header>

      {/* Event Cards Grid */}
      <section className="max-w-8xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => (
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            description={event.description}
            location={event.location}
            date={event.date}
            time={event.time}
          />
        ))}
      </section>
    </div>
  );
};

export default EventPage;
>>>>>>> 6d2a2ddcf10cf48201a02a1d4e1789f924c86fec
