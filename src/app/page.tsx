import { SignMessage } from "@/components/SignContractMsg";

export const metadata = {
  title: "Nebula Mint",
  description: "Rudimentery minting",
};

export default async function Home() {
  return (
    <main>
      <SignMessage />
    </main>
  );
}
