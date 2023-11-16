import { EditEventDto } from "../viewModels/EditEventDto";
import { EventDto } from "../viewModels/EventDto";

export const editEvent = async (editEventDto: EditEventDto): Promise<string> => {
    // Mocked API call (replace with actual API call)=
    const mockedResponse = '764b1cc1-a09a-4c74-9ebe-abd7b802a691';

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(editEventDto);
        console.log("Mocked API Response:", );
        resolve(mockedResponse);
      }, 1000);
    });
  };

export const getEvent = async (eventId: string): Promise<EventDto> => {
  const imageUrl = 'https://media.cnn.com/api/v1/images/stellar/prod/160107100400-monkey-selfie.jpg?q=x_3,y_0,h_1635,w_2905,c_crop/w_800';
  const file = await fetch(imageUrl)
    .then(response => response.blob())
    .then(blob => {
      const file = new File([blob], 'fileName', { type: blob.type });
      return file;
    });
    
  // Mocked API call (replace with actual API call)=
  const mockedResponse: EventDto = {
    eventId:'764b1cc1-a09a-4c74-9ebe-abd7b802a691',
    eventName: 'AAAAAAAAAAAAAAAAAAA',
    price: 12,
    icon: file,
    locationId: '6',
    gameId: '21',
    date: '2023-12-09',
    description: 'opis AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
  };

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(eventId);
      console.log("Mocked API Response:", );
      resolve(mockedResponse);
    }, 1000);});
}