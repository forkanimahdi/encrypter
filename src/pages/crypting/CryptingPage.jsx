import { FooterComponent } from "../../layouts/Footer"
import { CryptingComponent } from "./components/Crypting"

export const Crypting = (props) => {


    return (

        <>
            <div className=" d-flex text-white flex-column align-items-center justify-content-between">
                <h2 className="text-white p-1">Y0u 4r3 3ncryp71ng n0w</h2>
                <CryptingComponent alphabetics={props.alphabetics} />
                <FooterComponent />
            </div>
        </>


    )
}