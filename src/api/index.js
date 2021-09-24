// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  // Fetch the list of vehicles with summaries
  const vehicleSummariesResponse = await fetch('/api/vehicles.json').then((response) => {
    return response.json();
  });
  // Instantiate array for vehicles to be returned
  const vehicleSummaryPayload = [];

  vehicleSummariesResponse.forEach((vehicle) => {
    // Get the details for the vehicle
    fetch(vehicle.apiUrl).then((response) => {
      return response.json();
    }).then((vehicleDetails) => {
      // Check that the vehicle has a valid price
      if (vehicleDetails.price !== '' && vehicleDetails.price !== null) {
        vehicleSummaryPayload.push(vehicle);
      }
    });
  });
  return vehicleSummaryPayload;
}
