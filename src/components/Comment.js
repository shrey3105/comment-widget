import { useRef, useState } from "react";

const Comment = ({ desc, children, level }) => {
  const [commentArr, setCommentArr] = useState(children);
  const [localCommentBox, setLocalCommentBox] = useState(false);
  const localCommentField = useRef(null);
  const addComment = () => {
    let arr = [...commentArr];
    arr.push({
      desc: localCommentField.current.value,
      children: [],
    });
    setCommentArr(arr);
    setLocalCommentBox(false);
  };

  const paddingClass = level * 15 + "px";
  return (
    <div className="my-4">
      <p className="text-lg">{desc}</p>
      <div className="text-blue-900 text-sm font-bold flex items-center">
        <span
          onClick={() => {
            setLocalCommentBox(true);
          }}
        >
          Add a reply
        </span>
        {localCommentBox && (
          <span className="ml-4">
            <input
              type="text"
              className="text-black p-2"
              ref={localCommentField}
            ></input>
            <button
              className="px-4 py-2 bg-slate-600 text-white rounded-lg ml-2"
              onClick={addComment}
            >
              Add
            </button>
          </span>
        )}
      </div>

      {commentArr.length > 0 && (
        <div style={{ paddingLeft: paddingClass }}>
          {commentArr.map((comment, index) => {
            return (
              <Comment
                key={index}
                desc={comment.desc}
                children={comment.children}
                level={level + 1}
              ></Comment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Comment;
