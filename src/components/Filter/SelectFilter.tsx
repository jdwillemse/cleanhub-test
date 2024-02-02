"use client";

export default function SelectFilter({ filter, handleChange }) {
  return (
    <fieldset>
      <label htmlFor={filter.name}>{filter.label}</label>
      <select name={filter.name} id={filter.name} onChange={handleChange}>
        {filter.options.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
