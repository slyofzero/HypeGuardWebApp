import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { param } = router.query;

  const handleVerification = () => {
    if (param && typeof param === "string") {
      if (param.startsWith("?")) {
        window.location.href = param.substring(1);
      }
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
