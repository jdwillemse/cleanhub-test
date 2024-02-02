async function fetchFromHubs(query, preview = false) {
  return fetch(process.env.HUBS_ENDPOINT).then((response) => response.json());
}

// Fetch hub data
// -----------------------------------------------------------------

export async function getAllHubs() {
  const hubList = await fetchFromHubs();
  return hubList;
}

// In a production app I would expect a dedicated API endpoint for fetching a single hub
export async function getHubBySlug(slug) {
  const hubList = await fetchFromHubs();
  // This mockup does not include error handling because of time constraints
  const hub = hubList.find((h) => h.slug === slug);
  return hub || null;
}

// Fetch filter data
// In a production app I would expect the filters to be dynamic rather than hardcoded so there
// would be a separate API call for this data
// -----------------------------------------------------------------

export async function getHubFilters() {
  const filters = [
    { type: "text", name: "displayName", label: "Name" },
    {
      type: "select",
      name: "state",
      options: [
        { value: "", label: "All" },
        { value: "DEMO", label: "Demo" },
        { value: "ACTIVE", label: "Active" },
      ],
      label: "State",
    },
    {
      type: "checkbox",
      name: "category",
      label: "Category is Assignable",
      value: "ASSIGNABLE",
    },
  ];
  return Promise.resolve(filters);
}
