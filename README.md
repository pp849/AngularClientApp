# 📝 Angular Task Manager Application - Pruthvi Patel

## 🌟 Project Overview
This is a modern **Angular 18** single-page application that demonstrates the power of the Angular framework through the following features:

- **Standalone Components Architecture**  
- **Client-Side Routing** with multiple views  
- **API Data Integration** for displaying news  
- **Task Management System** with full CRUD operations  
- **Feedback Form** with reactive forms and input validation  
- **Responsive Design** with custom styling  

## 🚀 Live Demo
🔗 [Live Demo of the Angular Client App](https://angular-client-app-wheat.vercel.app/home)

## 📂 Project Structure
Here’s an overview of the project structure:

```
src/
├── app/
│   ├──  home/       → HomeComponent (Landing page)
│   ├── news/        → NewsComponent (Displays fetched news)
│   ├── form/        → FeedbackFormComponent (Reactive form with validation)
│   ├── task/        → TaskComponent (Task management with CRUD functionality)
│   ├── services/
│   │   └── news.service.ts   → Fetches news data from API
│   ├── app.config.ts    → Angular providers (router, http)
│   ├── app.routes.ts    → Route definitions
│   ├── app.component.ts → Root component (App component)
│   ├── app.component.html → HTML template for the root component
│   └── app.component.css  → Styling for the root component
├── index.html           → Main HTML template for the app
├── main.ts              → Application entry point
└── styles.css           → Global styles
```


## 🧩 Key Features

### 📋 Task Management
- Add, view, and delete tasks
- Mark tasks as completed
- Search tasks by keyword

### 📰 News Feed
- Fetches data from an external API
- Clean, card-based display for the news items
- Manual refresh for the news feed

### 📝 Feedback Form
- Fully implemented **Reactive Form**
- Input validation with clear error messages
- Form submission handling

### 🏠 Home Page
- Application introduction and welcome message
- Easy navigation to all features
- Clean and responsive design

## 💻 Technology Stack
| Technology        | Purpose                                              |
|-------------------|------------------------------------------------------|
| **Angular 18**    | Frontend framework                                   |
| **Standalone Components** | Modern Angular architecture                  |
| **Angular Router**| Client-side navigation                               |
| **Reactive Forms**| Efficient form handling with validation              |
| **HTTP Client**   | Fetching external data from APIs                     |
| **CSS**           | Custom styling and responsive design                 |
| **Vercel**        | Deployment platform for hosting the application      |

## 🛠️ Development Setup

### Step 1: Clone the Repository

git clone https://github.com/your-username/angular-client-app.git
Navigate to the project directory:
cd angular-client-app

###Step 2: Install Dependencies
Install the necessary packages and dependencies:
npm install

###Step 3: Run the Development Server
Start the Angular development server:
ng serve

###Step 4: Open the Application
Open your browser and go to http://localhost:4200 to view the application.

##🚀 Deployment

-This application is configured for easy deployment to Vercel:
-Push your code to a GitHub repository.
-Create a new project on Vercel.
-Link your GitHub repository to Vercel.
-Vercel will automatically detect the Angular project and deploy it.

##📝 Author
Pruthvi Patel

