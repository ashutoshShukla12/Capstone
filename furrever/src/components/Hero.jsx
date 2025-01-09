export default function Hero() {
  return (
    <div className="container-fluid hero py-2">
      <div className="row align-items-center">
        <div className="col-md-5">
          <h1 className="display-5 permanent-marker-regular">
            From Adoption to Comfort, We’ve Got You Covered
          </h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            quisquam natus quasi magni dicta tenetur at. Optio, iste quos est
            mollitia sit inventore? Assumenda facere aliquid ad. Dolore, odit
            nemo?
          </p>
          <a href="#" className="customBtn mr-3">
            ADOPT A PET
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square-fill ml-2"
              viewBox="0 0 16 16"
            >
              <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707" />
            </svg>
          </a>
          <a href="#" className="customBtn1">
            EXPLORE PRODUCT
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square-fill ml-2"
              viewBox="0 0 16 16"
            >
              <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707" />
            </svg>
          </a>
        </div>
        <div className="col-md-7 hero-banner">
          <img src="/banner.jpeg" alt="Banner" className="rounded" />
        </div>
      </div>
    </div>
  );
}
