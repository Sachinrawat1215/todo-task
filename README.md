# 📝 Modern Todo App

A beautiful, feature-rich todo application built with React and Vite. Stay organized and productive with an intuitive interface, drag-and-drop functionality, and dark/light theme support.

![Todo App Preview](https://limetraytodo.netlify.app/)

## ✨ Features

- **📋 Task Management**: Create, edit, complete, and delete tasks
- **🎯 Smart Filtering**: View all tasks, pending tasks, or completed tasks
- **🎨 Theme Support**: Toggle between light and dark themes
- **🖱️ Drag & Drop**: Reorganize tasks with intuitive drag-and-drop
- **💾 Local Storage**: Your tasks persist between sessions
- **📱 Responsive Design**: Works perfectly on desktop and mobile
- **🎭 Modern UI**: Clean, Vercel-inspired design with smooth animations
- **♿ Accessibility**: Full keyboard navigation and screen reader support

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sachinrawat1215/todo-task
   cd to-do-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action!

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── TaskForm.jsx    # Task creation form
│   ├── TaskItem.jsx    # Individual task component
│   ├── TaskList.jsx    # Task list container
│   ├── FilterButtons.jsx # Filter controls
│   ├── ThemeToggle.jsx # Theme switcher
│   └── DeleteConfirmationModal.jsx
├── context/            # React context providers
│   ├── TaskContext.jsx # Task state management
│   └── ThemeContext.jsx # Theme state management
├── hooks/              # Custom React hooks
│   └── useLocalStorage.js
├── icons/              # SVG icon components
│   ├── CheckIcon.jsx
│   ├── DeleteIcon.jsx
│   ├── MoonIcon.jsx
│   ├── SunIcon.jsx
│   └── UndoIcon.jsx
└── App.jsx            # Main application component
```

## 🎨 Technologies Used

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React DnD** - Drag and drop functionality
- **CSS Variables** - Dynamic theming support
- **Local Storage API** - Data persistence
- **ESLint** - Code quality and consistency

## 🌟 Key Features Explained

### Theme System
The app includes a sophisticated theme system with:
- Light and dark mode support
- CSS variables for consistent theming
- Persistent theme preference
- Smooth transitions between themes

### Task Management
- **Create**: Add new tasks with the input form
- **Complete**: Mark tasks as done with the check button
- **Undo**: Revert completed tasks back to pending
- **Delete**: Remove tasks with confirmation modal
- **Filter**: View tasks by status (All, Pending, Completed)

### Drag & Drop
- Drag tasks between different status columns
- Visual feedback during drag operations
- Automatic status updates on drop

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from Vercel's design system
- Icons created as custom SVG components
- Built with modern React patterns and best practices

---

**Made with ❤️**

*Stay organized, stay productive!* 🚀
