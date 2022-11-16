import "./Container.scss";

function Container() {
  const fakeUrls = [
    "https://source.unsplash.com/?fruit",
    "https://source.unsplash.com/?cars",
    "https://source.unsplash.com/?construction",
    "https://source.unsplash.com/?nature",
    "https://source.unsplash.com/?city,night",
    "https://source.unsplash.com/?city,day",
    "https://source.unsplash.com/?people",
    "https://source.unsplash.com/?countries",
    "https://source.unsplash.com/random/?city,night",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
    "https://source.unsplash.com/random",
  ];

  return (
    <div className="csr-container">
      <div className="heading">
        <p className="clip">HOW WE HELP</p>
        <h1>Corporate Social Responsibility</h1>
      </div>

      <div className="csr-images">
        <div className="csr-row">
          <div className="csr-image">
            <img
              src="https://s.observers.france24.com/media/display/1d31b76e-f734-11ea-bdb6-005056a9aa4d/w:1280/p:4x3/trash%20bag.JPG"
              alt=""
            />
            <div>
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dignissimos consequatur ratione iste asperiores consectetur?
              </p>
            </div>
          </div>
          <div className="csr-image">
            <img
              src="https://www.psuconnect.in/sdsdsd/bpcl_tree_plantation.jpg"
              alt=""
            />
            <div>
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dignissimos consequatur ratione iste asperiores consectetur?
              </p>
            </div>
          </div>
        </div>

        <div className="csr-row csr-row-more">
          <div className="csr-image">
            <img
              src="https://assets.thehansindia.com/h-upload/2021/06/03/1080074-gangula.webp"
              alt=""
            />
            <div>
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dignissimos consequatur ratione iste asperiores consectetur?
              </p>
            </div>
          </div>
          <div className="csr-image">
            <img
              src="https://media.greenmatters.com/brand-img/YwKiQ2tfV/0x0/trashtag-clean-up-litter-1552318521531.jpg"
              alt=""
            />
            <div>
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dignissimos consequatur ratione iste asperiores consectetur?
              </p>
            </div>
          </div>
          <div className="csr-image">
            <img
              src="https://assets.telegraphindia.com/telegraph/2020/Dec/1606938238_03dhanbad2_5c.jpg"
              alt=""
            />
            <div>
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dignissimos consequatur ratione iste asperiores consectetur?
              </p>
            </div>
          </div>
        </div>

        <div className="csr-row">
          <div className="csr-image">
            <img
              src="https://chennai.ashanet.org/wp-content/uploads/sites/38/2019/11/34-DSCN4526.jpg"
              alt=""
            />
            <div>
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dignissimos consequatur ratione iste asperiores consectetur?
              </p>
            </div>
          </div>
          <div className="csr-image">
            <img
              src="https://images.shiksha.com/mediadata/images/articles/1624866875phpZq9RM9.jpeg"
              alt=""
            />
            <div>
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dignissimos consequatur ratione iste asperiores consectetur?
              </p>
            </div>
          </div>
        </div>

        <div className="csr-row csr-row-more">
          <div className="csr-image">
            <img
              src="https://socialwork.buffalo.edu/content/socialwork/home/admissions/is-social-work-right-career-for-me/list-of-essential-skills-in-social-work/_jcr_content/par/image.img.680.auto.png/1529780679625.png"
              alt=""
            />
            <div>
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dignissimos consequatur ratione iste asperiores consectetur?
              </p>
            </div>
          </div>

          <div className="csr-image">
            <img
              src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/01/socialservice3.jpg"
              alt=""
            />
            <div>
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dignissimos consequatur ratione iste asperiores consectetur?
              </p>
            </div>
          </div>
          <div className="csr-image">
            <img
              src="https://images.shiksha.com/mediadata/images/articles/1624866875phpZq9RM9.jpeg"
              alt=""
            />
            <div>
              <p className="date">{new Date().toLocaleDateString()}</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                dignissimos consequatur ratione iste asperiores consectetur?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
