import { Button } from 'features/design-system/components';
import { addPlace } from 'features/search/api/add-place';
import { tagTransform } from 'features/search/utils/tags';
import { PlacesSearchResult } from 'google-places-web';
import toast from 'react-hot-toast';

interface PlaceSearchCardProps {
  place: PlacesSearchResult;
}

export const PlaceSearchCard = ({
  place,
}: PlaceSearchCardProps): JSX.Element => {
  const handleAdd = async (): Promise<void> => {
    await toast.promise(addPlace(place.place_id), {
      loading: `Adding ${place.name} to your places...`,
      success: `${place.name} has been added!</span>`,
      error: `Could not add ${place.name}. Something went wrong.`,
    });
  };

  return (
    <div className='flex flex-col w-full gap-4 p-4 bg-gray-800 border rounded border-accent-300/50'>
      <div className='flex flex-col gap-2'>
        <div>
          <h1 className='text-lg font-bold'>{place.name}</h1>
          <p className='text-gray-400'>{place.vicinity}</p>
        </div>
        <div className='flex flex-wrap gap-2'>
          {place.types.map((type) => (
            <span
              className='px-2 rounded whitespace-nowrap w-min bg-accent-800'
              key={type}
            >
              {tagTransform(type)}
            </span>
          ))}
        </div>
      </div>

      <Button onClick={handleAdd}>Add &rarr;</Button>
    </div>
  );
};
