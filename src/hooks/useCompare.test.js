import { renderHook, act } from "@testing-library/react";
import useCompare from "./useCompare";

describe("useCompare hook", () => {
  test("initial values are correct", () => {
    const { result } = renderHook(() => useCompare());

    expect(result.current.baseCar).toBe(null);
    expect(result.current.comparisonCars).toEqual([]);
  });

  test("selectBaseCar sets base car and clears comparison cars", () => {
    const { result } = renderHook(() => useCompare());

    const baseCar = { id: 1, name: "Car A" };

    act(() => {
      result.current.selectBaseCar(baseCar);
    });

    expect(result.current.baseCar).toEqual(baseCar);
    expect(result.current.comparisonCars).toEqual([]);
  });

  test("toggleComparisonCar adds a car", () => {
    const { result } = renderHook(() => useCompare());

    const car = { id: 2, name: "Car B" };

    act(() => {
      result.current.toggleComparisonCar(car);
    });

    expect(result.current.comparisonCars).toEqual([car]);
  });

  test("toggleComparisonCar removes a car if already added", () => {
    const { result } = renderHook(() => useCompare());

    const car = { id: 3, name: "Car C" };

    act(() => {
      result.current.toggleComparisonCar(car); 
      result.current.toggleComparisonCar(car);
    });

    expect(result.current.comparisonCars).toEqual([]);
  });

  test("resetAll clears baseCar and comparisonCars", () => {
    const { result } = renderHook(() => useCompare());

    const base = { id: 4 };
    const compare = { id: 5 };

    act(() => {
      result.current.selectBaseCar(base);
      result.current.toggleComparisonCar(compare);
      result.current.resetAll();
    });

    expect(result.current.baseCar).toBe(null);
    expect(result.current.comparisonCars).toEqual([]);
  });
});
