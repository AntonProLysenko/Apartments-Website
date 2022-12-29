export default function AboutUsPage() {
  return (
    <>
      <div className="container">
        <h1 className="title">Gallery</h1>

        <div className="gallery">
          <figure className="gallery__item gallery__item--1">
            <img
              src="https://i.imgur.com/MFPbkjh.jpg"
              class="gallery__img"
              alt="Image 1"
            />
          </figure>

          <figure className="gallery__item gallery__item--2">
            <img
              src="https://i.imgur.com/YUamIMj.jpg"
              className="gallery__img"
              alt="Image 2"
            />
          </figure>

          <figure className="gallery__item gallery__item--3">
            <img
              src="https://i.imgur.com/ILzD0HZ.jpg"
              className="gallery__img"
              alt="Image 3"
            />
          </figure>

          <figure className="gallery__item gallery__item--4">
            <img
              src="https://i.imgur.com/J4xLkW4.jpg"
              className="gallery__img"
              alt="Image 4"
            />
          </figure>

          <figure className="gallery__item gallery__item--5">
            <img
              src="https://i.imgur.com/9Pc0exQ.jpg"
              className="gallery__img"
              alt="Image 5"
            />
          </figure>

          <figure className="gallery__item gallery__item--6">
            <img
              src="https://i.imgur.com/R16jAox.jpg"
              className="gallery__img"
              alt="Image 6"
            />
          </figure>
        </div>
      </div>
    </>
  );
}
