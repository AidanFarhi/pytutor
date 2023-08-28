import { useState } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { python } from "@codemirror/lang-python";


export default function BasicDataTypes() {
    const [code, setCode] = useState('')

    const runCode = () => {
        console.log(code)
    }

    return (
        <div className="main-view">
            <p className="main-view-header">Basic Data Types</p>
            <p className="main-view-subtext">
                Python has many different data types. 
                The four that will be covered in this section are Integers, Floats, Booleans, and Strings.
            </p>
            <p className="main-view-header">Integers</p>
            <p className="main-view-subtext">
                Integers are whole numbers. They are created a couple of different ways.
            </p>
            <p className="main-view-subtext">
                Method one: Integer literals.
            </p>
            <CodeMirror
                value={"# This is how you create an Integer literal.\n" +
                "3\n" +
                "# Yes. It's that simple. Try creating one on your own:\n"
                }
                theme={vscodeDark}
                extensions={[python()]}
                height="100px"
                width="50vw"
                onChange={(value) => {
                    setCode(value);
                }}
            />
            <button onClick={() => runCode()}>Run</button>
        </div>
    )
}