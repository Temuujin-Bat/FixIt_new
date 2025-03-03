import img from '../assets/check.png';

export const barbershops = [
  {
    id: 101,
    logo: img,
    name: 'Classic Cuts Barbershop',
    location: {
      address: 'Sukhbaatar, Ulaanbaatar',
      XCoordinates: '47.91833514211403',
      YCoordinates: '106.92797514483611',
    },
    phone: '111111111',
    image: img,
    gallery: [
      { id: 1, barberShopId: 101, image_url: img },
      { id: 2, barberShopId: 101, image_url: img },
      { id: 3, barberShopId: 101, image_url: img },
      { id: 4, barberShopId: 101, image_url: img },
    ],
    facebookLink: 'https://www.facebook.com/',
    instagramLink: 'https://www.instagram.com',
    workers: [
      {
        id: 201,
        barberShopId: 101,
        phone: '99999999',
        name: 'Tuvshin',
        startTime: '09:00',
        endTime: '20:00',
        services: [
          {
            id: 1,
            workerId: 201,
            name: 'Үс засуулах',
            price: 35000,
            duration: 20,
          },
          {
            id: 2,
            workerId: 201,
            name: 'Үс засуулах + Сахал засуулах',
            price: 40000,
            duration: 20,
          },
        ],
        unavailable: [
          {
            id: 1,
            workerId: 201,
            date: '2025-03-01',
            start: '14:00',
            end: '15:00',
            note: 'Personal time'
          },
          {
            id: 2,
            workerId: 201,
            date: '2025-03-02',
            start: '00:00',
            end: '23:59',
            note: 'Day off'
          },
        ],
        appointments: [
          {
            id: 1,
            barberShopId: 101,
            workerId: 201,
            serviceId: 1,
            customerName: 'Bataa',
            phone: '99221122',
            date: '2025-03-01',
            startTime: '10:30',
            endTime: '10:50',
            note: 'I need a quick trim.',
          },
        ]
      },
    ],
    reviews: [
      {
        id: 1,
        userId: 1,
        barberShopId: 101,
        userName: 'Temuujin',
        rating: 4,
        comment: 'sabf basbf jsabf j',
        createdAt: '2025-03-02',
      }
    ]
  },
];
