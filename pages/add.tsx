import useAxios from 'axios-hooks';
import { Button, Input } from 'features/design-system/components';
import { PlaceSearchCard } from 'features/search/components';
import { GooglePlaceSearchResult } from 'google-places-web';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useGeolocation } from 'rooks';

const AddPage = (): JSX.Element => {
  const { register, handleSubmit } = useForm();
  const geoData = useGeolocation();
  const [geo, setGeo] = useState<{
    lat: number;
    lng: number;
  }>();
  const [places, setPlaces] = useState<GooglePlaceSearchResult[]>([]);

  const [
    { data: placesData, loading: placesLoading, error: placesError },
    execute,
  ] = useAxios(
    {
      url: '/api/places/search',
      method: 'GET',
    },
    {
      manual: true,
    }
  );

  useEffect(() => {
    if (geoData?.lat && geoData?.lng) {
      setGeo({
        lat: geoData.lat,
        lng: geoData.lng,
      });
    }
  }, [execute, geoData]);

  useEffect(() => {
    if (placesError) {
      setPlaces([]);
    } else if (placesData) {
      console.log(placesData);
      setPlaces(placesData.places);
    }
  }, [placesData, placesError]);

  const onSubmit = async (data: FieldValues): Promise<void> => {
    await execute({
      params: { keyword: data.keyword, lat: geo?.lat, lng: geo?.lng },
    });
  };

  return (
    <div className='flex flex-col gap-4'>
      <Head>
        <title>Add Place</title>
      </Head>
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Add Place</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex gap-2'>
            <div className='flex-grow'>
              <Input
                type='text'
                placeholder='Search for keyword'
                {...register('keyword', { required: true })}
              />
            </div>

            <Button type='submit' onClick={handleSubmit(onSubmit)}>
              Submit
            </Button>
          </div>
        </form>
      </div>

      {placesLoading ? (
        <p>Loading...</p>
      ) : (
        <div className='grid gap-4 grid-cols-fill-3'>
          {places.map((place: GooglePlaceSearchResult) => (
            <PlaceSearchCard place={place} key={place.place_id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AddPage;
