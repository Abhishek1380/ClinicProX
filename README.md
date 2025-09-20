# ClinicProX

**ClinicProX** is a full-stack clinic managementt system built using the **MERN stack** and **TypeScript**, designed for real-world clinical workflows. It features secure authentication, role-based access control, and a scalable, modular backend architecture supporting both users and administrators.

> This is a production-level upgrade of a real-time clinic project, redesigned for better code organization, maintainability, and performance.

---

## ✨ Features

- 🔐 **JWT Authentication** – Secure login and signup functionality
- 👥 **Role-Based Access** – Admin/user separation with protected routes
- ⚙️ **Modular Backend** – Clean separation of controllers, routes, and middlewares
- 🧩 **RESTful API Design** – Easy to extend and integrate
- 💻 **Responsive Frontend** – Built with React and Tailwind CSS (in progress)
- 🧠 **Full TypeScript Support** – For both frontend and backend

---

## 🛠 Tech Stack

### Backend
- Node.js + Express
- MongoDB + Mongoose
- TypeScript
- JSON Web Tokens (JWT)
- bcrypt

### Frontend (In Progress)
- React + TypeScript
- Tailwind CSS
- Axios

---

## 📁 Folder Structure

```
ClinicProX/
├── backend/
│   ├── controllers/
│   │   └── dbController.ts
│   ├── models/
│   │   └── User.ts
│   ├── routes/
│   │   └── auth.ts
│   ├── middlewares/
│   │   └── authMiddleware.ts
│   ├── app.ts
│   ├── .env
│   └── package.json
└── frontend/ (coming soon)
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Abhishek1380/ClinicProX.git
cd ClinicProX/backend
```

### 2. Install Backend Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend/` directory with the following content:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Start the Backend Server

```bash
npm run dev
```

The backend server will run at:  
**http://localhost:5000/**

---

## 🔐 Auth API Endpoints

| Method | Endpoint           | Access   | Description             |
|--------|--------------------|----------|-------------------------|
| POST   | `/api/auth/signup` | Public   | Register a new user     |
| POST   | `/api/auth/login`  | Public   | Login and get JWT token |
| GET    | `/api/user/me`     | Private  | Get logged-in user info |

---

## 📌 Project Status

| Feature                      | Status         |
|------------------------------|----------------|
| Backend APIs                 | ✅ Complete     |
| JWT Role System              | ✅ Complete     |
| Frontend (React + TS)        | ⏳ In Progress  |
| Admin Panel                  | ⏳ Coming Soon  |
| Deployment (Render/Vercel)  | ⏳ Coming Soon  |

---

## 📈 Roadmap

- Admin dashboard
- Appointment booking system
- Patient history and records
- Email/notification integration
- Production deployment

---

## 👨‍💻 Author

**Abhishek Santosh Unde**  
Full-Stack Developer (MERN + TypeScript)  
- [GitHub](https://github.com/Abhishek1380)  
- [LinkedIn](https://www.linkedin.com/in/abhishek-santosh-unde-434212346)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
