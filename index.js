const fetch = require("node-fetch");

const GROUP_ID = process.env.GROUP_ID;
const API_URL = `https://1001albumsgenerator.com/api/v1/groups/${GROUP_ID}`;
const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;

async function postAlbumToSlack() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    const album = data[0]; // today's album

    const message = {
      text: `🎧 *Today's album:* *${album.album}* by *${album.artist}* (${album.year})\n🔗 ${album.wiki_link}\n🖼️ ${album.image}`
    };

    const slackRes = await fetch(SLACK_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    });

    if (!slackRes.ok) throw new Error(`Slack API error: ${slackRes.statusText}`);
    console.log("Posted album to Slack!");
  } catch (err) {
    console.error("Error:", err);
    process.exit(1);
  }
}

postAlbumToSlack();
