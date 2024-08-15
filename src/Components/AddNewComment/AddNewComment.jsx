import './AddNewComment.css'
import { useState } from 'react'
import ImgAddComment from '../../assets/Images/Oval.png'

function AddNewComment(props) {
    const [commentinput, setcommentinput] = useState("")
    function HandelNewComment(event) {
        props.HideReplaySection()
        const id = event.target.getAttribute("uniqueid")
        props.AddNewComment(commentinput, id)
        setcommentinput("")


    }
    function HandelonChange(event) {
        setcommentinput(event.target.value)

    }
    return (
        <div className='parent'>
            <div className='AddNewComment'>
                <img src={ImgAddComment} className='photo'></img>
                <input onChange={HandelonChange} value={commentinput} placeholder='Add a Comment....'></input>
                <button onClick={HandelNewComment} uniqueid={props.uniqueid} className='btncommment'>Replay</button>
            </div>
        </div>
    )
}
export default AddNewComment