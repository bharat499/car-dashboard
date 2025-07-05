import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Stack,
} from "@mui/material";

const CarCard = (props) => {
  const { cardata, isBase, isCompared, onSelectBase, onToggleCompare } = props;
  return (
    <Card sx={{ maxWidth: "100%",minWidth: 250, m: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={cardata?.image}
        alt={cardata?.name}
      />
      <CardContent>
        <Typography variant="h6">{cardata?.name}</Typography>
        <Typography variant="body2">Brand: {cardata?.brand}</Typography>
        <Typography variant="body2">Type: {cardata?.type.join(", ")}</Typography>
        <Typography variant="body2">Price: {cardata?.price}</Typography>
        <Typography variant="body2">Rating: {cardata?.rating}</Typography>

        <Stack spacing={1} mt={2}>
          <Button
            variant={isBase ? "contained" : "outlined"}
            color="secondary"
            onClick={() => onSelectBase(cardata)}
          >
            {isBase ? "Base Car" : "Set as Base"}
          </Button>

          {!isBase && (
            <Button
              variant={isCompared ? "contained" : "outlined"}
              color="primary"
              onClick={() => onToggleCompare(cardata)}
            >
              {isCompared ? "Remove from Compare" : "Add to Compare"}
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
export default CarCard;
