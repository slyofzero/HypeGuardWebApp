import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { param } = router.query;
  const [inviteLink, setInviteLink] = useState<string>(String(param));
  console.log(param);

  // useEffect(() => {
  //   const body = JSON.stringify({ channelId });

  //   const getLink = async () => {
  //     const response = await fetch("/api/getChannel", { body, method: "POST" });
  //     const { link } = await response.json();

  //     if (link) setInviteLink(link);
  //   };

  //   getLink();
  // }, [channelId]);

  const handleVerification = () => {
    if (param && typeof param === "string") {
      if (param.startsWith("?")) {
        setInviteLink(param.substring(1));
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

      <span className="text-white">{inviteLink}</span>
    </div>
  );
}
