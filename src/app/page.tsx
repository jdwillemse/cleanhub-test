import { getAllHubs, getHubFilters } from "@/lib/api";
import styles from "./page.module.css";
import FilteredHubList from "@/components/FilteredHubList/FilteredHubList";

export default async function Home() {
  const hubList = await getAllHubs();
  const filters = await getHubFilters();
  return (
    <main className={styles.main}>
      <h1>List of hubs</h1>
      <FilteredHubList hubList={hubList} filters={filters} />
    </main>
  );
}
