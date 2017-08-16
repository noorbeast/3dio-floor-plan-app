# 3d.io Floor Plan App

!!! WORK IN PROGRESS !!! EXPECT CHANGES !!!

* Converts floor plans into [basic 3d models](https://3d.io/floor-plan-to-3d-conversion.html) using 3d.io APIs.
* Stores conversion related info in a database.
* Sends email notification when conversion is done.

## Install

1. **Deploy app to heroku**
2. **Create accounts for 3d.io, database, email:**

Url | Purpose
--- | ---
https://3d.io | Floor plan conversion
https://firebase.com | Database
https://sendgrid.com | Email
https://ngrok.com | Public tunnel to localhost for local testing of 3d.io conversion status update callbacks. (optional)

3. **Set environment variables**

Name | Example
--- | ---
PUBLIC_SERVER_URL | https://your-server-url.com
EMAIL_FROM | floor-plan@your-domain.com
EMAIL_ADMIN | admin@your-domain.com
3DIO_SECRET_API_KEY | 51ebcf63-d5d...
SENDGRID_API_KEY | SG.wBcemOAdRZ-yC-Zwz1ZhPw.uw5h5VhS...
FIREBASE_PRIVATE_KEY | -----BEGIN PRIVATE KEY-----\nMIIEvAIBADA...
FIREBASE_CLIENT_EMAIL | xyz@your-project-id.iam.gserviceaccount.com
FIREBASE_DATABASE_URL | https://your-project-id.firebaseio.com

4. **Modify email messages to your customers in:**
   * api/convert-floor-plan-to-3d.js
   * api/on-conversion-status-update.js
