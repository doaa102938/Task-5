
import './Posts.css'
import imgtop from "../../assets/Images/img1.jpg"
import imgdown from "../../assets/Images/img2.jpeg"
import BoxItem from '../PostItem/PostItem'
import NewPost from '../AddNewPost/NewPost'
import { useState, useEffect } from 'react'
function Boxes() {
    const [ArrayOfObject, setArrayOfObject] = useState([
        {
            ProfilImg: imgtop,
            Name: "Doaa",
            time: "1 month ago",
            id: 1,
            content: "  Impressive! Though it  be improved. But overall it looks incredible. You’ve nailed the design aworks really well.",
            likes: 12,
            comments: [
                {
                    CommentContent: "@maxblagun . It’s very tempting to jump ahead but lay a solid foundation first.",
                    commentid: 1
                }
            ]
        },
        {
            ProfilImg: imgdown,
            Name: "maxblagn",
            time: "2 Weeks ago",
            id: 2,
            content: "Woah, your for? I’m still new,nt to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
            likes: 5,
            comments: []
        }
    ])

    function AddNewPost(PostContant) {

        let newPostObject = {
            ProfilImg: imgtop,
            Name: "Doaa",
            time: "Now",
            id: ArrayOfObject.length + 1,
            content: PostContant,
            likes: 0,
            comments: []
        }
        let NewArrayofObject = [...ArrayOfObject, newPostObject]

        setArrayOfObject(NewArrayofObject)
    }

    function DeleteItem(PostId) {
        const NewArrayAfterDelete = ArrayOfObject.filter((Post) => {
            return (
                Post.id != PostId
            )
        })
        setArrayOfObject(NewArrayAfterDelete)
    }

    function AddNewComment(commentcontent, id) {

        let myOldPost = ArrayOfObject.filter((post) => post.id == id)[0]
        let oldcommentcount = myOldPost.comments.length
        let newcommentObject = {
            CommentContent: commentcontent,
            commentid: oldcommentcount + 1
        }
        let NewArrayAfterUpdate = ArrayOfObject.map((currentpost) => {
            if (currentpost.id == id) {
                currentpost.comments.push(newcommentObject)
            }
            return currentpost
        }
        )
        setArrayOfObject(NewArrayAfterUpdate)

    }




    function Deletecomment(postid, commentid) {

        let newArrayAfterCommentDeleted = ArrayOfObject.map((post) => {
            if (post.id == postid) {
                let newArrayofComments = post.comments.filter((comment) => {
                    return comment.commentid != commentid
                })
                return { ...post, comments: newArrayofComments }

            }
            return post

        })
        setArrayOfObject(newArrayAfterCommentDeleted)
    }
    function UpdateComment(newcontent, postid, commentid) {
        let NewArrayAfterCommentUpdated = ArrayOfObject.map((post) => {
            if (post.id == postid) {
                let newCommentsAfterUpdated = post.comments.map((comment) => {
                    if (comment.commentid == commentid) {
                        return { ...comment, CommentContent: newcontent }

                    } return comment

                })
                post = { ...post, comments: newCommentsAfterUpdated }
            } return post
        })
        setArrayOfObject(NewArrayAfterCommentUpdated)
    }

    // useEffect(() => {
    //     function CallApi() {
    //         fetch("http://localhost:3000/users")
    //             .then((respon) => {
    //                 return respon.json()
    //             })
    //             .then((finalResult) => {
    //                 setArrayOfObject(finalResult)
    //             })

    //     }
    //     CallApi()
    // }, [])








    return (
        <>
            <div className="Boxes">
                {ArrayOfObject.map((item) => {
                    return (
                        <>
                            <BoxItem
                                uniqueid={item.id}
                                likes={item.likes}
                                key={item.id}
                                ProfilImg={item.ProfilImg}
                                Name={item.Name}
                                time={item.time}
                                content={item.content}
                                DeleteItem={DeleteItem}
                                comments={item.comments}
                                AddNewComment={AddNewComment}
                                Deletecomment={Deletecomment}
                                UpdateComment={UpdateComment}
                            ></BoxItem>


                        </>
                    )

                }
                )
                }
                <NewPost AddNewPostInArray={AddNewPost}></NewPost>

            </div>

        </>
    )
}
export default Boxes
