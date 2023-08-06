import { useRef, useState } from "react"
import "./Decrypting.sass"
import { BsFillClipboardCheckFill } from 'react-icons/bs';

export const DecryptingComponent = (props) => {

    let [cryptingText, setCryptingText] = useState("")
    let [cryptingKey, setCryptingKey] = useState("")
    let [output, setOutput] = useState([])
    const outputRef = useRef(null);
    const myArray = [...props.alphabetics]
    let encryptedOutput = "";



    const crypting = (key) => {

        for (let index = 0; index < cryptingText.length; index++) {
            let element = cryptingText[index];

            if (element === " " || !myArray.includes(element.toLowerCase())) {
                encryptedOutput += element;
                continue;
            }

            let theIndx = myArray.indexOf(element);
            let replacedIDX = theIndx - parseInt(key);

            while (replacedIDX < 0) {
                replacedIDX += myArray.length;
            }

            encryptedOutput += myArray[replacedIDX];
        }

        setOutput(encryptedOutput);
    };

    const crypt = () => {
        cryptingText = cryptingText.toLowerCase()
        if (cryptingText !== "" && cryptingKey !== "") {
            if (cryptingKey >= 0 && cryptingKey <= 26) {
                crypting(cryptingKey)

            } else {
                let cryptingkeyModulo = cryptingKey % 26
                cryptingkeyModulo = Math.abs(cryptingkeyModulo);
                crypting(cryptingkeyModulo)

            }
        }
    }

    const copyOutput = () => {
        const outputElement = outputRef.current;
        if (outputElement) {
            outputElement.select();
            document.execCommand("copy");
            window.getSelection().removeAllRanges();
        }
    }


    return (
        <>
            <div className="cryptingDiv bg-dange d-flex flex-column align-items-center justify-content-between p-2">

                <div className="textdiv w-50 h-25 d-flex flex-column flex-lg-row align-items-center justify-content-around">
                    <input onChange={(event) => { setCryptingText(event.target.value) }} className="w-50 h-50 p-2 rounded-pill bg-transparent border border-2 text-white text-center" placeholder="Text to Decrypt" type="text" name="" id="" />
                    <input onChange={(event) => { setCryptingKey(event.target.value) }} min={0} className="w-25 h-50 rounded-pill bg-transparent border border-2 text-white text-center" placeholder="Decrypting Key " type="number" name="" id="" />
                </div>
                <button onClick={crypt} className="btn btn-indigo  rounded-pill">Start Decrypting</button>
                <div className="output w-75 h-50 border p-0 position-relative">
                    <BsFillClipboardCheckFill onClick={copyOutput} className=" position-absolute end-0 top-0 m-1 copy" title="Copy text" />

                    <textarea
                        ref={outputRef}
                        className="w-100 h-100 border-0 p-1 bg-transparent text-white"
                        value={output}
                        readOnly
                    />
                </div>


            </div>

        </>
    )
}