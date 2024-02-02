"use client";

import Filter from "@/components/Filter/Filter";
import HubList from "@/components/HubList/HubList";
import { useState } from "react";

export default function Home({ hubList, filters }) {
  const [filteredListState, setFilteredListState] = useState(hubList);

  return (
    <>
      <Filter
        hubList={hubList}
        filters={filters}
        filteredListState={filteredListState}
        setFilteredListState={setFilteredListState}
      />
      <HubList hubList={filteredListState} />
    </>
  );
}
