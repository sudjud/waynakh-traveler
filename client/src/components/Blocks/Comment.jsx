import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import block from "./block.module.sass";
import {
  addComment,
  deleteComment,
  fetchComment,
} from "../../features/commentSlice";

const Comment = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const comments = useSelector((state) => state.comment.comment);

  useEffect(() => {
    dispatch(fetchComment());
  }, [dispatch]);
  console.log(id);

  const handleAddComment = () => {
    dispatch(addComment({ text, id }));
    setText("");
    dispatch(fetchComment());
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleDelete = (id) => {
    dispatch(deleteComment(id));
  };

  return (
    <div className={block.comments}>
      <div className={block.title}>Комментарии</div>
        <div className={block.addBlock}>
          <input
            type="text"
            className="input-add-comment"
            value={text}
            onChange={handleText}
          />
          <button
            className={block.buttonAdd}
            onClick={() => handleAddComment()}
          >
            Добавить
          </button>
        </div>
        {comments.map((item) => {
          return (
            <div key={item._id} className={block.comment}>
              <div className={block.login}>{item.user.login}</div>
              <div className={block.text}>
                <div>{item.text}</div>
                <button
                  className={block.buttonDelete}
                  onClick={() => handleDelete(item._id)}
                >
                  Удалить
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Comment;
