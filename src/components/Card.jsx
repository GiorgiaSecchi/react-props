import Button from "./Button";
import placeholderImg from "../assets/img/img_600x400.jpg";

export default function Card({ id, title, image, content, tags, published }) {
  return (
    <div className="col">
      <div className="card mx-auto shadow rounded-4">
        <img
          src={placeholderImg}
          className="card-img-top rounded-top-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text lh-sm">{content}</p>
          <Button />
          <div className="text-end">
            {tags.map((tag, index) => (
              <span keys={index} className={`tags ${tag}`}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
