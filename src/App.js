import { useState } from 'react';
import './App.css';
import Editor from './components/Editor';

function App() {

  const [html, setHtml] = useState('');
  const [css, setCss] = useState('');
  const [js, setJs] = useState('');

  let sourceDoc = `
    <html>
      <head>
        <style>${css}</style>
      </head>
      <body>
        ${html}
        <script>${js}</script>
      </body>
    </html>
  `;

  return (
    <div className='main-container'>
      <div className="container editor-container">
        <Editor title="HTML" language="xml" value={html} onChange={setHtml}/>
        <Editor title="CSS" language="css" value={css} onChange={setCss}/>
        <Editor title="JS" language="javascript" value={js} onChange={setJs}/>
      </div>
      <div className="container output-container">
        <iframe
          title='code-output'
          sandbox='allow-scripts'
          srcDoc={sourceDoc}
          frameBorder="0" 
          width="100%"
        /> 
      </div>      
    </div>
  );
}

export default App;
