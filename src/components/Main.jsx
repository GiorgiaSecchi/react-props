import Card from "./Card.jsx";
import posts from "../data/posts.jsx";
console.log(posts);

export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="row row-cols-1 g-4">
          {posts
            .filter((post) => post.published === true)
            .map((post) => (
              <Card
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
              />
            ))}
        </div>
      </div>
    </main>
  );
}
