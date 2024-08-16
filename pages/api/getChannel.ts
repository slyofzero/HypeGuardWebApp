import { getDocument } from "@/firebase";
import { StoredPortalData } from "@/types/portalData";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  link?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    // Ensure the method is POST or handle accordingly
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { channelId } = JSON.parse(req.body);

    // Validate that channelId is provided
    if (!channelId) {
      return res.status(400).json({ error: "Channel ID is required" });
    }

    // Fetch the document from the database
    const portalData = (
      await getDocument<StoredPortalData>({
        collectionName: "portal_data",
        queries: [["channelId", "==", Number(channelId)]],
      })
    ).at(0);

    // If no data is found, return a 404 error
    if (!portalData) {
      return res.status(404).json({ error: "Data not found" });
    }

    // Return the response with the link
    return res.status(200).json({ link: portalData.link });
  } catch (error) {
    // Handle any unexpected errors
    console.error("Error fetching portal data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
