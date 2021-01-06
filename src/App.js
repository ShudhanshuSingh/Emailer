import "./App.css";
// import EditorJS from '@editorjs/editorjs';
import React from 'react';
import EditorJs from "react-editor-js";
import { EDITOR_JS_TOOLS } from "./Constants";
import Output from 'editorjs-react-renderer';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";


function App() {
  // const [data,setData] = React.useState()
  // const ref = React.useRef(null) 
  // async function handlesave(){
  //   const savedData = await ref.current.save()
  //   console.log(savedData)
  //   setData(savedData);
  // }
  return (
    <div className="App">
      <Navbar />
      <Home />

      {/* <EditorJs
        tools={EDITOR_JS_TOOLS}
        instanceRef={(instance)=>(ref.current = instance)}
      />
      <button onClick={handlesave}>save</button>
      {
        data==null?(<h3>No data</h3>):(
            <Output data={data} />
        )
      } */}
    </div>
  );
}

export default App;
