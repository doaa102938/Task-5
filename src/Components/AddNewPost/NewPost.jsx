import { useState } from "react"
import './NewPost.css'
import NewPostImage from "../../assets/Images/Oval.png"

function NewPost(props) {
    const [inputvalue, setInputValue] = useState("")

    function handelNewPost() {
        props.AddNewPostInArray(inputvalue)
        setInputValue("")
    }


    function handelOnChange(event) {
        setInputValue(event.target.value)
    }

    return (
        <div className="NewPost">
            <img src={NewPostImage} className="NewPostImage"></img>
            <input value={inputvalue} onChange={handelOnChange} placeholder="Send a Post...."></input>
            <button onClick={handelNewPost} className="btnsend">SEND</button>
        </div>
    )
} export default NewPost