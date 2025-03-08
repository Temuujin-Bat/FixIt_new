import pool from "../../config/db";
import { TBarbershop } from '../../controllers/customer/type';

const getAllBarbershops = async () => {
  const query = `
      SELECT
          b.id AS barbershop_id,
          b.name AS barbershop_name,
          b.phone AS barbershop_phone,
          b.address,
          b.x_coordinates,
          b.y_coordinates,
          b.logo,
          b.facebook_link,
          b.instagram_link,
          b.createdAt,
          w.id AS worker_id,
          w.name AS worker_name,
          w.phone AS worker_phone,
          w.startTime AS worker_start_time,
          w.endTime AS worker_end_time,
          s.id AS service_id,
          s.name AS service_name,
          s.price AS service_price,
          s.duration AS service_duration,
          g.id AS gallery_id,
          g.image_url AS gallery_image_url,
          u.id AS unavailable_id,
          u.date AS unavailable_date,
          u.startTime AS unavailable_start_time,
          u.endTime AS unavailable_end_time,
          u.note AS unavailable_note,
          a.id AS appointment_id,
          a.customerName AS appointment_customer_name,
          a.phone AS appointment_customer_phone,
          a.date AS appointment_date,
          a.startTime AS appointment_start_time,
          a.endTime AS appointment_end_time,
          a.serviceId AS appointment_service_id,
          a.note AS appointment_note,
          r.id AS review_id,
          r.user_id AS review_user_id,
          r.userName AS review_user_name,
          r.rating AS review_rating,
          r.comment AS review_comment,
          r.createdAt AS review_created_at
      FROM barbershops b
               LEFT JOIN workers w ON b.id = w.barberShopId
               LEFT JOIN services s ON w.id = s.workerId
               LEFT JOIN gallery g ON b.id = g.barberShopId
               LEFT JOIN unavailable_times u ON w.id = u.workerId
               LEFT JOIN appointments a ON w.id = a.workerId
               LEFT JOIN reviews r ON b.id = r.barberShopId
      ORDER BY b.id, w.id, s.id;
  `;

  const result = await pool.query(query);

  const barbershopsMap = new Map();

  result.rows.forEach((row) => {
    if (!barbershopsMap.has(row.barbershop_id)) {
      barbershopsMap.set(row.barbershop_id, {
        id: row.barbershop_id,
        name: row.barbershop_name,
        location: {
          address: row.address,
          XCoordinates: row.x_coordinates.toString(),
          YCoordinates: row.y_coordinates.toString(),
        },
        phone: row.barbershop_phone,
        logo: row.logo,
        facebookLink: row.facebook_link,
        instagramLink: row.instagram_link,
        createdAt: row.createdat,
        workers: new Map(),
        gallery: new Map(),
        reviews: new Map(),
      });
    }

    const barbershop = barbershopsMap.get(row.barbershop_id);

    if (row.gallery_id && !barbershop.gallery.has(row.gallery_id)) {
      barbershop.gallery.set(row.gallery_id, {
        id: row.gallery_id,
        barberShopId: row.barbershop_id,
        image_url: row.gallery_image_url,
      });
    }

    if (row.review_id && !barbershop.reviews.has(row.review_id)) {
      barbershop.reviews.set(row.review_id, {
        id: row.review_id,
        userId: row.review_user_id,
        barberShopId: row.barbershop_id,
        userName: row.review_user_name,
        rating: row.review_rating,
        comment: row.review_comment,
        createdAt: row.review_created_at,
      });
    }

    if (row.worker_id) {
      if (!barbershop.workers.has(row.worker_id)) {
        barbershop.workers.set(row.worker_id, {
          id: row.worker_id,
          barberShopId: row.barbershop_id,
          name: row.worker_name,
          phone: row.worker_phone,
          startTime: row.worker_start_time,
          endTime: row.worker_end_time,
          services: new Map(),
          unavailable: new Map(),
          appointments: new Map(),
        });
      }

      const worker = barbershop.workers.get(row.worker_id);

      if (row.service_id && !worker.services.has(row.service_id)) {
        worker.services.set(row.service_id, {
          id: row.service_id,
          workerId: row.worker_id,
          name: row.service_name,
          price: row.service_price,
          duration: row.service_duration,
        });
      }

      if (row.unavailable_id && !worker.unavailable.has(row.unavailable_id)) {
        worker.unavailable.set(row.unavailable_id, {
          id: row.unavailable_id,
          workerId: row.worker_id,
          date: row.unavailable_date,
          startTime: row.unavailable_start_time,
          endTime: row.unavailable_end_time,
          note: row.unavailable_note,
        });
      }

      if (row.appointment_id && !worker.appointments.has(row.appointment_id)) {
        worker.appointments.set(row.appointment_id, {
          id: row.appointment_id,
          barberShopId: row.barbershop_id,
          workerId: row.worker_id,
          serviceId: row.appointment_service_id,
          customerName: row.appointment_customer_name,
          phone: row.appointment_customer_phone,
          date: row.appointment_date,
          startTime: row.appointment_start_time,
          endTime: row.appointment_end_time,
          note: row.appointment_note,
        });
      }
    }
  });

  return Array.from(barbershopsMap.values()).map((barbershop: TBarbershop) => ({
    ...barbershop,
    workers: Array.from(barbershop.workers.values()).map((worker) => ({
      ...worker,
      services: Array.from(worker.services.values()),
      unavailable: Array.from(worker.unavailable.values()),
      appointments: Array.from(worker.appointments.values()),
    })),
    gallery: Array.from(barbershop.gallery.values()),
    reviews: Array.from(barbershop.reviews.values()),
  }));
};

export { getAllBarbershops };
