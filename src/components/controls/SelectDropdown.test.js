import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SelectDropdown from "../controls/SelectDropdown"; 
import "@testing-library/jest-dom";

const options = [
  { label: "Honda", value: "honda" },
  { label: "Toyota", value: "toyota" },
];

describe("SelectDropdown Component", () => {
 it("renders label and selected value", () => {
  render(
    <SelectDropdown
      label="Select Brand"
      value="honda"
      onChange={() => {}}
      options={options}
    />
  );

  expect(screen.getByLabelText("Select Brand")).toBeInTheDocument();
  expect(screen.getByRole("combobox")).toHaveTextContent("Honda");
});

  it("renders all options when opened", () => {
    render(
      <SelectDropdown
        label="Select Brand"
        value=""
        onChange={() => {}}
        options={options}
      />
    );

    const select = screen.getByLabelText("Select Brand");
    fireEvent.mouseDown(select); // open dropdown

    expect(screen.getByText("Honda")).toBeInTheDocument();
    expect(screen.getByText("Toyota")).toBeInTheDocument();
  });

  it("calls onChange with selected value", () => {
    const handleChange = jest.fn();

    render(
      <SelectDropdown
        label="Select Brand"
        value=""
        onChange={handleChange}
        options={options}
      />
    );

    const select = screen.getByLabelText("Select Brand");
    fireEvent.mouseDown(select);

    const toyotaOption = screen.getByText("Toyota");
    fireEvent.click(toyotaOption);

    expect(handleChange).toHaveBeenCalledWith("toyota");
  });
});
