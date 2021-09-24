import React from 'react';
import useData from './useData';
import './style.scss';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData();

  if (loading) {
    return <div data-testid="loading">Loading</div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  console.log(vehicles);

  return (
    <div data-testid="results">
      {
        vehicles.map((vehicle) => (
            <li className="VehicleListing" key={vehicle.id}>
              <img src={vehicle.media[0].url} alt={vehicle.media[0].name} />
              <article>
                <h1>{vehicle.id}</h1>
              </article>
            </li>
          ))
      }
    </div>
  );
}
