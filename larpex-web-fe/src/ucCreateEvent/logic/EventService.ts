import { CreateEventDto } from "../viewModels/CreateEventDto";

export const createEvent = async (createEventDto: CreateEventDto): Promise<string> => {
    // Mocked API call (replace with actual API call)=
    const mockedResponse = '764b1cc1-a09a-4c74-9ebe-abd7b802a691';

    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(createEventDto);
        console.log("Mocked API Response:", );
        resolve(mockedResponse);
      }, 1000);
    });
  };