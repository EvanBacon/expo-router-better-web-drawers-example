import Home from "@/components/home";
import Head from "expo-router/head";

export default function DashboardPage() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Example dashboard app built using the components."
        />
      </Head>

      <Home />
    </>
  );
}
