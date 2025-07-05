import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CarCard from "../CarCard"; 
import "@testing-library/jest-dom";

const mockCarData = {
  id: 1,
  name: "Honda Civic",
  brand: "Honda",
  type: ["Sedan", "Compact"],
  price: "$25000",
  rating: "4.3",
  image: "https://via.placeholder.com/140",
};

describe("CarCard Component", () => {
  it("renders car information correctly", () => {
    render(
      <CarCard
        cardata={mockCarData}
        isBase={false}
        isCompared={false}
        onSelectBase={() => {}}
        onToggleCompare={() => {}}
      />
    );

    expect(screen.getByRole("img", { name: /honda civic/i })).toBeInTheDocument();
    expect(screen.getByText("Honda Civic")).toBeInTheDocument();
    expect(screen.getByText(/Brand:/i)).toHaveTextContent("Brand: Honda");
    expect(screen.getByText(/Type:/i)).toHaveTextContent("Type: Sedan, Compact");
    expect(screen.getByText(/Price:/i)).toHaveTextContent("Price: $25000");
    expect(screen.getByText(/Rating:/i)).toHaveTextContent("Rating: 4.3");
  });

  it("shows 'Set as Base' and 'Add to Compare' buttons when not selected", () => {
    render(
      <CarCard
        cardata={mockCarData}
        isBase={false}
        isCompared={false}
        onSelectBase={() => {}}
        onToggleCompare={() => {}}
      />
    );

    expect(screen.getByRole("button", { name: "Set as Base" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Add to Compare" })).toBeInTheDocument();
  });

  it("shows 'Base Car' and hides compare button when selected as base", () => {
    render(
      <CarCard
        cardata={mockCarData}
        isBase={true}
        isCompared={false}
        onSelectBase={() => {}}
        onToggleCompare={() => {}}
      />
    );

    expect(screen.getByRole("button", { name: "Base Car" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /compare/i })).not.toBeInTheDocument();
  });

  it("shows 'Remove from Compare' when already compared", () => {
    render(
      <CarCard
        cardata={mockCarData}
        isBase={false}
        isCompared={true}
        onSelectBase={() => {}}
        onToggleCompare={() => {}}
      />
    );

    expect(screen.getByRole("button", { name: "Remove from Compare" })).toBeInTheDocument();
  });

  it("calls handlers on button click", () => {
    const mockBaseFn = jest.fn();
    const mockCompareFn = jest.fn();

    render(
      <CarCard
        cardata={mockCarData}
        isBase={false}
        isCompared={false}
        onSelectBase={mockBaseFn}
        onToggleCompare={mockCompareFn}
      />
    );

    fireEvent.click(screen.getByRole("button", { name: "Set as Base" }));
    expect(mockBaseFn).toHaveBeenCalledWith(mockCarData);

    fireEvent.click(screen.getByRole("button", { name: "Add to Compare" }));
    expect(mockCompareFn).toHaveBeenCalledWith(mockCarData);
  });
});
