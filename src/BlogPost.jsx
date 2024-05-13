export function BlogPost() {
  return (
    <div className="blog-container">
      <BlogHeader />
      <BlogContent />
      <CommentsWrapper />
      <BlogFooter />
    </div>
  );
}

function BlogHeader() {
  return <h2 className="blog-header">blog header</h2>;
}

function BlogFooter() {
  return <h2 className="blog-footer">blog footer</h2>;
}
function CommentsWrapper() {
  return (
    <ul className="comment-wapper">
      <CommentDetails />
      <CommentDetails />
      <CommentDetails />
      <CommentDetails />
      <CommentDetails />
      <CommentDetails />
      <CommentDetails />
    </ul>
  );
}
function CommentDetails() { 
  return (
    <div className="comment">
      <span className="comment-author">John Doe</span>
      <p className="comment-text">This is a comment.</p>
      <span className="comment-date" datetime="2024-05-11T11:58">May 11, 2024</span>
    </div>
  );
}
function BlogContent() {
  return (
    <p className="blog-content">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, non amet!
      Obcaecati a tempore minima inventore? Adipisci totam accusamus error nulla
      facere. Dolorum atque veniam perferendis mollitia doloremque provident
      corrupti.
    </p>
  );
}
