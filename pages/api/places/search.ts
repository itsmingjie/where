import type { GooglePlaceSearchResult } from 'google-places-web';
import { Places } from 'libs/google-apis';
import type { NextApiRequest, NextApiResponse } from 'next';

interface ResultProps {
  places: GooglePlaceSearchResult[];
}

export default async function searchHandler(
  req: NextApiRequest,
  res: NextApiResponse<ResultProps>
): Promise<void> {
  const { keyword, lat, lng } = req.query;

  console.log(
    `[api/places/search] executing places search for ${keyword} at ${lat},${lng}`
  );

  const p = await Places.nearbysearch({
    location: `${lat},${lng}`,
    rankby: 'distance',
    keyword: keyword as string,
  });

  res.status(200).json({
    places: p.results,
  });
}
