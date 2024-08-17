import { decrypt, encrypt } from "@/utils/cryptography";
import { ENCRYPTION_KEY } from "@/utils/env";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { param } = router.query;

  console.log(param);

  const handleVerification = () => {
    if (param && typeof param === "string") {
      const decryptedParam = decrypt(param);
      window.location.href = decryptedParam;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen text-black gap-4">
      <button
        onClick={handleVerification}
        className="bg-white px-4 py-2 text-lg"
      >
        Verify Now
      </button>
    </div>
  );
}
