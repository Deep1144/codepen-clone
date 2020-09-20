import React, { useState, useEffect } from 'react';
import './App.css';
import Editor from './components/Editor';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [html, setHtml] =useLocalStorage('html','');
  const [js, setJs] = useLocalStorage('js','');
  const [css, setCss] = useLocalStorage('css','');
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    let timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `)
    }, 300)
    return () =>clearTimeout(timeout);
  }, [html, js, css])

  return (
    <>
      <div className='top-panel'>
        <Editor
          language='xml'
          onChange={setHtml}
          value={html}
          blockName='HTML'
        />
        <Editor
          language='css'
          onChange={setCss}
          value={css}
          blockName='CSS'
        />
        <Editor
          language='javascript'
          onChange={setJs}
          value={js}
          blockName='JS'
        />
      </div>
      <div className="output">
        <iframe
          title="output"
          sandbox='allow-scripts'
          frameBorder='0'
          width="100%"
          height="100%"
          srcDoc={srcDoc}
        />
      </div>
    </>
  );
}

export default App;
