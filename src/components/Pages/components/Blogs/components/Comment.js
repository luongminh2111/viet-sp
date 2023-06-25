import { Button } from "@mui/material";
import React, { useState } from "react";
import "../styles/Comment.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCommentsByBlogItem, postComment } from "../actions/BlogActionCallApi";

function Comment(props) {
  const { blogId, parentId } = props;

  const auth = useSelector(state => state.auth.account);
  console.log("check auth :", auth);
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const handleChangeContent = (value) => {
    setContent(value);
  }
  
  const handlePostComment = () => {
    const commentModel = {
      id: {
        userId: auth.userId,
        blogId: blogId
      },
      userId: auth.userId,
      blogId: blogId,
      parentId: parentId || 0,
      content: content
    };
    console.log("check model : ", commentModel);
    dispatch(postComment(commentModel));
    setTimeout(() => {
      dispatch(getCommentsByBlogItem(blogId));
    }, [1000]);

    setContent('');
  }

  return (
    <div className="comment-wrapper">
      <div className="comment-form">
        <div className="title-1">Your comments</div>

        <div className="title-2">
          Your email address will not be published. Required fields are marked *
        </div>
        <div className="comment-area">
          <textarea id="input-comment" name="w3review" maxLength={2000} type="text" onChange={(e) => handleChangeContent(e.target.value)}>
            
          </textarea>
         
        </div>
        <Button onClick={() => handlePostComment()}>Post Comment</Button>
      </div>
    </div>
  );
}
export default Comment;
