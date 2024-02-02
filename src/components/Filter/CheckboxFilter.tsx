"use client";

export default function CheckboxFilter({ filter, handleChange }) {
  return (
    <fieldset>
      <label htmlFor={filter.name}>{filter.label}</label>
      <input
        type="checkbox"
        name={filter.name}
        id={filter.name}
        value={filter.value}
        onChange={handleChange}
      />
    </fieldset>
  );
}
