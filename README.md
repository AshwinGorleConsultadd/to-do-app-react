# To‑Do App (React)

## Overview
A simple yet fully functional To‑Do list application built with React. It demonstrates a clean, scalable frontend architecture using modern libraries and practices, ideal for managing tasks within a layered structure.

## Libraries Used
- **React** — UI library for component-based development  
- **shadcn UI** — Modern, customizable UI components  
- **zustand** — Simplified state management  

## Prerequisites
- **Language**: TypeScript  
- **Package Manager**: npm  
- **Environment**: Node.js installed

## Installation

### Clone the Repository
```bash
git clone https://github.com/AshwinGorleConsultadd/to-do-app-react
```

### Navigate Into Directory
```bash
cd to-do-app-react
```

### Install Dependencies
```bash
npm install
```

## Usage

Start the development server:

```bash
npm start
```

The app will launch at `http://localhost:3000` by default. It supports:

- Adding new tasks
- Marking tasks as completed
- Editing task titles
- Deleting tasks

## Testing

Run the test suite:

```bash
npm test
```

## Folder Structure

```
/src
  /components     # Reusable UI components (e.g., TodoItem, TodoList, Header, Footer)
  /features       # Redux slices or domain logic (e.g., todos slice)
  /hooks          # Custom hooks
  /app            # Redux store setup and provider
  /utils          # Utility functions/helpers
/public           # Static assets and HTML entry point
package.json
tsconfig.json
```

## State Management
State is centrally managed with Redux Toolkit:

- Slice for todos: actions include add, edit, toggle, delete
- Reducers update task list immutably
- Components dispatch actions and read from selectors

## Future Enhancements

- Add task persistence (localStorage or backend)
- Implement due dates and reminders
- Introduce filters (e.g., Active, Completed)




##  Quick Start

```bash
git clone https://github.com/AshwinGorleConsultadd/to-do-app-react
cd to-do-app-react
npm install
npm start
```
