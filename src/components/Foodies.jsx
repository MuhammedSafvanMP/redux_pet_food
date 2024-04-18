import {  memo, useContext, useState } from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setFilteredData } from "../app/slice/filterDataSlice";
import { globalContext } from "../context/GlobalContext";

function Foodies() {

  const [handleAdd, handleLike, login] = useContext(globalContext)
  const Navigate = useNavigate();
  const dispach = useDispatch();
  const filtererData = useSelector((state) => state.filtererData);
  const products = useSelector((state) => state.products);
  const [ratingStates, setRatingStates] = useState({});



  const handleAll = () => {
    dispach(setFilteredData(products));
  };

  const handleCat = () => {
    const catData = products.filter((food) => food.category === "cat");
    dispach(setFilteredData(catData));
  };

  const handleFish = () => {
    const fishData = products.filter((food) => food.category === "fish");
    dispach(setFilteredData(fishData));
  };

  const handleDog = () => {
    const dogData = products.filter((food) => food.category === "dog");
    dispach(setFilteredData(dogData));
  };

  const handleBird = () => {
    const birdData = products.filter((food) => food.category === "bird");
    dispach(setFilteredData(birdData))
  };


  

  const handleStarClick = (productId, index) => {
    setRatingStates((prevRatingStates) => ({
      ...prevRatingStates,
      [productId]: {
        count: index + 1,
        hover: 0,
      },
    }));
  };

  const handleStarHover = (productId, index) => {
    setRatingStates((prevRatingStates) => ({
      ...prevRatingStates,
      [productId]: {
        ...prevRatingStates[productId],
        hover: index + 1,
      },
    }));
  };

  const handleStarMouseLeave = (productId) => {
    setRatingStates((prevRatingStates) => ({
      ...prevRatingStates,
      [productId]: {
        ...prevRatingStates[productId],
        hover: 0,
      },
    }));
  };

  return (
    <>
      <section id="foodies" className="my-5">
        <div className="container my-5 py-5">
          <div className="section-header d-md-flex justify-content-between align-items-center">
            <h2 className="display-3 fw-normal">Pet Foodies</h2>
            <div className="mb-4 mb-md-0">
              <p className="m-0">
                <button
                  className="filter-button me-4 active"
                  data-filter="*"
                  onClick={handleAll}
                >
                  ALL
                </button>
                <button
                  className="filter-button me-4"
                  data-filter=".cat"
                  onClick={handleCat}
                >
                  CAT
                </button>
                <button
                  className="filter-button me-4"
                  data-filter=".dog"
                  onClick={handleDog}
                >
                  DOG
                </button>
                <button
                  className="filter-button me-4"
                  data-filter=".bird"
                  onClick={handleBird}
                >
                  BIRD
                </button>
                <button
                  className="filter-button me-4"
                  data-filter=".fish"
                  onClick={handleFish}
                >
                  FISH
                </button>
              </p>
            </div>
            <div>
              <NavLink
                to="/"
                className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1"
              >
                shop now
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="mb-1"
                >
                  <use xlinkHref="#arrow-right"></use>
                </svg>
              </NavLink>
            </div>
          </div>

          <div className="isotope-container row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {filtererData?.map((food) => (
                <div key={food.id}>
                  <div className="card position-relative">
                    <img
                      onClick={() => Navigate(`/product/${food.id}`)}
                      src={food.image}
                      className="img-fluid rounded-4"
                      style={{ cursor: "pointer" }}
                      alt="image"
                    />
                    <div className="card-body p-3">
                      <a>
                        <h3 className="card-title pt-2 m-0">
                          {food.title}
                        </h3>
                      </a>
                      <div className="card-text">
                        <span className="rating secondary-font">
                        

                        {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={` ${index + 1 <= ratingStates[food.id]?.count ? 'color' : '' } ${index + 1 <= ratingStates[food.id]?.hover ? 'color' : '' }`}
                      onClick={() => handleStarClick(food.id, index)}
                      onMouseMove={() => handleStarHover(food.id, index)}
                      onMouseLeave={() => handleStarMouseLeave(food.id)}
                    />
                  ))}

                        </span>
                        <h3 className="secondary-font text-primary">
                          ${food.price}.00
                        </h3>
                        <div className="d-flex flex-wrap mt-2">
                          <a   onClick={() => (login && login.name ? handleAdd(food.id) : Navigate('/signup'))}
                            className="btn-cart me-2 px-3 py-2"
                            style={{ cursor: "pointer" }}
                          >
                            <h5 className="text-uppercase m-0">Add to Cart</h5>
                          </a>
                          <a   onClick={() => (login && login.name ? handleLike(food.id) : Navigate('/signup'))}
                            className="btn-wishlist px-3 py-2"
                            style={{ cursor: "pointer" }}
                          >
                            <FaHeart
                              icon="fluent:heart-28-filled"
                              className="fs-5"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(Foodies);
