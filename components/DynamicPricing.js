"use client";
import React, { useState } from "react";

const services = [
  { name: "Consultation", price: 500 },
  { name: "Document Review", price: 300 },
  { name: "Visa Filing", price: 1500 },
  { name: "Follow-up Service", price: 700 },
];

const DynamicPricing = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCheckboxChange = (service, isChecked) => {
    let updatedServices;
    if (isChecked) {
      updatedServices = [...selectedServices, service];
    } else {
      updatedServices = selectedServices.filter(
        (selectedService) => selectedService.name !== service.name
      );
    }
    setSelectedServices(updatedServices);
    const updatedPrice = updatedServices.reduce(
      (sum, service) => sum + service.price,
      0
    );
    setTotalPrice(updatedPrice);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Visa Consulting Services</h2>
      {services.map((service) => (
        <div key={service.name} className="mb-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              onChange={(e) => handleCheckboxChange(service, e.target.checked)}
            />
            {service.name} - ₹{service.price}
          </label>
        </div>
      ))}
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Total Price: ₹{totalPrice}</h3>
      </div>
    </div>
  );
};

export default DynamicPricing;
