import { useState } from 'react'
import './CommentWrapper.css'
import CommentItem from '../CommentItem/CommentItem'


function CommentWrapper(props) {

    return (
        <div className='commentWrapper'>

            {props.comments.map((comment) => {
                return (
                    <>

                        <CommentItem
                            Name={props.Name}
                            key={comment.commentid}
                            comment={comment}
                            postid={props.postid}
                            Deletecomment={props.Deletecomment}
                            UpdateComment={props.UpdateComment}
                        ></CommentItem>


                    </>

                )


            }
            )}


        </div>
    )
}
export default CommentWrapper