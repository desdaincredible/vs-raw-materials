import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../components/layout";

export default function Home() {
  // get user
  useEffect(async () => {
    const response = await fetch(`/api/user`);
    console.log(response, "response");
    // const json = await response.json()
    // console.log(json, 'json')
  });

  const router = useRouter();

  useEffect(() => {
    router.push("/reports/new");
  });

  return <Layout></Layout>;
}
