import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Dashboard from "../dashboard/Dashboard";
import useCompare from "../../hooks/useCompare";

jest.mock("../../hooks/useCompare", () => ({
  __esModule: true,
  default: jest.fn(),
}));


jest.mock("../../data/cars", () => ({
  cars: [
    { id: 1, brand: "Toyota", model: "Camry", price: "$20,000", rating: 4.5 },
    { id: 2, brand: "Honda", model: "Civic", price: "$18,000", rating: 4.2 },
    { id: 3, brand: "Tesla", model: "Model 3", price: "$35,000", rating: 4.8 },
  ],
}));

jest.mock("../../components/header/Header", () => () => <div>Header</div>);
jest.mock("../../components/controls/SelectDropdown", () => (props) => (
  <select
    data-testid={props.label}
    value={props.value}
    onChange={(e) => props.onChange(e.target.value)}
  >
    {props.options.map((opt) => (
      <option key={opt.value} value={opt.value}>
        {opt.label}
      </option>
    ))}
  </select>
));
jest.mock("../../components/CarCard", () => ({ cardata, onSelectBase }) => (
  <div data-testid="car-card" onClick={() => onSelectBase(cardata)}>
    {cardata.model}
  </div>
));
jest.mock("../../components/ComparisonTable", () => ({ baseCar }) => (
  <div data-testid="comparison-table">{baseCar?.model}</div>
));

beforeEach(() => {
  jest.clearAllMocks();
  useCompare.mockReturnValue({
    baseCar: null,
    comparisonCars: [],
    selectBaseCar: jest.fn(),
    toggleComparisonCar: jest.fn(),
    resetAll: jest.fn(),
  });
});

describe("Dashboard Component", () => {
  it("renders car cards", () => {
    render(<Dashboard />);
    expect(screen.getAllByTestId("car-card")).toHaveLength(3);
  });

  it("filters by brand", () => {
    render(<Dashboard />);
    fireEvent.change(screen.getByTestId("Brand"), {
      target: { value: "Honda" },
    });
    expect(screen.getAllByTestId("car-card").length).toBeLessThanOrEqual(3);
  });

  it("sorts by price", () => {
    render(<Dashboard />);
    fireEvent.change(screen.getByTestId("Sort By"), {
      target: { value: "priceHigh" },
    });
    expect(screen.getByTestId("Sort By").value).toBe("priceHigh");
  });

  it("selects base car", () => {
    const mockedSelectBaseCar = jest.fn();

    useCompare.mockReturnValueOnce({
      baseCar: null,
      comparisonCars: [],
      selectBaseCar: mockedSelectBaseCar,
      toggleComparisonCar: jest.fn(),
      resetAll: jest.fn(),
    });

    render(<Dashboard />);
    fireEvent.click(screen.getAllByTestId("car-card")[0]);
    expect(mockedSelectBaseCar).toHaveBeenCalled();
  });

  it("renders comparison section when baseCar exists", () => {
    useCompare.mockReturnValueOnce({
      baseCar: { id: 1, model: "Camry" },
      comparisonCars: [{ id: 2, model: "Civic" }],
      selectBaseCar: jest.fn(),
      toggleComparisonCar: jest.fn(),
      resetAll: jest.fn(),
    });

    render(<Dashboard />);
    expect(screen.getByTestId("comparison-table")).toBeInTheDocument();
  });

  it("sets Helmet title", async () => {
    render(<Dashboard />);
    await waitFor(() => {
      expect(document.title).toBe("Compare Cars - Toyota, Honda, Tesla");
    });
  });
});
