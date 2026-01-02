# 📚 BookWorm

BookWorm is a full-stack mobile application that allows users to share, browse, and manage book reviews. The app focuses on clean functionality, secure authentication, and efficient data loading using pagination.

---

## 🚀 Technologies Used

- React Native  
- Node.js  
- Express.js  
- MongoDB  
- JWT Authentication  
- Render (Backend Deployment)

---

## ✨ Features

- User authentication (Signup / Login / Logout)
- Add a book review
- Delete your own review
- Pagination-based feed for reviews
- Secure backend APIs

---

## 📖 What I Learned

- Building cross-platform mobile applications using React Native
- Implementing pagination in a real-world project
- Deploying a backend on Render
- Handling Render’s auto-sleep feature by creating a cron job that sends a request every 14 minutes to keep the server running continuously

---

## 🔧 How the Project Can Be Improved

- Edit profile page options
- Like functionality for book reviews
- Store and manage user-liked reviews
- Improved UI and animations

---

## 🛠️ Running the Project Locally

Clone the repository and move into the project directory:

```bash
git clone <repository-url>
cd BookWorm
```

Navigate to the backend folder:
```bash 
cd backend
```

Create a .env file in the backend directory and configure it using the .env.example file present in backend folder:

Replace:

- MONGO_URI with your MongoDB connection string (from MongoDB Atlas)
- JWT_SECRET with any strong secret key
- CLOUDINARY_* values with your Cloudinary account credentials
- API_URL with your backend server URL (e.g., http://localhost:8000 or deployed URL)


install backend dependencies

```bash
npm install
```

start backend server
```bash
npm run dev
```

Navigate to the frontend folder:
```bash
cd frontend
```

Install frontend dependencies:

```bash
npm install
```

Start the React Native application:
```bash
npm run dev
```

Ensure that the API_URL in the frontend configuration points to the running backend server.

## 🌐 Deployment Notes

- The backend is deployed on **Render**
- Render automatically shuts down services after **15 minutes of inactivity**
- A **cron job** is used to ping the backend every **14 minutes** to prevent downtime

---

## 🤝 Contributing

Contributions are welcome.  
Feel free to fork the repository and submit a pull request.

---

## 👨‍💻 Author - Harsh Kaushik

**BookWorm** - built as a hands-on project to explore full-stack mobile development and real-world deployment challenges.
