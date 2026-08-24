# NestJS + MongoDB REST API

A production-style backend REST API built with **NestJS**, **TypeScript**, and **MongoDB (Mongoose)**, featuring role-based authorization, custom guards, exception handling, and full CRUD operations.

## Features

- 🔐 **Role-Based Access Control (RBAC)** — custom decorators, guards, and metadata reflection to restrict routes by user role
- 🗄️ **MongoDB Integration** — Mongoose schemas with `@nestjs/mongoose`
- 📦 **Full CRUD API** — Create, Read, Update operations for resources
- 🛡️ **Custom Exception Filters** — consistent, structured error responses
- 🧩 **Middleware** — request logging with custom middleware
- ⚙️ **Environment Config** — secure config management via `@nestjs/config`
- 🔄 **Lifecycle Hooks** — module init/shutdown event handling
- ✅ **Unit Testing** — Jest-based test coverage for controllers, services, and guards

## Tech Stack

- **Framework:** NestJS (TypeScript)
- **Database:** MongoDB Atlas (Mongoose ODM)
- **Testing:** Jest
- **Auth Pattern:** Role-based Guards + Custom Decorators

## Getting Started

### Prerequisites
- Node.js (LTS)
- MongoDB Atlas account (or local MongoDB)

### Installation
\`\`\`bash
git clone https://github.com/your-username/nestjs-mongodb-rest-api.git
cd nestjs-mongodb-rest-api
npm install
\`\`\`

### Environment Setup
Create a \`.env\` file in the root directory:
\`\`\`
MONGO_URI=your_mongodb_connection_string
PORT=3000
\`\`\`

### Run the app
\`\`\`bash
npm run start:dev
\`\`\`

### Run tests
\`\`\`bash
npm run test
\`\`\`

## API Endpoints

| Method | Endpoint | Description | Access |
|--------|----------|--------------|--------|
| POST   | /student | Create a new student | Public |
| GET    | /student | Get all students | Public |
| GET    | /student/:id | Get student by ID | Public |
| PUT    | /student/:id | Update student by ID | Public |
| GET    | /user-roles/admin-data | Admin-only data | Admin role |
| GET    | /user-roles/user-data | Open data | Public |

## Project Structure
\`\`\`
src/
├── guards/          # Role-based auth guards
├── filters/          # Custom exception filters
├── middleware/       # Request logging middleware
├── student/          # Student CRUD module
├── database/         # DB lifecycle hooks
└── ev/               # Environment config demo
\`\`\`

## Author
**Sohaib Ahmed Farooqi** — Flutter Developer transitioning into full-stack development with NestJS.

## License
MIT
