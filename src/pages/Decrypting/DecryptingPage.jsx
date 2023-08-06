import { FooterComponent } from "../../layouts/Footer"
import { DecryptingComponent } from "./components/Decrypting"

export const Decrypting = (props) => {


    return (

        <>
            <div className=" d-flex text-white flex-column align-items-center justify-content-between">
                <h2 className="text-white p-1">Y0u 4r3 D3cryp71ng n0w</h2>
                <DecryptingComponent alphabetics={props.alphabetics} />
                <FooterComponent />
            </div>
        </>


    )
}