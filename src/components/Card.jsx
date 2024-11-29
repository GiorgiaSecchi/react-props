import Button from "./Button";

export default function Card() {
  return (
    <div className="col">
      <div className="card mx-auto shadow rounded-4">
        <img
          src="src\assets\img\600x400.jpg"
          className="card-img-top rounded-top-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Titolo del post</h5>
          <p className="card-text lh-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Doloremque, quae? Nemo, facilis? Amet facilis, ipsa quidem repellat
            optio quaerat adipisci eum fugit itaque deleniti a aperiam libero
            alias nobis ab! Dolores, dolor nemo eos impedit perferendis eum
            atque quas, unde maiores nisi in tempora deserunt! Ducimus minus
            laboriosam quisquam, fugiat animi vitae temporibus veritatis
            deleniti minima in officia totam atque.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
}
