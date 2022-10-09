import axios from 'axios';

export const addPlace = async (place_id: string): Promise<void> => {
  await axios({
    url: '/api/places/add',
    method: 'POST',
    data: {
      place_id,
    },
  });
};
