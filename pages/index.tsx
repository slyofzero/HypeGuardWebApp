import { decrypt } from "@/utils/cryptography";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const { param } = router.query;

  const handleVerification = () => {
    setClicked(true);
    if (param && typeof param === "string") {
      const decryptedParam = decrypt(param);
      window.location.href = decryptedParam;
    }
  };

  return (
    <div className="flex flex-col text-white items-center justify-center h-screen w-screen bg-black gap-8">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-extrabold text-3xl">Human Verification</h1>
        <h2 className="text-md font-bold text-telegram-text mt-2">
          Verify below to be granted entry
        </h2>
      </div>

      <button
        onClick={handleVerification}
        className="w-72 px-4 py-3 my-4 font-mono text-base rounded text-telegram-button-text bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 hover:bg-gradient-to-br shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-black-800/80 transition-all"
      >
        {!clicked ? "Click here" : "...Verifying"}
      </button>
    </div>
  );
}
