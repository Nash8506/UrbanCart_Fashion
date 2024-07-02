// import { queries } from "@testing-library/react";

export const color = [
  "White",
  "Black",
  "Red",
  "Maroon",
  "Beige",
  "Pink",
  "Green",
  "Yellow",
];

export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Black" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
      { value: "yellow", label: "Yellow" },
    ],
  },

  {
    id: "size",
    name: "Size",
    options: [
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
    ],
  },
];

export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 - ₹399" },
      { value: "399-599", label: "₹399 - ₹999" },
      { value: "999-1999", label: "₹999 - ₹1999" },
      { value: "1999-2999", label: "₹1999-₹2999" },
      { value: "3999-4999", label: "₹3999-₹4999" },
    ],
  },
{
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% and Above" },
      { value: "20", label: "20% and Above" },
      { value: "30", label: "30% and Above" },
      { value: "40", label: "40% and Above" },
      { value: "50", label: "50% and Above" },
      { value: "60", label: "60% and Above" },
      { value: "70", label: "70% and Above" },
      { value: "80", label: "80% and Above" },
      { value: "90", label: "90% and Above" },
    ],
},
{
    id: "stock",
    name: "Availability",
    options: [
      { value: "In Stock", label: "In Stock" },
      { value: "Out of Stock", label: "Out of Stock" },
    ],
},
];

export const sortOptions = [
  { name: 'Price: Low to High', query:'price-low', current: false },
  { name: 'Price: High to Low', query:'price-high', current: false },
];