import App from 'App';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

// ReactDOM.render(
//   <div>
//     <h1>Hello, Welcome to React and TypeScript</h1>
//   </div>,
//   document.getElementById('root')
// );

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container!);
root.render(<App />);
