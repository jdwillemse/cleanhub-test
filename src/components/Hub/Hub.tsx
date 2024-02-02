import { CSSProperties } from "react";
import Image from "next/image";

import styles from "./hub.module.css";
import type { Hub } from "@/types";

function calculateUnassignedQuantityPercentage({
  unassignedQuantityTotal,
  totalRecoveredQuantity,
}: {
  unassignedQuantityTotal: number;
  totalRecoveredQuantity: number;
}): number {
  // if nothing was collected or everything was assigned then the amount unassigned is 0
  if (unassignedQuantityTotal === 0 || totalRecoveredQuantity === 0) {
    return 100;
  }
  // Round the percentage to two decimal places
  return (
    100 -
    Math.round((unassignedQuantityTotal / totalRecoveredQuantity) * 10000) / 100
  );
}

export default function Hub({ data }: { data: Hub }) {
  return (
    <li className={styles.container}>
      <a href={`/hub/${data.slug}`}>
        {/* In a production API I would expect the image sizes to be passed  */}
        <div className={styles.thumbnailContainer}>
          {/* This image component should be optimized according to the design in a production build */}
          <Image
            className={styles.thumbnail}
            src={data.cardImage.thumbnailDirectLink}
            alt={data.name}
            fill={true}
            sizes="200px"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <h2 className={styles.title}>{data.displayName}</h2>
        <dl className={styles.metadata}>
          <div>
            <dt>Total assigned:</dt>
            <dd>{calculateUnassignedQuantityPercentage(data)} %</dd>
          </div>
          <div>
            <dt>Stage:</dt>
            <dd>{data.stage}</dd>
          </div>
          <div>
            <dt>State:</dt>
            <dd>{data.state}</dd>
          </div>
          <div>
            <dt>Category:</dt>
            <dd>{data.category}</dd>
          </div>
          <div>
            <dt>Assignable:</dt>
            <dd>{data.assignable ? "true" : "false"}</dd>
          </div>
        </dl>
      </a>
    </li>
  );
}
