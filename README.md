# Full-Stack Registration App

A full-stack user authentication project with a Django REST API backend and a React/Vite frontend.

## Features

- User registration with username, email, and password validation
- JWT login and refresh-token endpoints
- Protected-session token storage in the frontend
- Responsive React interface with animated forms
- Django CORS configuration for local frontend development

## Tech Stack

- **Frontend:** React, Vite, React Router, Framer Motion, React Icons
- **Backend:** Django, Django REST Framework, Simple JWT, django-cors-headers
- **Database:** PostgreSQL

## Project Structure

```text
backend/     Django project and users API
frontend/    React/Vite client application
```

## Requirements

- Python 3.10+
- Node.js 18+
- PostgreSQL

## Backend Setup

1. Open a terminal in the `backend` directory.
2. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   # Windows PowerShell
   .\venv\Scripts\Activate.ps1
   ```

3. Install the backend dependencies:

   ```bash
   pip install django djangorestframework djangorestframework-simplejwt django-cors-headers psycopg2-binary
   ```

4. Set the environment variables used by Django for your local PostgreSQL instance:

   ```powershell
   $env:DJANGO_SECRET_KEY = "replace-with-a-local-secret"
   $env:POSTGRES_DB = "users_data"
   $env:POSTGRES_USER = "postgres"
   $env:POSTGRES_PASSWORD = "replace-with-your-password"
   $env:POSTGRES_HOST = "localhost"
   $env:POSTGRES_PORT = "5432"
   ```

5. Apply migrations and start the API:

   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

The API runs at `http://127.0.0.1:8000/`.

## Frontend Setup

1. Open a second terminal in the `frontend` directory.
2. Install dependencies and start Vite:

   ```bash
   npm install
   npm run dev
   ```

The frontend runs at `http://localhost:5173/`.

## API Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `POST` | `/api/register/` | Create a user account |
| `POST` | `/api/login/` | Obtain access and refresh JWTs |
| `POST` | `/api/login/refresh/` | Refresh an access token |

## Security Note

Do not commit production credentials or Django secret keys. Use environment variables for deployment and keep local configuration out of version control.
