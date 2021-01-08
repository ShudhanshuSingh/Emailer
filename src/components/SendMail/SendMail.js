import React from 'react'
import "./SendMail.css"
import excelToJson from "convert-excel-to-json"
import * as XLSX from "xlsx";


function SendMail() {
    const [file,setFile] = React.useState();
    const uploadHandler = (event) =>{
        setFile(event.target.files[0]);
        
    }
    
    // const result = excelToJson({
    //     sourceFile: file.name    
    // });
    // console.log(result)
    
    return (
        <div className="send-mail">
            <h3>Hello Hello, You are just one step away!!</h3>
            <input id="file-upload" onClick={uploadHandler} className="file-upload" type="file" accept=".xls,.xlsx" />
            <label for="file-upload" className="file-upload">
                 Upload xlsx
            </label>
        </div>
    )
}

export default SendMail
