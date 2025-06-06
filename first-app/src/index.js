import ReactDOM from 'react-dom/client';
import './index.css';

import App from "./App.jsx"

const root = ReactDOM.createRoot(document.getElementById('root'));

function Page() {
  return (
    <App />
  );
}

root.render(
  <Page />
);
