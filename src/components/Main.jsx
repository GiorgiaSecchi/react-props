import Card from "./Card.jsx";
import { posts } from "../data/posts.jsx";
console.log(posts);

export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="row row-cols-1 g-4">
          {posts.map((posts) => (
            <Card />
          ))}
        </div>
      </div>
    </main>
  );
}
