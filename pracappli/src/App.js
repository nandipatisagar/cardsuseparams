import React from 'react';
import Card from './card';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import image4 from './assets/image4.jpg';

function App() {
  const image = [
    {
      name: "Card 1",
      description: "This is card 1 description",
      Image: image1
    },
    {
      name: "Card 2",
      description: "This is card 2 description",
      Image: image2
    },
    {
      name: "Card 3",
      description: "This is card 3 description",
      Image: image3
    },
    {
      name: "Card 4",
      description: "This is card 4 description",
      Image: image4
    },
  ];

  return (
    <div className="bg-black text-purple-300 min-h-screen">
      <h1 className="text-3xl text-center py-10">All the cards are here.</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {image.map((card, index) => (
          <Card key={index} Image={card.Image} name={card.name} description={card.description} />
        ))}
      </div>
    </div>
  );
}

export default App;
