import pool from "../../config/db";
import { TBarbershops } from "./type";

export const getAllBarbershops = async (): Promise<TBarbershops[]> => {
  try {
    const query = `
        SELECT
            b.id AS id,
            b.name AS name,
            b.phone AS phone,
            JSONB_BUILD_OBJECT(
                    'address', b.address,
                    'XCoordinates', b.x_coordinates,
                    'YCoordinates', b.y_coordinates
            ) AS location,
            b.logo,
            b.facebook_link AS "facebookLink",
            b.instagram_link AS "instagramLink",

            -- ✅ Gallery (JSONB)
            COALESCE(
                            JSONB_AGG(
                            DISTINCT JSONB_BUILD_OBJECT(
                                    'id', g.id,
                                    'barbershopId', g.barbershop_id,
                                    'image_url', g.image_url
                                     )
                                     ) FILTER (WHERE g.id IS NOT NULL), '[]'::jsonb
            ) AS gallery,

            -- ✅ Workers (JSONB)
            COALESCE(
                            JSONB_AGG(
                            DISTINCT JSONB_BUILD_OBJECT(
                                    'id', w.id,
                                    'barbershopId', w.barbershop_id,
                                    'name', w.name,
                                    'phone', w.phone,
                                    'startTime', w.start_time,
                                    'endTime', w.end_time,

                                -- ✅ Services per Worker (LEFT JOIN LATERAL for Performance)
                                    'services', COALESCE(
                                            (SELECT JSONB_AGG(
                                                            DISTINCT JSONB_BUILD_OBJECT(
                                                            'id', s.id,
                                                            'workerId', s.worker_id,
                                                            'name', s.name,
                                                            'price', s.price,
                                                            'duration', s.duration
                                                                     )
                                                    ) FROM services s WHERE s.worker_id = w.id), '[]'::jsonb
                                                ),

                                -- ✅ Unavailable Slots per Worker
                                    'unavailable', COALESCE(
                                            (SELECT JSONB_AGG(
                                                            DISTINCT JSONB_BUILD_OBJECT(
                                                            'id', u.id,
                                                            'workerId', u.worker_id,
                                                            'date', u.date,
                                                            'start', u.start_time,
                                                            'end', u.end_time,
                                                            'note', u.note
                                                                     )
                                                    ) FROM unavailable_times u WHERE u.worker_id = w.id), '[]'::jsonb
                                                   ),

                                -- ✅ Appointments per Worker
                                    'appointments', COALESCE(
                                            (SELECT JSONB_AGG(
                                                            DISTINCT JSONB_BUILD_OBJECT(
                                                            'id', a.id,
                                                            'workerId', a.worker_id,
                                                            'serviceId', a.service_id,
                                                            'userId', a.user_id,
                                                            'date', a.date,
                                                            'startTime', a.start_time,
                                                            'endTime', a.end_time,
                                                            'note', a.note
                                                                     )
                                                    ) FROM appointments a WHERE a.worker_id = w.id), '[]'::jsonb
                                                    )
                                     )
                                     ) FILTER (WHERE w.id IS NOT NULL), '[]'::jsonb
            ) AS workers,

            -- ✅ Reviews (JSONB)
            COALESCE(
                            JSONB_AGG(
                            DISTINCT JSONB_BUILD_OBJECT(
                                    'id', r.id,
                                    'userId', r.user_id,
                                    'userName', COALESCE(u.name, 'Anonymous'),
                                    'barberShopId', r.barbershop_id,
                                    'rating', r.rating,
                                    'comment', r.comment,
                                    'createdAt', r.created_at
                                     )
                                     ) FILTER (WHERE r.id IS NOT NULL), '[]'::jsonb
            ) AS reviews

        FROM barbershops b
                 LEFT JOIN barbershop_images g ON g.barbershop_id = b.id
                 LEFT JOIN workers w ON w.barbershop_id = b.id
                 LEFT JOIN reviews r ON r.barbershop_id = b.id
                 LEFT JOIN users u ON r.user_id = u.id 
        GROUP BY b.id
        ORDER BY b.id;
    `;

    const { rows } = await pool.query(query);
    return rows;
  } catch (error) {
    console.error("Error fetching barbershops:", error);
    throw new Error("Database query failed");
  }
};
