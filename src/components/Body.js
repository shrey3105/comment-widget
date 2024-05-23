import { useRef, useState } from "react";
import Comment from "./Comment";
import { useDispatch, useSelector } from "react-redux";
import { toggleInputBox } from "../utils/inputSlice";

const Body = () => {
  const [commentArr, setCommentArr] = useState([]);
  const commentBox = useRef(null);
  const showInputBox = useSelector((store) => store.inputBox.showInputBox);
  const dispatch = useDispatch();
  const level = 0;

  const handleCommentBtn = () => {
    dispatch(toggleInputBox(true));
  };

  const addComment = () => {
    const comment = commentBox.current.value;
    let arr = [...commentArr];
    arr.push({
      desc: comment,
      children: [],
    });
    commentBox.current.value = "";
    console.log(arr);
    setCommentArr(arr);
    dispatch(toggleInputBox(false));
  };

  return (
    <div>
      <div>
        {commentArr.map((comment, index) => (
          <Comment
            key={index}
            desc={comment.desc}
            children={comment.children}
            level={level + 1}
          ></Comment>
        ))}
      </div>

      <div className="flex flex-row-reverse">
        {!showInputBox && (
          <button
            className="px-4 py-2 rounded-lg bg-blue-200"
            onClick={handleCommentBtn}
          >
            Comment
          </button>
        )}
      </div>
      {showInputBox && (
        <div className="flex my-4">
          <input
            className="flex-1 rounded-lg outline-none p-2 focus:border-blue-200 border-2"
            type="text"
            ref={commentBox}
          ></input>
          <button
            className="text-white ml-4 py-2 px-4 bg-red-600 rounded-lg font-bold"
            onClick={addComment}
          >
            Add Comment
          </button>
        </div>
      )}
    </div>
  );
};

export default Body;
