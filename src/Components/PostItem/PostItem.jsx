import { useState } from "react"
import iconReplay from "../../assets/Images/Path.png"
import AddNewComment from "../AddNewComment/AddNewComment"
import CommentWrapper from "../CommentWrapper/CommentWrapper"

function BoxItem(props) {
    const [ShowReplayDiv, setShowReplayDiv] = useState(false)
    const [count, setcount] = useState(props.likes)
    function Add() {
        let NewValue = count + 1
        setcount(NewValue)
    }
    function Munis() {
        let NewValue = count - 1
        setcount(NewValue)
    }
    function HandelDelete(event) {
        props.DeleteItem(event.target.getAttribute("uniqueid"))

    }

    function HandelReplay() {
        let RusultReplay = !ShowReplayDiv
        setShowReplayDiv(RusultReplay)
    }


    function HideReplaySection() {
        setShowReplayDiv(false)
    }
    return (
        <>
            <div className="Box">
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
                            <img src={props.ProfilImg} className='photo'></img>
                            <label className='firstlabel'> {props.Name}</label>
                            <label className='secondlabel' >{props.time}</label>
                        </div>

                        <div className="Buttons">
                            {props.Name == "Doaa" ? (<button className="btndelete" uniqueid={props.uniqueid} onClick={HandelDelete}>
                                Delete
                            </button>
                            ) : null
                            }


                            <button className="btnreply" onClick={HandelReplay}>
                                <img src={iconReplay} className='iconreplay'></img>
                                <span className='Replay'>Reply</span>

                            </button>
                        </div>

                    </div>
                    <div className='Down'>
                        <p className='Describtion'>{props.content}</p>
                    </div>
                </div>
            </div>

            <CommentWrapper comments={props.comments} postid={props.uniqueid} Deletecomment={props.Deletecomment} UpdateComment={props.UpdateComment} Name={props.Name}></CommentWrapper>

            {ShowReplayDiv == true ?
                (<AddNewComment AddNewComment={props.AddNewComment} uniqueid={props.uniqueid} Name={props.Name}
                    HideReplaySection={HideReplaySection}></AddNewComment>
                ) : null}


        </>

    )
}
export default BoxItem