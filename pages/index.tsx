import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { channelId } = router.query;

  console.log(channelId);

  useEffect(() => {
    // Initialize Telegram Web App
    if (typeof window !== "undefined" && window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const handleVerification = () => {
    // Handle the verification process
    alert("Verification complete!");

    window.location.href = "https://t.me/+jfswi1k_rH8xOTg1";

    // console.log(window.Telegram);
    // if (typeof window !== "undefined" && window.Telegram?.WebApp) {
    //   window.Telegram.WebApp.close();
    // }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen text-black">
      <button
        onClick={handleVerification}
        className="bg-white px-4 py-2 text-lg"
      >
        Verify Now
      </button>
    </div>
  );
}
