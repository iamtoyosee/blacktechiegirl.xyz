import React, { useState } from "react";

const Dropdown = ({ options, onSelect, label }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event) => {
    // Collect all selected options
    const selected = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setSelectedOptions(selected);
    onSelect(selected); // Callback function to handle the selected options
  };

  return (
    <div>
      <label>{label}</label>
      <select
        multiple
        value={selectedOptions}
        onChange={handleChange}
        className="m-4 border-2 rounded-sm p-4"
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option
            key={index}
            value={option}
            className="m-4 border-2 rounded-sm p-4"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
