import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { channelId } = router.query;
  const [inviteLink, setInviteLink] = useState("");
  console.log(channelId);

  useEffect(() => {
    const body = JSON.stringify({ channelId });

    const getLink = async () => {
      const response = await fetch("/api/getChannel", { body, method: "POST" });
      const { link } = await response.json();

      if (link) setInviteLink(link);
    };

    getLink();
  }, [channelId]);

  const handleVerification = () => {
    if (inviteLink) window.location.href = inviteLink;
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
