import React, {useState} from 'react';
import "./App.css";
import axios from "axios";

const App = () => {
    const [drag, setDrag] = useState(true);

    const dragStartHandler = (e) => {
        e.preventDefault();
        setDrag(true);

    }
    const dragLeaveHandler = (e) => {
        e.preventDefault();
        setDrag(false);
    }
    const onDropHandler = (e) => {
        e.preventDefault();
        let files = [...e.dataTransfer.files];
        setDrag(files)
    }
    return (
        <>
            <div className={"app"}>
                {drag
                    ? <div className="drop-area"
                           onDragStart={e => dragStartHandler(e)}
                           onDragLeave={e => dragLeaveHandler(e)}
                           onDragOver={e => dragStartHandler(e)}
                           onDrop={e => onDropHandler(e)}
                    > Drop Files Here</div> : <div
                        onDragStart={e => dragStartHandler(e)}
                        onDragLeave={e => dragLeaveHandler(e)}
                        onDragOver={e => dragStartHandler(e)}


                    >Just Drag & Drop Your Files Here </div>}
            </div>
        </>
    );
};

export default App;