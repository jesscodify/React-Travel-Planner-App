import React from 'react';
import Place from './Place';

function TravelPlanner() {
  // Define the destinations
  const destinations = [
    {
      name: 'Paris',
      description: 'Paris, France. It is hardly a surprise to see Paris on the list – it is after all a WOW reader fave!!! The city of love has so much to offer all travellers',
      image: "https://source.unsplash.com/1600x1000/?paris",
      rating: 4.5, // You can use any criteria for rating
    },
    {
      name: 'Dubai',
      description: 'Dubai, UAE. If you are looking for where to go on a vacation in February, then Dubai is one of the best places due to the balmy weather',
      image: "https://source.unsplash.com/1600x1000/?dubai",
      rating: 4.2,
    },
    {
      name: 'Greece',
      description: 'Greece is one of the best places to travel in the World. It is a home of 6,000 islands (only 227 islands are inhabited), world-famous historical sites, ..',
      image: "https://source.unsplash.com/1600x1000/?greece",
      rating: 4.7,
    },
    {
      name: 'London',
      description: 'London is world-famous for its blissful summer weather, strict British guards that stand outside the revered Buckingham Palace',
      image: "https://source.unsplash.com/1600x1000/?london",
      rating: 4.9,
    },
  ];

  // Determine the best destination based on your criteria
  const bestDestination = destinations.reduce((best, current) =>
    current.rating > best.rating ? current : best
  );

  return (
    <div className="travel-planner">
      <h1>Travel Planner</h1>
      <div className="destination-list">
        {destinations.map((destination, index) => (
          <Place
            key={index}
            name={destination.name}
            description={destination.description}
            image={destination.image}
          />
        ))}
      </div>
      <h2>Best Destination:</h2>
      <Place
        name={bestDestination.name}
        description={bestDestination.description}
        image={bestDestination.image}
      />
    </div>
  );
}

export default TravelPlanner;
