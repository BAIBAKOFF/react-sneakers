function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="header_left d-flex align-center">
          <img width={40} height={40} src="\img\header-logo.svg" alt="" />
          <div className="header_left_title">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Shop the best sneakers</p>
          </div>
        </div>
        <ul className="header_right d-flex">
          <li className="d-flex mr-30 ">
            <img width={18} height={18} src="\img\header-cart.svg" alt="" />
            <span className="balance">20$</span>
          </li>
          <li>
            <img
              width={19}
              height={19}
              src="\img\header-profile.svg"
              className=""
              alt=""
            />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">All Sneakers</h1>
        <div className="cards">
          <div className="card">
            <div className="img-name">
              <img
                width={133}
                height={112}
                src="img\sneakers\sneakers-1.jpg"
                alt=""
              />
            </div>
            <p>Men's shoes Nike Blazer Mid Suede</p>
            <div className="price d-flex">
              <div>
                <span>Price:</span>
                <p>300 $</p>
              </div>
              <div className="plus">
                <img width={11} height={11} src="img\plus.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-name">
              <img
                width={133}
                height={112}
                src="img\sneakers\sneakers-2.jpg"
                alt=""
              />
            </div>
            <p>Men's shoes Nike Air Max 270</p>
            <div className="price d-flex">
              <div>
                <span>Price:</span>
                <p>300 $</p>
              </div>
              <div className="plus">
                <img width={11} height={11} src="img\plus.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-name">
              <img
                width={133}
                height={112}
                src="img\sneakers\sneakers-3.jpg"
                alt=""
              />
            </div>
            <p>Men's shoes Nike Blazer Mid Suede</p>
            <div className="price d-flex">
              <div>
                <span>Price:</span>
                <p>300 $</p>
              </div>
              <div className="plus">
                <img width={11} height={11} src="img\plus.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-name">
              <img
                width={133}
                height={112}
                src="img\sneakers\sneakers-4.jpg"
                alt=""
              />
            </div>
            <p>Men's shoes Puma Boku Future Rider</p>
            <div className="price d-flex">
              <div>
                <span>Price:</span>
                <p>300 $</p>
              </div>
              <div className="plus">
                <img width={11} height={11} src="img\plus.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-name">
              <img
                width={133}
                height={112}
                src="img\sneakers\sneakers-5.jpg"
                alt=""
              />
            </div>
            <p>Men's shoes Under Armour Curry 8</p>
            <div className="price d-flex">
              <div>
                <span>Price:</span>
                <p>300 $</p>
              </div>
              <div className="plus">
                <img width={11} height={11} src="img\plus.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-name">
              <img
                width={133}
                height={112}
                src="img\sneakers\sneakers-6.jpg"
                alt=""
              />
            </div>
            <p>Men's shoes Nike Kyrie 7</p>
            <div className="price d-flex">
              <div>
                <span>Price:</span>
                <p>300 $</p>
              </div>
              <div className="plus">
                <img width={11} height={11} src="img\plus.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-name">
              <img
                width={133}
                height={112}
                src="img\sneakers\sneakers-7.jpg"
                alt=""
              />
            </div>
            <p>Men's shoes Jordan Air Jordan 11</p>
            <div className="price d-flex">
              <div>
                <span>Price:</span>
                <p>300 $</p>
              </div>
              <div className="plus">
                <img width={11} height={11} src="img\plus.png" alt="" />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="img-name">
              <img
                width={133}
                height={112}
                src="img\sneakers\sneakers-8.jpg"
                alt=""
              />
            </div>
            <p>Men's shoes Nike LeBron XVIII</p>
            <div className="price d-flex">
              <div>
                <span>Price:</span>
                <p>300 $</p>
              </div>
              <div className="plus">
                <img width={11} height={11} src="img\plus.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
