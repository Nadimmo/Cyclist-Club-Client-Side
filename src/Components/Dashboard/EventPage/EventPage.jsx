
// src/EventPage.jsx
import React from 'react';
import EventCard from './EventCard';
import useEvents from '../../Hooks/useEvents';

const EventPage = () => {
  // Sample event data for demonstration purposes
  const {events} = useEvents()

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
