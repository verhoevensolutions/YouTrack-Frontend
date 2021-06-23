import Head from "next/head";
import Navbar from "../components/navigation/navbar";
import Home from "./home";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>YouTrack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className="flex flex-auto">
        <Home></Home>
      </div>
    </div>
  );
}
