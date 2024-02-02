"use client";

export default function TextFilter({ filter, handleChange }) {
  return (
    <fieldset>
      <label htmlFor={filter.name}>{filter.label}</label>
      <input
        type="text"
        name={filter.name}
        id={filter.name}
        onChange={handleChange}
      />
    </fieldset>
  );
}
