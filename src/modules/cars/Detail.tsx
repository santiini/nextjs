import React from "react";
import { NextPage } from "next";
import * as T from "./types";

interface DetailProps {
  car: T.Car;
}
const Detail: NextPage<DetailProps> = props => {
  const { car } = props;

  return (
    <div className="carDetail">
      <h2>{`${car.make} ${car.model}`}</h2>
      <p>Engine: {car.engine}</p>
      <p>Year: {car.year}</p>
      <p>Mileage: {car.mileage}</p>
      <p>Equipment: </p>
      <ul>
        {car.equipment && car.equipment.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
};

export default Detail;
