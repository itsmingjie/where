import { Place } from '@prisma/client';
import { Button } from 'features/design-system/components';
import { PlaceCard } from 'features/place/components/place-card/place-card';
import { prisma } from 'libs/prisma';
import { GetStaticProps } from 'next';
import Link from 'next/link';

interface IndexPageProps {
  places: Place[];
}

const IndexPage = ({ places }: IndexPageProps): JSX.Element => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>Place</h1>
        <Link href='/add'>
          <Button>+ Add</Button>
        </Link>
      </div>

      <div className='grid gap-4 grid-cols-fill-3'>
        {places.map((place: Place) => (
          <Link
            href={`https://www.google.com/maps/place/?q=place_id:${place.place_id}`}
            key={place.place_id}
          >
            <a className='cursor-pointer' target='_blank'>
              <PlaceCard place={place} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const places = await prisma.place.findMany();

  return {
    props: { places },
  };
};

export default IndexPage;
