import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Select from "react-select";
import { specialServicesOptions } from "../../../utils/globals";

const ServiceSelectBox = ({ handleSelectChange: handleSelectChangePassed }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const currentService = pathname.split('/').pop();

  const navigate = useNavigate();

  const handleSelectChange = (selectedOption) => {
    const newPath = `/data-portal/special-education-service/${selectedOption.value}`;
    const currentParams = location.search; // Get current query parameters

    navigate(`${newPath}${currentParams}`); // Append current parameters to the new path
  };

  return (
    <div className="my-2">
      <label htmlFor="service-select" className="fs-2 fw-bold" style={{ fontWeight: "normal", fontSize: "18px" }}>Select Service</label>
      <Select
        options={specialServicesOptions}
        onChange={handleSelectChangePassed ? handleSelectChangePassed : handleSelectChange}
        id="service-select"
        menuPortalTarget={document.body}
        menuPosition="fixed"
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
        }}
        value={specialServicesOptions.find((option) => option.value === currentService) || null}
        placeholder="Select a service"
      />
    </div>
  );
};

export default ServiceSelectBox;
