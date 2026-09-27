# Dhaka Local Bus Fare Finder 🚌

![Dhaka Local Bus](https://img.shields.io/badge/Dhaka-Local_Bus_Fare_Finder-ff9800?style=for-the-badge&logo=bus)

A modern, responsive, and user-friendly web application designed to help commuters in Dhaka find the exact local bus fares between different stops according to the official government chart. 

### 🌐 Live Website: [https://dhakalocalbusvara.vercel.app/](https://dhakalocalbusvara.vercel.app/)

---

## 🌟 Features

- **Search Fares**: Instantly find bus fares between any two stops in Dhaka.
- **Bilingual Support**: Search for bus stops in both Bengali and English.
- **Detailed Route Info**: View all connecting bus routes and their respective segments.
- **Fare Matrix**: Get a complete visual breakdown of fares across all stops on a selected route.
- **Responsive Design**: Beautifully optimized for both desktop and mobile devices.
- **Feedback System**: Built-in feedback form allowing users to send suggestions directly to the admin via email.
- **Modern UI/UX**: Features glassmorphism, animated gradients, and a sleek dark theme.

## 🛠️ Technology Stack

- **Frontend**: React.js, Vite, Vanilla CSS
- **Backend**: Node.js, Express.js
- **Email Service**: Nodemailer (for the feedback system)
- **Deployment**: Vercel (Frontend), Render (Backend)

## 🚀 Running Locally

If you want to run this project on your local machine, follow these steps:

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your machine.
- Git installed.

### 1. Clone the repository
```bash
git clone https://github.com/abrarjahinzihan/DHAKA_LOCAL_BUS_VARA.git
cd DHAKA_LOCAL_BUS_VARA
```

### 2. Setup the Backend (Server)
```bash
cd server
npm install
```
- Create a `.env` file in the `server` directory (you can use `.env.example` as a reference):
```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```
- Start the server:
```bash
node server.js
```
*The backend will run on `http://localhost:5000`.*

### 3. Setup the Frontend (Client)
Open a new terminal window and navigate to the client folder:
```bash
cd client
npm install
```
- Start the development server:
```bash
npm run dev
```
*The frontend will run on `http://localhost:5173`.*

## 👨‍💻 Created By
**ABRAR JAHIN ZIHAN**

- [Facebook](https://www.facebook.com/abrarjahinzihan/)
- [Instagram](https://www.instagram.com/abrarjahinzihan/)
- [LinkedIn](https://www.linkedin.com/in/abrar-jahin-zihan-b8b250328)
- [GitHub](https://github.com/abrarjahinzihan)
- [X (Twitter)](https://x.com/ZihanJahinabrar)
- [Lichess](https://lichess.org/@/AbrarJahinZihan)
- [Email](mailto:abrarjahinkhanzihan@gmail.com)

## 📄 Data Source
Fares and routes are updated according to the official BRTA diesel-powered bus fare chart.
(প্রজ্ঞাপন নং-৩৫.০০.০০০০.০২০.২৬.০০৫.১৬-৫৪০)
