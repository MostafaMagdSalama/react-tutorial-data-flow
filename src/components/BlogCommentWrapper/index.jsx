import CommentDetails from "../CommentDetails";

function CommentsWrapper(props) {
  return (
    <ul className="comment-wapper">
      {props.blogComments.map((comment) => (
        <CommentDetails
          commentAuther={comment.commentAuther}
          commentDate={comment.commentDate}
          commentText={comment.commentText}
        />
      ))}
    </ul>
  );
}
export default CommentsWrapper;