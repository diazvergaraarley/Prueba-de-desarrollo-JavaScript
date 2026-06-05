# Workspace Reservation SPA

A Single Page Application (SPA) built with Vanilla JavaScript, Vite, TailwindCSS, and JSON Server for managing workspace reservations.

---

## Project Overview

This application allows users to authenticate, create workspace reservations, and manage reservation data according to their assigned role.

The project follows a modular architecture using components, controllers, services, and views to improve maintainability and scalability.

---

## Features

### Authentication

* User login with email and password.
* Session persistence using LocalStorage.
* Protected routes.
* Role-based access control.

### Admin Features

* View all reservations.
* Approve reservations.
* Reject reservations.
* Delete reservations.
* Create reservations.

### User Features

* View only their own reservations.
* Create reservations.
* Delete their own reservations.

---

## Project Structure

```text
src
├── api
│   └── http.js
│
├── components
│   ├── ReservationCard.js
│   └── Sidebar.js
│
├── controllers
│   ├── auth.controller.js
│   └── home.controller.js
│
├── routes
│   └── index.js
│
├── services
│   ├── auth.service.js
│   └── reservation.service.js
│
├── utils
│   └── index.js
│
├── views
│   ├── homeView.js
│   └── loginView.js
│
├── main.js
└── style.css
```

---

## Technologies Used

* JavaScript (ES6+)
* Vite
* TailwindCSS
* JSON Server
* LocalStorage

---

## Installation

### 1. Clone the repository


```bash
cd project-management-spa
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Start JSON Server

```bash
npx json-server db.json
```

API available at:

```text
http://localhost:3000
```

Application available at:

```text
http://localhost:5173
```

---

## Test Accounts

### Administrator

```text
Email: admin@test.com
Password: A123456
```

### User 1
```text
Name: Carlos 
Email: user@test.com 
Password: A123456
```
### User 2

```text
Name: Isaac 
Email: user2@test.com
Password: A123456
```
### User 3
```text
Name: Abraham 
Email: user3@test.com
Password: A123456
```
### User 3
```text
Name: Sebastián 
Email: user4@test.com
Password: A123456
```
---

## API Endpoints

### Users

```http
GET /users
```

### Reservations

```http
GET /reservations
```

```http
POST /reservations
```

```http
PATCH /reservations/:id
```

```http
DELETE /reservations/:id
```

---

## Application Workflow

### Login

1. The user enters their credentials.
2. The application validates the data against the API.
3. User information is stored in LocalStorage.
4. The user is redirected to the dashboard.

### Creating Reservations

1. The user fills out the reservation form.
2. A POST request is sent to the API.
3. The reservation is created with the default status:

```text
pending
```

4. The interface updates automatically.

### Reservation Management

#### Administrator

Can change reservation status to:

* pending
* approved
* rejected

Can also delete reservations.

#### User

Can view only their own reservations and delete them.

---

## User Interface

The application includes:

* Responsive sidebar navigation.
* Role-based dashboard.
* Reservation creation form.
* Dynamic reservation cards.
* Visual status indicators.

### Status Colors

| Status   | Color  |
| -------- | ------ |
| approved | Green  |
| pending  | Yellow |
| rejected | Red    |

---

## Security

* Session validation.
* Protected routes.
* Role-based authorization.
* Administrative actions hidden from standard users.

---

## Future Improvements

Potential enhancements for future versions:

* Full reservation editing.
* Search and filtering.
* Pagination.
* Advanced form validation.
* Toast notifications.
* Confirmation modal before deletion.
* JWT authentication.
* Production deployment.

---

## Author

**Arley Díaz Vergara**

Academic project developed to practice Single Page Application (SPA) architecture using Vanilla JavaScript, Vite, TailwindCSS, and JSON Server.