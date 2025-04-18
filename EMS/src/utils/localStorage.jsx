// localStorage.clear()

const employees = [
  {
    id: 1,
    firstName: "Varsha",
    email: "varsha@example.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Design Login Page",
        description: "Create a responsive login page for the app.",
        date: "2025-04-15",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "UI Feedback Fixes",
        description: "Update UI based on user feedback.",
        date: "2025-04-12",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Dark Mode Styling",
        description: "Apply dark mode styles to all components.",
        date: "2025-04-10",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Ruchika",
    email: "ruchika@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Fix Navigation Bug",
        description: "Resolve dropdown issue in navbar.",
        date: "2025-04-13",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Responsive Footer",
        description: "Make footer responsive on mobile.",
        date: "2025-04-10",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Deploy Build",
        description: "Deploy latest changes to production.",
        date: "2025-04-11",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Form Validation",
        description: "Add validations to user registration form.",
        date: "2025-04-14",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Aditya",
    email: "aditya@example.com",
    password: "123",
    taskCounts: { active: 1, newTask: 1, completed: 3, failed: 1 },
    tasks: [
      {
        title: "API Integration",
        description: "Connect frontend with new backend API.",
        date: "2025-04-15",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Error Handling",
        description: "Implement error boundary for all pages.",
        date: "2025-04-13",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Performance Optimization",
        description: "Reduce bundle size using code-splitting.",
        date: "2025-04-12",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Database Migration",
        description: "Update schema and migrate to new version.",
        date: "2025-04-11",
        category: "Backend",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "JWT Setup",
        description: "Implement JSON Web Token for login flow.",
        date: "2025-04-10",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Rishi",
    email: "rishi@example.com",
    password: "123",
    taskCounts: { active: 1, newTask: 0, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Unit Testing",
        description: "Write tests for all utility functions.",
        date: "2025-04-14",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Bug Reporting",
        description: "Log and report frontend bugs.",
        date: "2025-04-13",
        category: "QA",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Test Cases for API",
        description: "Write automated tests for endpoints.",
        date: "2025-04-12",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Shreya",
    email: "shreya@example.com",
    password: "123",
    taskCounts: { active: 2, newTask: 1, completed: 1, failed: 1 },
    tasks: [
      {
        title: "Onboarding UI",
        description: "Design onboarding flow for new users.",
        date: "2025-04-15",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Profile Page Design",
        description: "Create responsive profile UI.",
        date: "2025-04-12",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Banner Illustrations",
        description: "Design banners for landing page.",
        date: "2025-04-10",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Style Guide",
        description: "Prepare visual design style guide.",
        date: "2025-04-13",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];
 export const setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))

 }
 export const getLocalStorage=()=>{
const employees=JSON.parse(localStorage.getItem('employees'))
const admin=JSON.parse(localStorage.getItem('admin'))

console.log(employees,admin)
return { employees };
 }