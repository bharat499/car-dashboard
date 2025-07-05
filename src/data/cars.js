import crvImage from '../assets/images/CVR.webp';
import toyataCar from "../assets/images/toyota-camry.webp";
import hyundai from "../assets/images/i20-exterior.webp";
import teslaModel from "../assets/images/model-3.webp";
import ford from "../assets/images/ford.webp";
import seltos from "../assets/images/seltos.webp";
import swift from "../assets/images/swift.webp";
import bmwxs from "../assets/images/bmwxs.webp";

export const cars = [
  {
    id: 1,
    name: "Toyota Camry",
    brand: "Toyota",
    type: ["Sedan", "Hybrid"],
    price: "$25,000",
    weight: "1,500 kg",
    rating: 4.5,
    image: toyataCar,
  },
  {
    id: 2,
    name: "Honda CR-V",
    brand: "Honda",
    type: ["SUV", "Petrol"],
    price: "$27,000",
    weight: "1,600 kg",
    rating: 4.6,
    image: crvImage
  },
  {
    id: 3,
    name: "Hyundai i20",
    brand: "Hyundai",
    type: ["Hatchback", "Petrol"],
    price: "$18,000",
    weight: "1,100 kg",
    rating: 4.2,
    image: hyundai
  },
  {
    id: 4,
    name: "Tesla Model 3",
    brand: "Tesla",
    type: ["Sedan", "Electric"],
    price: "$39,990",
    weight: "1,800 kg",
    rating: 4.9,
    image: teslaModel
  },
  {
    id: 5,
    name: "Ford Explorer",
    brand: "Ford",
    type: ["SUV", "Hybrid"],
    price: "$32,500",
    weight: "2,000 kg",
    rating: 4.4,
    image: ford
  },
  {
    id: 6,
    name: "Kia Seltos",
    brand: "Kia",
    type: ["SUV", "Petrol"],
    price: "$23,000",
    weight: "1,400 kg",
    rating: 4.3,
    image: seltos
  },
  {
    id: 7,
    name: "Maruti Suzuki Swift",
    brand: "Maruti Suzuki",
    type: ["Hatchback", "Petrol"],
    price: "$9,000",
    weight: "950 kg",
    rating: 4.1,
    image: swift
  },
  {
    id: 8,
    name: "BMW X5",
    brand: "BMW",
    type: ["SUV", "Diesel"],
    price: "$60,000",
    weight: "2,300 kg",
    rating: 4.7,
    image: bmwxs
  },
  
];

 
