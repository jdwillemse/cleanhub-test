import styles from "./hubList.module.css";
import Hub from "@/components/Hub/Hub";
import type { Hub } from "@/types";

export default function HubList({ hubList }: { hubList: Hub[] }) {
  return (
    <ul className={styles.container}>
      {hubList.map((hub: Hub) => (
        <Hub data={hub} key={hub.uuid} />
      ))}
    </ul>
  );
}
