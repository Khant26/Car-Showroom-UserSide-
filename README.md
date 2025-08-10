# Car Showroom - React Vite Project

A React application built with Vite that provides both user and admin interfaces for managing car showroom data.

## Features

### User Interface
- Browse car cards with detailed information
- Search functionality for cars
- Filter cars by brand
- Responsive design

### Admin Interface
- Add new cars
- Edit existing car details
- Delete cars
- Car management dashboard

## Tech Stack

- **Frontend**: React 18 with Vite
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Styling**: CSS3 with modern features

## Project Structure

```
src/
├── components/
│   ├── CarCard.jsx           # Reusable car card component
│   ├── Navigation.jsx        # Navigation component
│   └── admin/
│       └── CarForm.jsx       # Form for adding/editing cars
├── pages/
│   ├── UserInterface.jsx     # User view page
│   └── AdminInterface.jsx    # Admin dashboard page
├── services/
│   └── api.js               # API service functions
└── App.jsx                  # Main app component
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/NeeohHaze/Car-Showroom-UserSide-.git
cd Car-Showroom-UserSide-
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API Integration

The application is configured to connect to a Node.js Express MongoDB API. Update the API base URL in `src/services/api.js`:

```javascript
const API_BASE_URL = 'http://localhost:3001/api'; // Update this URL
```

### Expected API Endpoints

- `GET /api/cars` - Get all cars
- `GET /api/cars/:id` - Get car by ID
- `POST /api/cars` - Create new car
- `PUT /api/cars/:id` - Update car
- `DELETE /api/cars/:id` - Delete car

## Environment Configuration

Create a `.env` file in the root directory for environment variables:

```env
VITE_API_BASE_URL=http://localhost:3001/api
```

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## GitHub Repository Connection

To connect this project to the GitHub repository:

1. Install Git if not already installed
2. Initialize Git and add remote:
```bash
git init
git add .
git commit -m "Initial commit - React car showroom project"
git remote add origin https://github.com/NeeohHaze/Car-Showroom-UserSide-.git
git branch -M main
git push -u origin main
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
