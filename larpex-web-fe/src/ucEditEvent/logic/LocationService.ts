import {
    LocationResponse
} from "../viewModels/LocationViewModel"

export const getLocations = async (
    ): Promise<LocationResponse []> => {
      // Mocked API call (replace with actual API call)
      const mockedResponse: LocationResponse[] = [{
        locationId: 6,
        locationName: "Długa 51",
      }, 
      {
        locationId: 9,
        locationName: "Stara 21"
      }];
      
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Mocked API Response:", mockedResponse);
          resolve(mockedResponse);
        }, 1000);
      });
    };