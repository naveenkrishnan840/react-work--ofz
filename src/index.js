import React, { StrictMode } from 'react';
import { createRoot, creatElement } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
console.log(rootElement)
const root = createRoot(rootElement);
console.log(root);
root.render(<App />);
