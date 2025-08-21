# Project-95 Backend

The backend service for **Project-95**, built with **Node.js**, **Express**, and **MongoDB**.  
This API currently handles **message submissions**, storing them in MongoDB.

---

## Features
- REST API built with **Express.js**
- Database integration with **MongoDB** via **Mongoose**
- Environment variable management with **dotenv**
- CORS enabled for cross-origin requests
- Written in **TypeScript** for type safety
- Nodemon + ts-node for development

---

## Tech Stack
- **Runtime:** Node.js  
- **Language:** TypeScript  
- **Framework:** Express.js  
- **Database:** MongoDB (via Mongoose)  
- **Environment Variables:** dotenv  

---

## Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/stha-prasun/Project-95-Backend.git
cd Project-95-Backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables  
Create a `.env` file in the root directory and configure:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Run in development mode
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

### 6. Start the server
```bash
npm start
```

---

## Project Structure
```
Project-95-Backend/
│── src/              
│   ├── index.ts       # Entry point
│   ├── routes/        # API routes
│   ├── controllers/   # Request handlers
│   │   └── message.ts # Message controller
│   ├── models/        # Mongoose schemas
│   │   └── messageSchema.ts
│   └── config/        # Handles database connection
│── dist/              # Compiled JS output
│── package.json
│── tsconfig.json
│── .env
```

---

## API Documentation

### Base URL
```
http://localhost:5000/api/v1
```

### Endpoints

#### Send Message
- **POST** `/message/send`

**Request Body**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello from Project-95!"
}
```

**Responses**
- **201 Created**
```json
{
  "message": "Message Sent Successfully",
  "success": true
}
```

- **400 Bad Request**
```json
{
  "message": "Fields cannot be left empty",
  "success": false
}
```

- **500 Internal Server Error**
```json
{
  "message": "Internal server error",
  "success": false
}
```

---

## Scripts
- `npm run dev` – Start development server with Nodemon + ts-node  
- `npm run build` – Compile TypeScript to JavaScript (output in `dist/`)  
- `npm start` – Run production build (`dist/index.js`)  

---

## Contributing
1. Fork the repository  
2. Create your feature branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m 'Add some feature'`)  
4. Push to the branch (`git push origin feature/your-feature`)  
5. Open a Pull Request  

---

## Issues
Found a bug or want to suggest a feature?  
👉 [Open an issue](https://github.com/stha-prasun/Project-95-Backend/issues)

---  
