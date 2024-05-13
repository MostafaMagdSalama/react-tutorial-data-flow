export function BlogPost() {

  const blogPostData = {
    blogTitle: "AI in Web Development: Transforming the Future",
    blogContent: "Artificial intelligence (AI) is rapidly changing the landscape of web development. From automating repetitive tasks to personalizing user experiences, AI is making it possible to create more efficient, engaging, and intelligent websites. In this blog post, we'll explore some of the ways AI is being used in web development and discuss the potential impact it will have on the future of the industry.",
    blogComments: [
      {
        commentAuthor: "Maria Garcia (Web Developer)",
        commentText: "This is a great overview of AI's potential in web development! I'm particularly interested in exploring how AI can be used for accessibility testing.",
        commentDate: "2024-05-11 14:22", 
      },
      {
        commentAuthor: "David Lee (UX Designer)",
        commentText: "I see AI playing a huge role in personalizing user experiences. Imagine websites that can tailor content and layouts based on individual user preferences!",
        commentDate: "2024-05-10 09:45", 
      },
      {
        commentAuthor: "Sarah Chen (AI Engineer)",
        commentText: "The combination of AI and web development is exciting! It opens doors for more creative and interactive web experiences that were previously unimaginable.",
        commentDate: "2024-05-12 17:10", 
      },
      {
        commentAuthor: "Michael Rodriguez (Project Manager)",
        commentText: "While AI offers many advantages, it's important to ensure responsible development and ethical considerations are addressed.",
        commentDate: "2024-05-09 20:33", 
      },
      {
        commentAuthor: "Emily Jones (Content Writer)",
        commentText: "Looking forward to seeing how AI can be used to create more engaging and informative content for websites!",
        commentDate: "2024-05-11 11:58", 
      },

    ],
    BlogFooter: "Thanks for reading! We hope you enjoyed this blog post on AI in web development. Stay tuned for more insights and updates on the latest trends in technology and design.",
  };
  
  return (
    <div className="blog-container">
      <BlogHeader blogTitle={blogPostData.blogTitle} />
      <BlogContent blogContent={blogPostData.blogContent} />
      <CommentsWrapper blogComments={blogPostData.blogComments} />
      <BlogFooter blogFooter={blogPostData.BlogFooter} />
    </div>
  );
}

function BlogHeader(props) {
  return <h2 className="blog-header">{props.blogTitle}</h2>;
}

function BlogFooter(prop) {
  return <p className="blog-footer">{prop.blogFooter}</p>;
}
function CommentsWrapper(props) {
  return (
    <ul className="comment-wapper">
{
  props.blogComments.map(comment=><CommentDetails commentAuther={comment.commentAuther} commentDate={comment.commentDate} commentText={comment.commentText}/>)
}
    </ul>
  );
}

function CommentDetails(props) {
  return <div class="comment">
  <span class="comment-author">{props.commentAuther}</span>
  <p class="comment-text">{props.commentText}</p>
  <span class="comment-date" datetime="2024-05-11T11:58">{props.commentDate}</span>
</div>
;
}
function BlogContent(props) {
  return (
    <p className="blog-content">
    {props.blogContent}
    </p>  
  );
}
