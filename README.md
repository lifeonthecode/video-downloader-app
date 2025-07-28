# 🎥 Video Downloader App

A full-stack Video Downloader application that allows users to download YouTube videos easily. Built using modern technologies like **React.js**, **Tailwind CSS**, **React Router**, and **Express.js**.

---

## 🚀 Features

- 🎞️ Download YouTube videos with ease
- 📂 Clean UI
- 📩 Contact form integration with Nodemailer
- 🎬 Playlist support using `ytpl`
- 🎧 Audio/Video stream handling using `distube-ytdl-core`
- 🌐 API communication with Express and CORS

---

## 🛠️ Technologies Used

### Frontend:
- ⚛️ React.js
- 💨 Tailwind CSS
- 🌐 React Router DOM

### Backend:
- 🧠 Express.js
- 🔐 dotenv
- 📫 Nodemailer
- 🌍 CORS
- 📃 ytpl
- 🎼 distube-ytdl-core

---

## 📁 Project Structure

video-downloader-app/
│
├── frontend/ # React frontend with Tailwind
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── App.jsx
│
├── backend/src # Node + Express backend
│ ├── routes/
│ ├── utils/
│ ├── .env
│ └── server.js
│
└── README.md


---

## ⚙️ Getting Started

### Clone the repository:
```bash
git clone https://github.com/lifeonthecode/video-downloader-app.git
cd video-downloader-app
Setup Frontend:

cd frontend
npm install
npm run dev
Setup Backend:



cd backend
npm install
npm run dev
💡 Make sure to add your .env file in the backend folder with appropriate email and port configuration.

📬 Contact Form Configuration
Configure the following in .env:

ini

EMAIL_USER=your_email@example.com
EMAIL_PASS=your_password_or_app_password

📦 API Endpoints
Method	Endpoint	Description
GET	/api/info	Get video info
POST	/api/contact	Send contact form message
GET	/api/playlist	Fetch playlist info
GET	/api/download	Stream/download video/audio

🖼️ Screenshots
Add some screenshots of your UI here.

📄 License
This project is licensed under the MIT License. Feel free to use and modify.

🙌 Acknowledgements
ytpl
distube-ytdl-core
React Router
Tailwind CSS