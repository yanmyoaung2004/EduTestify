# EduTestify

EduTestify is a comprehensive e-learning platform designed to enhance learning and testing experiences for both students and teachers. The platform provides tools for user management, quiz creation, quiz attempts, and performance tracking, all wrapped in a user-friendly and accessible interface.

## Key Features

-   **User Management**: Effortlessly manage students, teachers, and administrators.
-   **Quiz Creation and Attempting**: Teachers can create quizzes, while students can attempt them in a seamless environment.
-   **Performance Tracking**: Students and teachers can monitor progress and results through detailed performance metrics.
-   **User-Friendly Interface**: Simplified navigation and design for all users.
-   **Light and Dark Themes**: Accessibility features to accommodate diverse preferences and needs.
-   **Efficient Database Management**: A robust system ensures quick and reliable data storage and retrieval.

## Technology Stack

-   **Frontend**: React with TypeScript
-   **Backend**: Laravel
-   **Database**: MySQL
-   **Styling**: Tailwind CSS

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yanmyoaung2004/EduTestify.git
    ```

2. Navigate to the project directory:

    ```bash
    cd edutestify
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

    or

    ```bash
    composer install
    ```

4. Configure the environment file:

    - Rename `.env.example` to `.env` and update the database credentials and other configurations.

5. Run database migrations:

    ```bash
    php artisan migrate
    ```

6. Start the development server:

    ```bash
    npm run dev
    ```

    or

    ```bash
    php artisan serve
    ```

## Usage

-   Access the platform at `http://localhost:8000` (or the appropriate URL).
-   Register as a teacher or student and explore the features.

## Contribution

We welcome contributions to EduTestify! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push the branch to your fork.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for choosing EduTestify. Together, let’s make learning and testing accessible and efficient for everyone!
