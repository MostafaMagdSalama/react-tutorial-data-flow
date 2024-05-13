function CommentDetails(props) {
  return (
    <div class="comment">
      <span class="comment-author">{props.commentAuther}</span>
      <p class="comment-text">{props.commentText}</p>
      <span class="comment-date" datetime="2024-05-11T11:58">
        {props.commentDate}
      </span>
    </div>
  );
}
export default CommentDetails;
