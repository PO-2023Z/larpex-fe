import {
    LocationResponse
} from "../viewModels/LocationViewModel"

export const getLocations = async (
    ): Promise<LocationResponse []> => {
      // Mocked API call (replace with actual API call)
      const mockedResponse: LocationResponse[] = [
        {
          locationId: 'b7beb4d9-05b3-464b-abfe-3b79ab1ad9e9',
          locationName: "Magiczny las",
        }, 
        {
          locationId: '3a31564d-14b8-4ee7-8b43-d06f94ad19d5',
          locationName: "Starożytny zamek"
        }, 
        {
          locationId: '1f269570-b560-475e-a451-d5c3ff494d9a',
          locationName: "Podziemna jaskinia"
        }];
      
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Mocked API Response:", mockedResponse);
          resolve(mockedResponse);
        }, 1000);
      });
    };