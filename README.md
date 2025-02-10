# Pokédex React Application

A modern, interactive Pokédex web application built with React that allows users to explore and learn about different Pokémon. This project showcases responsive design, modern React practices, and interactive data visualization.

![Pokédex App Screenshot](public/pokeball.png)

## Features

- **Search Functionality**: Search for Pokémon by name or number
- **Responsive Grid Layout**: View Pokémon in a clean, responsive grid
- **Detailed Pokemon Information**:
  - High-quality sprite images
  - Type information
  - Base stats with visual representations
  - Abilities with detailed descriptions
  - Move lists and information
- **Pagination**: Navigate through the complete Pokémon list
- **Interactive UI Elements**:
  - Animated transitions
  - Hover effects
  - Loading states
- **Mobile-Responsive Design**: Optimized for all device sizes

## Technologies Used

- **React**: Frontend framework for building the user interface
- **Vite**: Next-generation frontend tooling
- **Styled Components**: Styling solution with component-level styles
- **Axios**: HTTP client for API requests
- **PokéAPI**: RESTful Pokémon data source
- **ESLint**: Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nxvafps/fe-react-data-visualisation.git
   cd fe-react-data-visualisation
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

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/         # React components
│   ├── Footer/
│   ├── Header/
│   ├── Pagination/
│   ├── PokemonCard/
│   ├── PokemonForm/
│   ├── PokemonGrid/
│   └── PokemonPage/
├── styles/            # Global styles and theme
├── utils/            # Utility functions and API calls
├── assets/           # Static assets
└── App.jsx           # Main application component
```

## Component Architecture

- **App.jsx**: Main component managing state and routing
- **PokemonGrid**: Displays the grid of Pokémon cards
- **PokemonCard**: Individual Pokémon card component
- **PokemonPage**: Detailed view of a single Pokémon
- **PokemonForm**: Search functionality
- **Pagination**: Navigation between pages
- **Header/Footer**: Layout components

## Styling

The application uses Styled Components with a custom theme for consistent styling. Features include:

- Responsive design breakpoints
- Type-based color theming
- Animation and transition effects
- CSS Grid and Flexbox layouts
- Custom component variants

## API Integration

The application integrates with the PokéAPI (https://pokeapi.co/) to fetch:

- Pokémon basic information
- Detailed stats and abilities
- Evolution chains
- Move sets

## Future Enhancements

- Add comparing Pokémon stats
- Add more advanced search filters

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Nova - [GitHub Profile](https://github.com/nxvafps)

## Acknowledgments

- [PokéAPI](https://pokeapi.co/) for providing the Pokémon data
- Pokémon and all respective names are trademark & © of Nintendo 1996-2024
