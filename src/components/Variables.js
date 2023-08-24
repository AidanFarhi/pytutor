import { useState } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { python } from "@codemirror/lang-python";


export default function Variables() {
    const [code, setCode] = useState('')

    const runCode = () => {
        console.log(code)
    }

    return (
        <div className="main-view">
            <p className="main-view-header">Variables</p>
            <p className="main-view-subtext">
                Variables are used to store and reference data.
                Create two variables:
            </p>
            <p className="main-view-subtext">
                1. One to store your name
            </p>
            <p className="main-view-subtext">
                2. One to store your age
            </p>
            <CodeMirror
                value={code}
                theme={vscodeDark}
                extensions={[python()]}
                height="300px"
                width="50vw"
                onChange={(value) => {
                    setCode(value);
                }}
            />
            <button onClick={() => runCode()}>Run</button>
        </div>
    )
}