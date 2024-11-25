import React from 'react';
import TurfCard from '../components/TurfCard';

function Home() {
  const turfs = [
    {
      id: 1,
      name: 'Turf 1',
      location: 'Downtown',
      price: 50,
      image: 'https://storage.googleapis.com/a1aa/image/4F1FXbbO0HbyB1fudXawsSAmwTQWY0bUVih1AC3RuZsCSO6JA.jpg',
    },
    {
      id: 2,
      name: 'Turf 2',
      location: 'Uptown',
      price: 60,
      image: 'https://storage.googleapis.com/a1aa/image/4F1FXbbO0HbyB1fudXawsSAmwTQWY0bUVih1AC3RuZsCSO6JA.jpg',
    },
    {
      id: 3,
      name: 'Turf 3',
      location: 'Suburbs',
      price: 40,
      image: 'https://storage.googleapis.com/a1aa/image/4F1FXbbO0HbyB1fudXawsSAmwTQWY0bUVih1AC3RuZsCSO6JA.jpg',
    },
  ];

  return (
    <div className="container">
      <h1>Available Turfs</h1>
      {turfs.map((turf) => (
        <TurfCard key={turf.id} turf={turf} />
      ))}
    </div>
  );
}

export default Home;
