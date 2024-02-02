import Image from "next/image";

import { getHubBySlug } from "@/lib/api";

export default async function Home({ params }) {
  const hub = await getHubBySlug(params.id);

  return (
    <main>
      {/* The instructions state that this page is not required so I'm just printing the hub object here */}
      <pre>{JSON.stringify(hub, null, 2)}</pre>
    </main>
  );
}
