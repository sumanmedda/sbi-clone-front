import {useEffect } from "react"

function PostUserInfo({usernameElem, passElem}){

    let user_info = {
        username : usernameElem,
        password : passElem,
    }

    const postData = async () => {
        console.log(user_info)
        const response = await fetch('https://suman202.pythonanywhere.com/api/user-info/',{
            method: 'post',
            body: JSON.stringify(user_info),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    useEffect(() => {
        postData()
    }, [])

    return <></>
}

export default PostUserInfo