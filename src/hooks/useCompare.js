import { useState } from "react";

 const useCompare=() =>{
 const [baseCar, setBaseCar] = useState(null);
  const [comparisonCars, setComparisonCars] = useState([]);

  const selectBaseCar = (data) => {
    setBaseCar(data);
    setComparisonCars([]);
  };

  const toggleComparisonCar = (data) => {
    setComparisonCars((prev) => {
      if (prev.find((item) => item?.id === data.id)) {
        return prev.filter((obj) => obj?.id !== data.id);
      } else {
        return [...prev, data];
      }
    });
  };

  const resetAll = () => {
    setBaseCar(null);
    setComparisonCars([]);
  };

  return {
    baseCar,
    comparisonCars,
    selectBaseCar,
    toggleComparisonCar,
    resetAll,
  };
}
export default useCompare