import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css';
import { HashRouter as Router} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)