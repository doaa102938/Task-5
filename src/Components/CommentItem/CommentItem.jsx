import { useState } from "react"
import './CommentItem.css'
import imgreplay from '../../assets/Images/Oval (1).png'


function CommentItem({ comment, postid, Deletecomment, UpdateComment }, props) {
    const [ShowEditSection, setShowEditSection] = useState(false)
    const [inputValue, setInputvalue] = useState(comment.CommentContent)
    const [count, setcount] = useState(0)
    function Add() {
        let NewValue = count + 1
        setcount(NewValue)
    }
    function Munis() {
        let NewValue = count - 1
        setcount(NewValue)
    }


    function HandelDeleteComment(event) {
        const myPostId = event.target.getAttribute("postid")
        const MyCommentId = event.target.getAttribute("commentid")
        Deletecomment(myPostId, MyCommentId)

    }
    function HandelEditComment() {
        let neweditsectionvalue = !ShowEditSection
        setShowEditSection(neweditsectionvalue)

    }
    function handelOnChange(event) {
        setInputvalue(event.target.value)

    }
    function handelUpdateButton(event) {
        setShowEditSection(false)
        const myPostId = event.target.getAttribute("postid")
        const MyCommentId = event.target.getAttribute("commentid")
        UpdateComment(inputValue, myPostId, MyCommentId)

    }
    return (

        <div className="CommentItem">
            <div className="Counter">
                <button>
                    <span onClick={Add}>+</span>
                    <label>{count}</label>
                    <span onClick={Munis}>-</span>
                </button>
            </div>
            <div className="left">
                <div className='Top'>
                    <div className="right">
                        <img src={imgreplay} className='photo'></img>
                        <label className='firstlabel'> ramsesmiron</label>
                        <label className='secondlabel' >Just Now</label>
                    </div>
                    <div className="Buttons" >
                        <button className="btndelete" postid={postid} onClick={HandelDeleteComment} commentid={comment.commentid}>Delete</button>

                        <button onClick={HandelEditComment} className="editbtn"  >Edit</button>
                    </div>

                </div>


                <div className='commentdiv'>
                    {ShowEditSection == true ?
                        (<>
                            <input value={inputValue} onChange={handelOnChange}></input>
                            <div className="divupdate">
                                <button className="btnUpdate" onClick={handelUpdateButton} postid={postid} commentid={comment.commentid}> Update</button>
                            </div>
                        </>
                        )
                        : (<p className='comment'>{comment.CommentContent}</p>)}
                </div>
            </div >

        </div>



    )
}
export default CommentItem