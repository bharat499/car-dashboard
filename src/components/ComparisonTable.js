import React,{memo} from "react";
import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from "@mui/material";

 const ComparisonTable=(props)=> {
    const { baseCar, comparisonCars } =props;
  if (!baseCar || comparisonCars.length === 0) return null;
 const attributes = ["brand", "type", "price", "weight", "rating"];
  return (
   <Paper sx={{ overflowX: "auto", mt: 4 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Attribute</TableCell>
            <TableCell>{baseCar.name} (Base)</TableCell>
            {comparisonCars.map((item) => (
              <TableCell key={item?.id}>{item?.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {attributes.map((attr) => (
            <TableRow key={attr}>
              <TableCell>{attr.charAt(0).toUpperCase() + attr.slice(1)}</TableCell>
              <TableCell>{Array.isArray(baseCar[attr]) ? baseCar[attr].join(", ") : baseCar[attr]}</TableCell>
              {comparisonCars.map((item) => (
                <TableCell key={item?.id}>
                  {Array.isArray(item[attr]) ? item[attr].join(", ") : item[attr]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
export default memo(ComparisonTable)
