// index.js
const fetch = require("node-fetch");

const GROUP_ID         = process.env.GROUP_ID;
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
const API_URL          = `https://1001albumsgenerator.com/api/v1/groups/${GROUP_ID}`;

if (!SLACK_WEBHOOK_URL || !GROUP_ID) {
  console.error("Missing required environment variables");
  process.exit(1);
}

async function postAlbumToSlack() {
  try {
    // 1. Fetch the group data
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();

    // 2. Get the current album
    const album = data.currentAlbum;
    if (!album) {
      // fallback message
      await fetch(SLACK_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `⚠️ No current album in group \`${GROUP_ID}\`.`
        })
      });
      console.log("⚠️ Posted fallback message to Slack.");
      return;
    }

    // 3. Build the Slack message
    const message = {
      text: `🎧 *Today's album:* *${album.name}* by *${album.artist}* (${album.releaseDate})\n🔗 [Listen & rate on 1001 Albums Generator](${album.globalReviewsUrl})\n📖 [Wikipedia](${album.wikipediaUrl})\n🖼️ ${album.images[1]?.url || album.images[0].url}`
    };

    // 4. Post to Slack
    const slackRes = await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    });
    if (!slackRes.ok) {
      throw new Error(`Slack error: ${slackRes.statusText}`);
    }

    console.log("✅ Posted album to Slack!");
  } catch (err) {
    console.error("❌ Error posting to Slack:", err.message);
    process.exit(1);
  }
}

postAlbumToSlack();
