import React from "react";
import "./CreateMail.css";
import { Resizable } from "re-resizable";
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./Constants";
import { useHistory } from "react-router-dom";



function CreateMail() {
  let history = useHistory();
  const ref = React.useRef(null)
  async function handlesave(){
    const savedData = await ref.current.save()
    console.log(savedData)
  }
  
  const saveAndSend = () =>{
    history.push("/send-mail");
  }

  

  const saveButton = () =>{

  }
  return (
    <div className="create-mail">
      <div className="editor">
        <EditorJs
          autofocus={true}
          tools={EDITOR_JS_TOOLS}
          instanceRef={(instance)=>(ref.current = instance)}
        />
      </div>
  
      <button className="save-button" onClick={saveAndSend}>Save and Continue</button>

      
      
    </div>
  );
}

export default CreateMail;
