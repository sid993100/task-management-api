# Task Management System API

## Overview

This is a RESTful API for a task management system. The API allows users to register, authenticate, and manage tasks. Users can create, read, update, and delete tasks. Additionally, tasks can be assigned to users, and the API supports filtering and searching of tasks based on various criteria.

## Features

- **User Registration and Authentication**: Users can register and log in to receive a JWT token for authenticated requests.
- **Task Management**: Users can create, read, update, and delete tasks. Tasks include fields such as title, description, status, priority, due date, etc.
- **Task Assignment**: Tasks can be assigned to specific users.
- **Filtering and Searching**: Tasks can be filtered by status, priority, and due date, and searched by title or description.
- **Dockerization**: The application is containerized using Docker and can be easily set up using Docker Compose.

## Technologies Used

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **PostgreSQL**: Relational database for storing user and task data.
- **Sequelize**: ORM for managing database operations.
- **JWT (JSON Web Token)**: For secure user authentication.
- **Docker**: For containerizing the application.
- **Docker Compose**: For orchestrating multi-container applications.

## Installation and Setup

### Prerequisites

- Node.js and npm installed.
- Docker and Docker Compose installed.

### Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sid993100/task-management-api.git
   cd task-management-api
