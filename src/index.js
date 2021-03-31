import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { ProgressProvider } from './context/ProgressContext';


ReactDOM.render(
  <ProgressProvider  >
    <App />
  </ProgressProvider>,
  document.getElementById('root')
);

