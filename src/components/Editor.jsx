import React, { useState } from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

function Editor(props) {
    let [open, setOpen] = useState(false);
    let {title, language, value, onChange} = props;

    function changeHandler(editor, data, value) {
        onChange(value)
    }

  return (
    <div className={`code-container ${open ? 'collapsed': ''}`}>
      <div className="title">
        <p>{ title }</p>
        <p className='close' onClick={() => setOpen(prev => !prev) }>x</p>
      </div>
      <ControlledEditor
        onBeforeChange={changeHandler}
        value={value}
        className='code-mirror-wrapper'
        options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: 'material'
        }}
      />
    </div>
  )
}

export default Editor
