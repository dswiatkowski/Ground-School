# Installing KAPA Ground School on Your Android Phone

The app is now a Progressive Web App (PWA). On Android, PWAs install to your home screen and behave just like apps from the Play Store. They run full-screen, work offline, and keep your progress between sessions.

There are two steps: host the files so your phone can reach them, then install on your phone.

---

## Step 1: Host the Files (5 Minutes, Free)

PWAs need to be served over HTTPS. You cannot install from a file on your computer. Pick one of these free hosting options.

### Option A: Netlify Drop (Easiest, 60 Seconds)

This is the fastest path. No account required.

1. On your Mac, open Finder and navigate to your Private Pilot Training folder.
2. In your browser, go to https://app.netlify.com/drop
3. Drag the entire **Private Pilot Training folder** onto the page where it says "Drag and drop your site folder here."
4. Wait about 30 seconds. Netlify will show a URL like `https://amazing-cake-12345.netlify.app`. That URL is your hosted app.
5. Copy that URL. You will use it on your phone in Step 2.

The URL is permanent and free. You can update the app later by dragging the folder again.

### Option B: GitHub Pages (More Permanent, 5 Minutes)

If you want a more permanent home and don't mind a tiny bit more setup:

1. Create a free GitHub account at https://github.com if you don't have one.
2. Click the "+" icon at top right, then "New repository."
3. Name it something like `ground-school`. Make it public. Click "Create repository."
4. Click "uploading an existing file" link on the next screen.
5. Drag every file from your Private Pilot Training folder onto the upload area.
6. Scroll down and click "Commit changes."
7. Go to the repository's Settings tab, then "Pages" in the left sidebar.
8. Under "Build and deployment," set Source to "Deploy from a branch," Branch to "main," and click Save.
9. After about a minute, your URL appears at the top: `https://yourusername.github.io/ground-school`

### Option C: Your Own Server

If you have a web server, just upload all the files in the Private Pilot Training folder to a directory served over HTTPS. The URL of that directory is what you'll use on your phone.

---

## Step 2: Install on Your Android Phone

Once you have a URL from Step 1:

1. On your Android phone, open **Chrome** (not Firefox or Samsung Browser for the first install; you can switch later).
2. Type or paste the URL into the address bar and tap Go.
3. Wait for the app to load. The Ground School cockpit screen appears.
4. Tap the **menu (⋮)** at the top right of Chrome.
5. Tap **"Install app"** or **"Add to Home screen"** (the exact wording depends on your Android version).
6. Confirm. An icon appears on your home screen.
7. Tap the icon. The app opens full-screen with no browser bar, just like a real app.

Your progress (XP, streak, completed lessons, callsign) is saved locally on your phone. It will persist between sessions. It will NOT sync to your laptop automatically; the laptop and phone keep separate progress.

---

## What Works Offline

After your first visit (where the service worker caches everything), the app works offline. You can study on a flight, on the subway, anywhere without signal. The only things that require internet are:

- The "Read on FAA.gov" links (they open external PDFs)
- The FAA resource links in the Briefing Room

The curriculum, quizzes, chapter digests, gamification, and your progress all work offline.

---

## If You Want a Real APK File Instead

If you specifically need a downloadable APK (for example, to sideload onto a phone without internet, or to distribute it):

1. Host the app using Step 1 above.
2. Go to https://www.pwabuilder.com
3. Paste your app's URL into the field at top.
4. Click "Start" and wait for it to analyze your PWA.
5. Click "Package for stores," then choose "Android."
6. Configure the package details (app name, etc.) and click "Download Package."
7. You'll get a `.zip` containing an installable APK plus instructions.
8. Transfer the APK to your phone, enable "Install unknown apps" for your file manager in Android Settings, then tap the APK to install.

PWABuilder is free and built by Microsoft for this exact purpose. The APK behaves identically to the PWA but installs as a real app icon.

---

## Updating the App Later

When the app is updated (new content, fixed bugs, etc.):

- **If hosted on Netlify Drop:** just drag the updated folder onto Netlify Drop again, using the same URL. The service worker will automatically fetch the new version on next launch.
- **If hosted on GitHub Pages:** push the new files to your repo. GitHub Pages rebuilds in a minute.

The PWA detects the updated `sw.js` (the cache version bumped), refreshes the cache, and serves the new content next launch.

---

## Troubleshooting

**"Install app" doesn't appear in Chrome menu.**
This means Chrome doesn't recognize the site as installable yet. Reload the page, wait 30 seconds, try the menu again. If still missing, check that the URL is HTTPS (not http://).

**App doesn't work offline after install.**
Open the app while online once to let the service worker cache everything. Close it. Now try offline.

**Progress isn't saving.**
Make sure you're not in Chrome's Incognito mode. Localstorage doesn't persist in incognito.

**Icon looks wrong on home screen.**
Some Androids cache the old icon. Remove the home-screen icon, reinstall the app fresh.

**My iPad/iPhone too?**
Yes. On iPad/iPhone, use Safari (not Chrome). Open the URL, tap the Share button, then "Add to Home Screen." Works the same.
