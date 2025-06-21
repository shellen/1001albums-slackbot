Here's a clean and developer-friendly `README.md` for your **1001 Albums Slack Bot** project:

---

````md
# 🎧 1001 Albums Slack Bot

A simple GitHub Actions-powered bot that fetches the daily album from your [1001 Albums Generator](https://1001albumsgenerator.com) group and posts it to a Slack channel.

Perfect for group listening clubs, music nerds, and Slack communities who want to keep the rhythm alive.

---

## 💡 What It Does

- Pulls the current album from your 1001 Albums Generator group via its public JSON API
- Posts the album title, artist, release year, Wikipedia link, and album art to Slack
- Runs daily via GitHub Actions, no server or deployment needed

---

## 🚀 Setup Instructions

### 1. Clone this repo

```bash
git clone https://github.com/YOUR_USERNAME/1001albums-slackbot.git
cd 1001albums-slackbot
````

### 2. Install dependencies (for local testing)

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
| `GROUP_ID`          | Your 1001 Albums Generator group ID (e.g. `computersocialclub`) |

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

* Node.js (CommonJS, `node-fetch@2`)
* GitHub Actions (cron + workflow\_dispatch)
* Slack Incoming Webhooks
* 1001 Albums Generator public API

---

## 💬 Example Slack Message

```
🎧 Today's album: *OK Computer* by *Radiohead* (1997)
🔗 https://en.wikipedia.org/wiki/OK_Computer
🖼️ https://upload.wikimedia.org/...
```

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

```

---

Let me know if you'd like a version with screenshots or a more visual "setup" section!
```
