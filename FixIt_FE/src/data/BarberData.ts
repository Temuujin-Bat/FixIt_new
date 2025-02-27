import img from '../assets/check.png';

export const barbershops = [
  {
    id: 1,
    name: 'Classic Cuts Barbershop',
    location: 'Sukhbaatar, Ulaanbaatar',
    rating: 4.8,
    image: img,
    workers: [
      {
        id: 201,
        name: 'Tuvshin',
        specialty: 'Barber',
        services: [
          { id: 101, name: 'Үс засуулах', price: 35000, duration: 20 },
          { id: 102, name: 'Beard Trim', price: 15000, duration: 15 }
        ]
      },
      {
        id: 202,
        name: 'Baatar',
        specialty: 'Barber',
        services: [
          { id: 103, name: 'Үс засуулах', price: 15000, duration: 20 },
          { id: 102, name: 'Beard Trim', price: 15000, duration: 15 }
        ]
      },
    ],
  },
  {
    id: 2,
    name: 'Modern Man Barbers',
    location: 'Bayangol, Ulaanbaatar',
    rating: 4.5,
    image: img,
    workers: [
      {
        id: 203,
        name: 'Ganbaatar',
        specialty: 'Barber',
        services: [
          { id: 104, name: 'Men\'s Haircut', price: 18, duration: 20 },
          { id: 105, name: 'Haircut & Beard', price: 30, duration: 30 }
        ]
      },
      {
        id: 204,
        name: 'Erdene',
        specialty: 'Barber',
        services: [
          { id: 106, name: 'Long Hair Trim', price: 25, duration: 30 },
          { id: 105, name: 'Haircut & Beard', price: 30, duration: 30 }
        ]
      },
    ],
  },
  {
    id: 3,
    name: 'Royal Barber Lounge',
    location: 'Khan-Uul, Ulaanbaatar',
    rating: 4.9,
    image: img,
    workers: [
      {
        id: 205,
        name: 'Temuulen',
        specialty: 'Barber',
        services: [
          { id: 107, name: 'Men\'s Haircut', price: 22, duration: 20 },
          { id: 108, name: 'Beard Grooming', price: 18, duration: 20 }
        ]
      },
      {
        id: 206,
        name: 'Altan',
        specialty: 'Barber',
        services: [
          { id: 109, name: 'Hair Coloring', price: 40, duration: 45 },
          { id: 108, name: 'Beard Grooming', price: 18, duration: 20 }
        ]
      },
    ],
  },
];
