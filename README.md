# 3d.io Floor Plan App

* Converts floor plans into [basic 3d models](https://3d.io/floor-plan-to-3d-conversion.html) using 3d.io APIs.
* Stores conversion related info in your database.
* Sends email notification to your cutomer when 3d model is ready.

## Install

### 1. **Deploy app to heroku by clicking this button:**

<a href="https://heroku.com/deploy?template=https://github.com/archilogic-com/3dio-floor-plan-app/tree/master">
  <img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy">
</a>

### 2. **Setup 3d.io, database and email:**

Url | Purpose | Docs
--- | --- | ---
https://3d.io | Floor plan conversion service | [Setup 3d.io](docs/3dio.md)
https://firebase.com | Database service | [Setup firebase](docs/firebase.md)
https://sendgrid.com | Email service | [Setup sendGrid](docs/sendgrid.md)
https://ngrok.com | Public tunnel to your localhost for local testing of 3d.io conversion status update callbacks. (optional) | 

### 3. **Set environment variables**

Name | Example | Notes
--- | --- | ---
PUBLIC_SERVER_URL | `https://your-server-url.com` | The URL where your server is publicly accesslibe. To obtain a public URL for local testing use https://ngrok.com
EMAIL_FROM | `floor-plan@your-domain.com` | Emails to your customers will have this email address in the "from" field 
EMAIL_ADMIN | `admin@your-domain.com` | Email of the administrator responsible for this server. Error notifications will be send here.
3DIO_SECRET_API_KEY | `51ebcf63-d5d...` | Howto: [Setup 3d.io](docs/3dio.md)
SENDGRID_API_KEY | `SG.wBcemOAdRZ-yC-Zwz1ZhPw.uw5h5VhS...` | Howto: [Setup sendGrid](docs/sendgrid.md)
FIREBASE_PRIVATE_KEY | `-----BEGIN PRIVATE KEY-----\nMIIEvAIBADA...` | Howto: [Setup firebase](docs/firebase.md)
FIREBASE_CLIENT_EMAIL | `xyz@your-project-id.iam.gserviceaccount.com` | Howto: [Setup firebase](docs/firebase.md)
FIREBASE_DATABASE_URL | `https://your-project-id.firebaseio.com` | Howto: [Setup firebase](docs/firebase.md)

### 4. **Optional: Modify email messages to your customers in:**
* [api/convert-floor-plan-to-3d.js](https://github.com/archilogic-com/3dio-floor-plan-app/blob/master/api/convert-floor-plan-to-3d.js#L86)
* [api/on-conversion-status-update.js](https://github.com/archilogic-com/3dio-floor-plan-app/blob/master/api/on-conversion-status-update.js#L74)
