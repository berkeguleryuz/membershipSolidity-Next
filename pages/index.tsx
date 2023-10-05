import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { NextPage } from "next";
import AccountabilityCard from "../components/AccountabilityCard";
import NavBar from "../components/Navbar";

const Home: NextPage = () => {
  const address = useAddress();

  return (
    <main className="w-full h-full">
      <NavBar />
      <div className="w-full flex justify-center">
        <AccountabilityCard />
      </div>
    </main>
  );
};

export default Home;
