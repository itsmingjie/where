import { Place } from '@prisma/client';

interface PlaceCardProps {
  place: Place;
}

export const PlaceCard = ({ place }: PlaceCardProps): JSX.Element => {
  return (
    <div className='flex flex-col w-full gap-4 p-4 bg-gray-800 border rounded border-accent-300/50'>
      <div className='flex flex-col gap-2'>
        <div>
          <h1 className='text-lg font-bold'>{place.name}</h1>
          <p className='text-gray-400'>{place.address}</p>
        </div>
      </div>
    </div>
  );
};
