import Places from 'google-places-web';
import { prisma } from 'libs/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

const FIELDS = ['name', 'formatted_address', 'geometry', 'types'];

export default async function addPlaceHandlers(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const place_id = req.body.place_id;

  const place = await Places.details({
    placeid: place_id,
    fields: FIELDS.join(','),
  });

  console.log(
    `[api/places/search] adding place ${place.result.name} (${place_id})`
  );

  await prisma.place.create({
    data: {
      name: place.result.name,
      place_id,
      lat: place.result.geometry.location.lat,
      lng: place.result.geometry.location.lng,
      type: place.result.types[0],
      address: place.result.formatted_address,
    },
  });

  res.status(200).json({
    message: 'OK',
  });
}
