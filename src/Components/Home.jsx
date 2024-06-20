import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
    <section id="home" className="intro-section">
  <div className="container">
    <div className="row align-items-center text-white">
      
      <div className="col-md-6 intros text-start">
        <h1 className="display-2">
          <span className="display-2--intro">Hey!, I'm Akanksha</span>
          <span className="display-2--description lh-base">
            this is a multi-purpose responsive layout created with bootstrap v5. 
            (here your can place your description text)
          </span>
        </h1>
        <button type="button" className="rounded-pill btn-rounded"><Link to={"/form"}> Get in Touch
          <span><i className="fas fa-arrow-right"></i></span></Link>
        </button>
      </div>
      
      <div className="col-md-6 intros text-end">
        <div className="video-box">
          <img src="assets/images/arts/intro-section-illustration.png" alt="video illutration" className="img-fluid"/>
          <a href="#" className="glightbox position-absolute top-50 start-50 translate-middle">
            <span>
              <i className="fas fa-play-circle"></i>
            </span>
            <span className="border-animation border-animation--border-1"></span>
            <span className="border-animation border-animation--border-2"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</section>


  <section id="campanies" className="campanies">
    <div className="container">
      <div className="row text-center">
        <h4 className="fw-bold lead mb-3">Trusted by campanies like</h4>
        <div className="heading-line mb-5"></div>
      </div>
    </div>
    
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="assets/images/campanies/campany-1.png" alt="Campany 1 logo" title="Campany 1 Logo" className="img-fluid"/>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="assets/images/campanies/campany-2.png" alt="Campany 2 logo" title="Campany 2 Logo" className="img-fluid"/>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="assets/images/campanies/campany-3.png" alt="Campany 3 logo" title="Campany 3 Logo" className="img-fluid"/>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="assets/images/campanies/campany-4.png" alt="Campany 4 logo" title="Campany 4 Logo" className="img-fluid"/>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="assets/images/campanies/campany-5.png" alt="Campany 5 logo" title="Campany 5 Logo" className="img-fluid"/>
          </div>
        </div>
        <div className="col-md-4 col-lg-2">
          <div className="campanies__logo-box shadow-sm">
            <img src="assets/images/campanies/campany-6.png" alt="Campany 6 logo" title="Campany 6 Logo" className="img-fluid"/>
          </div>
        </div>
      </div>
    </div>
  </section>


<section id="services" className="services">
  <div className="container">
    <div className="row text-center">
      <h1 className="display-3 fw-bold">Our Services</h1>
      <div className="heading-line mb-1"></div>
    </div>
 

    <div className="row pt-2 pb-2 mt-0 mb-3">
      <div className="col-md-6 border-right">
        <div className="bg-white p-3">
          <h2 className="fw-bold text-capitalize text-center">
            Our Services Range From Initial Design To Deployment Anywhere Anytime
          </h2>
        </div>
      </div>
      <div className="col-md-6">
        <div className="bg-white p-4 text-start">
          <p className="fw-light">
            Lorem ipsum dolor sit amet consectetur architecto magni, 
            dicta maxime laborum temporibus dolorem esse doloremque illo quas nisi enim molestias. 
            Tempore ducimus molestiae in dolore enim.
          </p>
        </div>
      </div>
    </div>
  </div>

 
  <div className="container">
   
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
        <div className="services__content">
          <div className="icon d-block fas fa-paper-plane"></div>
          <h3 className="display-3--title mt-1">Marketing</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
             doloremque autem quibusdam blanditiis harum alias hic accusantium 
             maxime atque ratione magni repellat?
          </p>
          <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
            <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
        <div className="services__pic">
          <img src="assets/images/services/service-1.png" alt="marketing illustration" className="img-fluid"/>
        </div>
      </div>
    </div>
    
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-start">
        <div className="services__pic">
          <img src="assets/images/services/service-2.png" alt="web development illustration" className="img-fluid"/>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
        <div className="services__content">
          <div className="icon d-block fas fa-code"></div>
          <h3 className="display-3--title mt-1">web development</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
             doloremque autem quibusdam blanditiis harum alias hic accusantium 
             maxime atque ratione magni repellat?
          </p>
          <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
            <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
    </div>
  
    <div className="row">
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4">
        <div className="services__content">
          <div className="icon d-block fas fa-cloud-upload-alt"></div>
          <h3 className="display-3--title mt-1">cloud hosting</h3>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, impedit rem,
             doloremque autem quibusdam blanditiis harum alias hic accusantium 
             maxime atque ratione magni repellat?
          </p>
          <button type="button" className="rounded-pill btn-rounded border-primary">Learn more
            <span><i className="fas fa-arrow-right"></i></span>
          </button>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 services mt-4 text-end">
        <div className="services__pic">
          <img src="assets/images/services/service-3.png" alt="cloud hosting illustration" className="img-fluid"/>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="testimonials" className="testimonials">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
  <div className="container">
    <div className="row text-center text-white">
      <h1 className="display-3 fw-bold">Testimonials</h1>
      <hr style={{width: "100px", height: "3px "}} className="mx-auto"/>
      <p className="lead pt-1">what our clients are saying</p>
    </div>

    
    <div className="row align-items-center">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
         
          <div className="carousel-item active">
            
            <div className="testimonials__card">
              <p className="lh-lg">
                <i className="fas fa-quote-left"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
                <i className="fas fa-quote-right"></i>
                <div className="ratings p-1">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </p>
            </div>
           
            <div className="testimonials__picture">
              <img src="assets/images/testimonials/client-1.jpg" alt="client-1 picture" className="rounded-circle img-fluid"/>
            </div>
           
            <div className="testimonials__name">
              <h3>Patrick Muriungi</h3>
              <p className="fw-light">CEO & founder</p>
            </div>
          </div>     
          
          <div className="carousel-item">
            
            <div className="testimonials__card">
              <p className="lh-lg">
                <i className="fas fa-quote-left"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
                <i className="fas fa-quote-right"></i>
                <div className="ratings p-1">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </p>
            </div>
            
            <div className="testimonials__picture">
              <img src="assets/images/testimonials/client-2.jpg" alt="client-2 picture" className="rounded-circle img-fluid"/>
            </div>
            
            <div className="testimonials__name">
              <h3>Joy Marete</h3>
              <p className="fw-light">Finance Manager</p>
            </div>
          </div>     
         
          <div className="carousel-item">
            
            <div className="testimonials__card">
              <p className="lh-lg">
                <i className="fas fa-quote-left"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
                <i className="fas fa-quote-right"></i>
                <div className="ratings p-1">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </p>
            </div>
            
            <div className="testimonials__picture">
              <img src="assets/images/testimonials/client-3.jpg" alt="client-3 picture" className="rounded-circle img-fluid"/>
            </div>
          
            <div className="testimonials__name">
              <h3>ClaireBelle Zawadi</h3>
              <p className="fw-light">Global brand manager</p>
            </div>
          </div>     
          
          <div className="carousel-item">
            
            <div className="testimonials__card">
              <p className="lh-lg">
                <i className="fas fa-quote-left"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Placeat aut consequatur illo animi optio exercitationem doloribus eligendi iusto atque repudiandae. Distinctio.
                <i className="fas fa-quote-right"></i>
                <div className="ratings p-1">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </p>
            </div>
           
            <div className="testimonials__picture">
              <img src="assets/images/testimonials/client-4.jpg" alt="client-4 picture" className="rounded-circle img-fluid"/>
            </div>
            
            <div className="testimonials__name">
              <h3>Uhuru Kenyatta</h3>
              <p className="fw-light">C.E.O & Founder</p>
            </div>
          </div>     
        </div>
        <div className="text-center">
          <button className="btn btn-outline-light fas fa-long-arrow-alt-left" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        </button>
        <button className="btn btn-outline-light fas fa-long-arrow-alt-right" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        </button>
        </div>
      </div>
    </div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,96L48,128C96,160,192,224,288,213.3C384,203,480,117,576,117.3C672,117,768,203,864,202.7C960,203,1056,117,1152,117.3C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
</section>


<section id="faq" className="faq">
  <div className="container">
    <div className="row text-center">
      <h1 className="display-3 fw-bold text-uppercase">faq</h1>
      <div className="heading-line"></div>
      <p className="lead">frequently asked questions, get knowledge befere hand</p>
    </div>
    
    <div className="row mt-5">
      <div className="col-md-12">
        <div className="accordion" id="accordionExample">
          
          <div className="accordion-item shadow mb-3">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What are the main features?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
            
          <div className="accordion-item shadow mb-3">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                do i have to pay again after trial
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
             
          <div className="accordion-item shadow mb-3">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            How can I get started after trial?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
             
          <div className="accordion-item shadow mb-3">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Can I be refunded if am not satisfied?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<section id="portfolio" className="portfolio">
  <div className="container">
    <div className="row text-center mt-5">
      <h1 className="display-3 fw-bold text-capitalize">Latest work</h1>
      <div className="heading-line"></div>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint porro temporibus distinctio.
      </p>
    </div>
   
    <div className="row mt-5 mb-4 g-3 text-center">
      <div className="col-md-12">
        <button className="btn btn-outline-primary" type="button">All</button>
        <button className="btn btn-outline-primary" type="button">websites</button>
        <button className="btn btn-outline-primary" type="button">design</button>
        <button className="btn btn-outline-primary" type="button">mockup</button>
      </div>
    </div>

    
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="portfolio-box shadow">
          <img src="assets/images/portfolio/portfolio-1.jpg" alt="portfolio 1 image" title="portfolio 1 picture" className="img-fluid"/>
          <div className="portfolio-info">
            <div className="caption">
              <h4>project name goes here 1</h4>
              <p>category project</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="portfolio-box shadow">
          <img src="assets/images/portfolio/portfolio-2.jpg" alt="portfolio 2 image" title="portfolio 2 picture" className="img-fluid"/>
          <div className="portfolio-info">
            <div className="caption">
              <h4>project name goes here 2</h4>
              <p>category project</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="portfolio-box shadow">
          <img src="assets/images/portfolio/portfolio-3.jpg" alt="portfolio 3 image" title="portfolio 3 picture" className="img-fluid"/>
          <div className="portfolio-info">
            <div className="caption">
              <h4>project name goes here 3</h4>
              <p>category project</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="portfolio-box shadow">
          <img src="assets/images/portfolio/portfolio-4.jpg" alt="portfolio 4 image" title="portfolio 4 picture" className="img-fluid"/>
          <div className="portfolio-info">
            <div className="caption">
              <h4>project name goes here 4</h4>
              <p>category project</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="portfolio-box shadow">
          <img src="assets/images/portfolio/portfolio-5.jpg" alt="portfolio 5 image" title="portfolio 5 picture" className="img-fluid"/>
          <div className="portfolio-info">
            <div className="caption">
              <h4>project name goes here 5</h4>
              <p>category project</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="portfolio-box shadow">
          <img src="assets/images/portfolio/portfolio-6.jpg" alt="portfolio 6 image" title="portfolio 6 picture" className="img-fluid"/>
          <div className="portfolio-info">
            <div className="caption">
              <h4>project name goes here 6</h4>
              <p>category project</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="portfolio-box shadow">
          <img src="assets/images/portfolio/portfolio-7.jpg" alt="portfolio 7 image" title="portfolio 7 picture" className="img-fluid"/>
          <div className="portfolio-info">
            <div className="caption">
              <h4>project name goes here 7</h4>
              <p>category project</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="portfolio-box shadow">
          <img src="assets/images/portfolio/portfolio-8.jpg" alt="portfolio 8 image" title="portfolio 8 picture" className="img-fluid"/>
          <div className="portfolio-info">
            <div className="caption">
              <h4>project name goes here 8</h4>
              <p>category project</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="portfolio-box shadow">
          <img src="assets/images/portfolio/portfolio-9.jpg" alt="portfolio 9 image" title="portfolio 9 picture" className="img-fluid"/>
          <div className="portfolio-info">
            <div className="caption">
              <h4>project name goes here 9</h4>
              <p>category project</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="contact" className="get-started">
  <div className="container">
    <div className="row text-center">
      <h1 className="display-3 fw-bold text-capitalize">Get started</h1>
      <div className="heading-line"></div>
      <p className="lh-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero illum architecto modi.
      </p>
    </div>

    
    <div className="row text-white">
      <div className="col-12 col-lg-6 gradient shadow p-3">
        <div className="cta-info w-100">
          <h4 className="display-4 fw-bold">100% Satisfaction Guaranteed</h4>
          <p className="lh-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam alias optio minima, tempore architecto sint ipsam dolore tempora facere laboriosam corrupti!
          </p>
          <h3 className="display-3--brief">What will be the next step?</h3>
          <ul className="cta-info__list">
            <li>We'll prepare the proposal.</li>
            <li>we'll discuss it together.</li>
            <li>let's start the discussion.</li>
          </ul>
        </div>
      </div>
      <div className="col-12 col-lg-6 bg-white shadow p-3">
        <div className="form w-100 pb-2">
          <h4 className="display-3--title mb-5">start your project</h4>
          <form action="#" className="row">
            <div className="col-lg-6 col-md mb-3">
              <input type="text" placeholder="First Name" id="inputFirstName" className="shadow form-control form-control-lg"/>
            </div>
            <div className="col-lg-6 col-md mb-3">
              <input type="text" placeholder="Last Name" id="inputLastName" className="shadow form-control form-control-lg"/>
            </div>
            <div className="col-lg-12 mb-3">
              <input type="email" placeholder="email address" id="inputEmail" className="shadow form-control form-control-lg"/>
            </div>
            <div className="col-lg-12 mb-3">
              <textarea name="message" placeholder="message" id="message" rows="8" className="shadow form-control form-control-lg"></textarea>
            </div>
            <div className="text-center d-grid mt-1">
              <button type="button" className="btn btn-primary rounded-pill pt-3 pb-3">
                submit
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}
