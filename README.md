

### 🛠 Setup Instructions

1. **Create the React App (if starting from scratch)**  
   ```bash
   npx create-react-app car-dashboard
   ```

2. **Install Core Dependencies**  
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   npm install react-router-dom
   npm install react-helmet
   ```

3. **Install Testing Tools**  
   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom jest
   ```

4. **Start the App**
   ```bash
   npm start
   ```

## Features

### Car List View
Display a list of cars with:
- Brand
- Model
- Price
- Weight
- User Ratings

### Comparison Feature
- Select a base car
- Compare multiple cars side-by-side in a dynamic table

### Filters and Sorting
- **Filter by**: Brand  
- **Sort by**: 
  - Price (Low to High / High to Low)  
  - User Ratings

### User Interface
- Built with **React 19**
- Styled using **Material UI (MUI)**
- Fully responsive on **mobile**, **tablet**, and **desktop**
- Clean and intuitive design

### Performance Optimizations
- **Lazy loading** for images and components
- **Memoization** with `React.memo`, `useMemo`

### Testing
- Unit tests with **React Testing Library** and **Jest**

## Available Scripts

You can run the following commands in the project root:

| Script | Description |
|--------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Runs unit tests |
| `npm run test:coverage` | Generates test coverage report |



