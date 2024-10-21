## Video Game Discovery App

# Overview
The Video Game Discovery App is built using React and TypeScript. It allows users to discover and explore video games, providing detailed information such as descriptions, release dates, platforms, and genres. The app is designed for gaming enthusiasts, offering a fast and intuitive user experience.

# Features
- **Search for Games**:  Users can search for video games by title.
- **Browse by Categories**: Browse games by genres and platforms.
- **Game Details**: View detailed information about each game.
- **Responsive Design**: Fully responsive for both desktop and mobile devices.
  
## Technologies Used
- *React*: Frontend library for building the user interface.
- *TypeScript*: For type safety and improved code quality.
-*React Router*: For handling navigation and routing.
-*Styled Components*: For styling the components.
-*Axios or Fetch API*: To retrieve game data.
-*Game API*: (e.g., RAWG API or IGDB) for fetching game information.
  
# Getting Started
## Prerequisites
Ensure that you have the following installed on your machine:

Node.js (version 14.x or higher)
npm (comes with Node.js)
Installation

# Clone the repository:

```bash
git clone https://github.com/your-username/video-game-discovery-app.git 
```

# Navigate to the project directory:

```bash
cd video-game-discovery-app 
```
# Install dependencies:

```bash
npm install
```
# Create an .env file in the root directory and add your game API key:

```bash
REACT_APP_API_KEY=your_api_key_here
```
# Run the app:

```bash
npm start
```
# The app will be available at: http://localhost:3000


# Folder Structure
```bash
src/
│
├── components/       # Reusable UI components (e.g., GameCard, GameList)
├── pages/            # Pages (e.g., Home, GameDetails)
├── services/         # API service layer
├── styles/           # Application styling (global and component-specific)
├── App.tsx           # Main app component
├── index.tsx         # Application entry point
└── ... 
```
##  Contributing
# Contributions are welcome! Feel free to open issues or submit pull requests for improvements and bug fixes.

# License
This project is licensed under the MIT License.
