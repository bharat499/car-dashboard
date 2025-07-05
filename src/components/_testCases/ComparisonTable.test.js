import React from "react";
import { render, screen } from "@testing-library/react";
import ComparisonTable from "../ComparisonTable";
import '@testing-library/jest-dom';

const baseCar = {
  id: 1,
  name: "Car A",
  brand: "Toyota",
  type: "SUV",
  price: "$30000",
  weight: "1500kg",
  rating: "4.5"
};

const comparisonCars = [
  {
    id: 2,
    name: "Car B",
    brand: "Honda",
    type: "Sedan",
    price: "$28000",
    weight: "1400kg",
    rating: "4.0"
  },
  {
    id: 3,
    name: "Car C",
    brand: "Ford",
    type: "SUV",
    price: "$32000",
    weight: "1600kg",
    rating: "4.7"
  }
];

describe("ComparisonTable Component", () => {
  it("renders the table with correct headers and attributes", () => {
    render(<ComparisonTable baseCar={baseCar} comparisonCars={comparisonCars} />);
    
    expect(screen.getByText("Attribute")).toBeInTheDocument();
    expect(screen.getByText("Car A (Base)")).toBeInTheDocument();
    expect(screen.getByText("Car B")).toBeInTheDocument();
    expect(screen.getByText("Car C")).toBeInTheDocument();
   
    expect(screen.getByText("Brand")).toBeInTheDocument();
    expect(screen.getByText("Type")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Weight")).toBeInTheDocument();
    expect(screen.getByText("Rating")).toBeInTheDocument();

    expect(screen.getByText("Toyota")).toBeInTheDocument();
    expect(screen.getByText("Honda")).toBeInTheDocument();
    expect(screen.getByText("Ford")).toBeInTheDocument();

    expect(screen.getByText("$30000")).toBeInTheDocument();
    expect(screen.getByText("4.0")).toBeInTheDocument(); 
  });

  it("does not render anything if baseCar or comparisonCars is missing", () => {
    const { container: empty1 } = render(<ComparisonTable baseCar={null} comparisonCars={comparisonCars} />);
    expect(empty1.firstChild).toBeNull();

    const { container: empty2 } = render(<ComparisonTable baseCar={baseCar} comparisonCars={[]} />);
    expect(empty2.firstChild).toBeNull();
  });
});
