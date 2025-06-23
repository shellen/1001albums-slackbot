# 🎧 1001 Albums Slack Bot

A simple GitHub Actions-powered bot that fetches the daily album from your [1001 Albums Generator](https://1001albumsgenerator.com) group and posts it to a Slack channel.

Perfect for your #music channel, group listening clubs, and Slack communities of taste and style.

---

## 💡 What It Does

- Pulls the current album from your group's JSON feed on 1001 Albums Generator
- Posts album details (name, artist, year, cover art, Wikipedia link) to a Slack channel
- Uses Slack Block Kit formatting for clean and interactive layout
- Runs daily via GitHub Actions, no server or deployment needed

---

## 🚀 Setup Instructions

### 1. Clone this repo

```bash
git clone https://github.com/shellen/1001albums-slackbot.git
cd 1001albums-slackbot
````

### 2. Install dependencies (for local testing only)

```bash
npm install
```

### 3. Add a Slack App with Incoming Webhooks

1. Go to [Slack API: Create an App](https://api.slack.com/apps)
2. Create an app from scratch (e.g., `Album Bot`)
3. Enable **Incoming Webhooks**
4. Create a new webhook for the channel you want to post in
5. Copy the webhook URL

### 4. Configure GitHub Secrets

Go to your GitHub repo → **Settings → Secrets → Actions** → Add the following secrets:

| Name                | Value                                                           |
| ------------------- | --------------------------------------------------------------- |
| `SLACK_WEBHOOK_URL` | Your Slack Incoming Webhook URL                                 |
| `GROUP_ID`          | Your 1001 Albums Generator group ID (e.g. `my-group-name`) |

### 5. Commit and Push

Ensure the following files exist and are committed:

* `index.js`
* `package.json` (with `node-fetch@2`)
* `.github/workflows/post-album.yml`

---

## 🧪 Testing the Bot

To test manually:

1. Go to the **Actions** tab of your GitHub repo
2. Click **Post Album to Slack**
3. Click **Run workflow**

You should see a Slack message with the current album from your group!

---

## 🛠 Tech Stack

* Node.js (CommonJS, node-fetch@2)
* GitHub Actions for scheduling and automation
* Slack Incoming Webhooks (via Slack App)
* Uses the `currentAlbum` field from 1001 Albums Generator group JSON API

---

## 💬 Example Slack Message

📻 1001 Albums Pick of the Day

🎧 Today's album:
*Are You Experienced* by *Jimi Hendrix* (1967)

🖼️ [Album cover displayed here]

[ 🎵 Listen & Rate ]   [ 📖 Wikipedia ]

---

## 🧼 Future Ideas

* Support multiple groups / channels
* Add rich Slack blocks or @mentions
* Retry logic for API failure
* GitHub badge for "Now Playing" in README

---

## 📄 License

MIT — feel free to fork and remix!

---

## 🙌 Thanks

* [1001 Albums Generator](https://1001albumsgenerator.com) for their awesome service
* Slack team for making integrations still kinda fun

