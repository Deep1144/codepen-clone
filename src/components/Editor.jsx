import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as ControlledEditor } from "react-codemirror2";

function Editor(props) {
  const { language, onChange, value, blockName } = props;
  const [open, setOpen] = useState(true);

  const changeHandler = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className={`${open ? "editor" : "collapsed"}`}>
      <div className="block-title">
        {blockName}
        {/* <button className="expand-collapse-btn" onClick={() => setOpen(!open)}> */}
         
        <svg  height="30" width="20" onClick={() => setOpen(!open)}>
          <line
            x1="0"
            y1="0"
            x2="12"
            y2="12"
            style={{ stroke: "white", strokeWidth: "2" }}
          />
          <line
            x1="0"
            y1="12"
            x2="12"
            y2="0"
            style={{ stroke: "white", strokeWidth: "2" }}
          />
          Sorry, your browser does not support inline SVG.
        </svg>
        {/* </button> */}

      </div>
      <ControlledEditor
        className="editor"
        onBeforeChange={changeHandler}
        className="code-mirror-wrapper"
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: "material",
          lineNumbers: true,
          autocorrect: true,
          spellcheck: true,
        }}
      />
    </div>
  );
}

export default Editor;
