import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import { Grid, Typography, Button, Paper} from "@mui/material";
import { cars } from "../../data/cars";
import CarCard from "../../components/CarCard";
import ComparisonTable from "../../components/ComparisonTable";
import useCompare from "../../hooks/useCompare";
import SelectDropdown from "../../components/controls/SelectDropdown";
import Header from "../../components/header/Header"
const Dashboard = () => {
  const {
    baseCar,
    comparisonCars,
    selectBaseCar,
    toggleComparisonCar,
    resetAll,
  } = useCompare();

  const [sortBy, setSortBy] = useState("none");
  const [brand, setBrand] = useState("all");

  const filteredCars = useMemo(() => {
    return cars

      .filter((car) =>
        brand === "all" ? true : car.brand.toLowerCase() === brand.toLowerCase()
      )

      .sort((a, b) => {
        const priceA = parseInt(a.price.replace(/\D/g, ""));
        const priceB = parseInt(b.price.replace(/\D/g, ""));
        if (sortBy === "priceLow") return priceA - priceB;
        if (sortBy === "priceHigh") return priceB - priceA;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [brand, sortBy]);

  return (
    <>
   <Header />
    <Paper p={2}>
      <Helmet>
        <title>Compare Cars - Toyota, Honda, Tesla</title>
        <meta
          name="description"
          content="Compare car models by brand, price, and rating. Choose one base car and compare it with multiple others by price, brand, type, and rating."
        />
        <meta
          name="keywords"
          content="car comparison, toyota, honda, electric cars, suv, car price"
        />
      </Helmet>

      <Grid container spacing={2} p={2}>
        <Grid size={{ xs: 12, sm: 12, md: 8, lg: 8 }}>
          <Grid container spacing={2} p={3}>
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
              <Typography variant="h6">Car List</Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4, lg: 4 }}>
              <SelectDropdown
                label="Brand"
                value={brand}
                onChange={setBrand}
                options={[
                  { label: "All", value: "all" },
                  ...Array.from(new Set(cars.map((item) => item.brand))).map(
                    (b) => ({
                      label: b,
                      value: b,
                    })
                  ),
                ]}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 4, lg: 4 }}>
              <SelectDropdown
                label="Sort By"
                value={sortBy}
                onChange={setSortBy}
                options={[
                  { label: "None", value: "none" },
                  { label: "Price: Low to High", value: "priceLow" },
                  { label: "Price: High to Low", value: "priceHigh" },
                  { label: "Rating: High to Low", value: "rating" },
                ]}
              />
            </Grid>
            <Grid size={{xs:12,md:12,lg:12}}></Grid>

            <Grid container spacing={2}>
              {filteredCars.map((item) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={item?.id}>
                  <CarCard
                    cardata={item}
                    isBase={baseCar?.id === item?.id}
                    isCompared={comparisonCars.find(
                      (obj) => obj?.id === item?.id
                    )}
                    onSelectBase={selectBaseCar}
                    onToggleCompare={toggleComparisonCar}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
          <Grid container spacing={2} p={3}>
           <Grid size={{ xs: 12, md: 12, lg: 12 }}>
              <Typography variant="h6">View Car Comparison</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }} pt={1}>
              {baseCar !== null ? (
                <Button variant="contained" color="primary" onClick={resetAll}>
                  Clear Comparison
                </Button>
              ) : null}
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
              <ComparisonTable
                baseCar={baseCar}
                comparisonCars={comparisonCars}
              />
            </Grid>
            {/* <Grid size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
            {baseCar!==null?  <Button variant="contained" color="primary" onClick={resetAll}>
              Clear Comparison
            </Button>:null}
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    </>
  );
};
export default Dashboard;
