/**
 * TS: Optional 的使用
 */
import React, { ReactElement } from "react";
import * as T from "./types";

interface OverviewProps {
  cars?: T.Car[];
}
interface OverviewState {
  selectedCar?: T.Car;
}

class Overview extends React.Component<OverviewProps, OverviewState> {
  constructor(props: OverviewProps) {
    super(props);
    this.state = {
      selectedCar: undefined
    };
  }

  handleSelectCar = (car: T.Car): void => {
    this.setState({ selectedCar: car });
  };

  renderCarsList = (cars?: T.Car[]): ReactElement => {
    if (!cars || !cars.length) {
      return <p>No cars!</p>;
    }

    return (
      <ul>
        {cars.map((item, i) => {
          <li key={i} onClick={() => this.handleSelectCar(item)}>
            {item.make} {item.model}
          </li>;
        })}
      </ul>
    );
  };

  renderCarInfo = (car?: T.Car): ReactElement | null => {
    if (!car) {
      return null;
    }
    return (
      <div className="car-info">
        <h2>{`${car.make} ${car.model}`}</h2>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>Cars Overview</h1>
        <div className="cars-list">
          {this.renderCarsList(this.props.cars)}
          {this.renderCarInfo(this.state.selectedCar)}
        </div>
      </div>
    );
  }
}

export default Overview;
