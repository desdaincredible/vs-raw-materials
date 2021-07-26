import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../components/layout";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/reports/new");
  });

  return <Layout></Layout>;
}
