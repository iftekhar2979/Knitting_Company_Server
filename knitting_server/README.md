# Knitting Company Server (Laravel)

This is the backend server for the Knitting Company application, built with Laravel 13.

## Prerequisites

Ensure you have the following installed on your system:

- **PHP 8.3+**
- **Composer**
- **Node.js & npm**
- **SQLite** (or your preferred database engine)

## Getting Started

Follow these steps to set up and run the server locally.

### 1. Initial Setup

The project includes a convenient setup script that handles dependency installation, environment configuration, and database migrations.

Run the following command in the `knitting_server` directory:

```bash
composer run setup
```

This command will:
- Install PHP dependencies via Composer.
- Create a `.env` file from `.env.example` (if it doesn't exist).
- Generate the application key.
- Run database migrations.
- Install npm packages.
- Build frontend assets.

### 2. Configure Environment

Open the `.env` file and verify your database and JWT settings:

- **Database:** By default, it uses SQLite. If you wish to use MySQL, update the `DB_CONNECTION`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD` fields.
- **JWT Secret:** Ensure `JWT_SECRET` is set for authentication.

### 3. Running the Development Server

To start the development environment (including the Laravel server, Vite, and queue worker), run:

```bash
composer run dev
```

The application will be available at [http://localhost:8000](http://localhost:8000).

## Available Commands

- `composer run setup`: Full initial project setup.
- `composer run dev`: Start the development environment (Server, Queue, Logs, Vite).
- `php artisan serve`: Start only the Laravel development server.
- `npm run dev`: Start the Vite development server.
- `php artisan migrate`: Run database migrations.
- `php artisan test`: Run the test suite.

## API Documentation

The API routes are defined in `routes/api.php` and organized into sub-files within `routes/api/`.

- **Health Check:** `GET /api/health`
- **Auth:** `POST /api/user/register`, `POST /api/user/login`

Refer to the controller files in `app/Http/Controllers` for detailed implementation logic.
