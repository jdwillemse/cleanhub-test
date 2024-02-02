"use client";

import {
  ChangeEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import styles from "./filter.module.css";
import SelectFilter from "./SelectFilter";
import CheckboxFilter from "./CheckboxFilter";
import TextFilter from "./TextFilter";

const filterData = (hubList, filters = {}) => {
  return hubList.filter((item) => {
    // check every filer against the item to see if the item should be included
    return Object.keys(filters).every((key) => {
      // convert both the item value and the filter value to lowercase to ignore case
      const itemValue = item[key]?.toLowerCase();
      const filterValue = filters[key]?.toLowerCase();
      return !filterValue || itemValue.includes(filterValue);
    });
  });
};

export default function Filter({
  hubList,
  filters,
  filteredListState,
  setFilteredListState,
}) {
  const formRef = useRef(null);
  const [filteredData, setFilteredData] = useState(hubList);
  const [filterState, setFilterState] = useState({});

  const handleSubmit = useCallback((event: SyntheticEvent) => {
    event.preventDefault();
  }, []);

  // When the value of any filter changes the filter state is updated
  const handleFilterChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData);
      setFilterState(data);
    },
    [formRef, setFilterState]
  );

  // When the filters change the filtered list is updated
  useEffect(() => {
    setFilteredListState(filterData(hubList, filterState));
  }, [hubList, filterState, setFilteredListState]);

  const handleClear = useCallback(() => {
    setFilterState({});
    formRef.current?.reset();
  }, [setFilterState]);

  return (
    <div className={styles.container}>
      <h2>Filter hubs</h2>
      <div role="status" aria-live="polite" aria-atomic="true">
        Results: {filteredListState.length}
      </div>
      <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
        {filters.map((filter) => {
          switch (filter.type) {
            case "select":
              return (
                <SelectFilter
                  filter={filter}
                  handleChange={handleFilterChange}
                  key={filter.name}
                />
              );

            case "checkbox":
              return (
                <CheckboxFilter
                  filter={filter}
                  handleChange={handleFilterChange}
                  key={filter.name}
                />
              );

            default:
              return (
                <TextFilter
                  filter={filter}
                  handleChange={handleFilterChange}
                  key={filter.name}
                />
              );
          }
        })}
        <button type="button" onClick={handleClear}>
          Clear Filters
        </button>
      </form>
    </div>
  );
}
