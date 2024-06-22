import React from 'react'
import vg from "../images/img2.jpeg"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram } from "react-icons/ai";

function Home() {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>YoYo</h1>
        <p>solutions for all your problums</p>
      </main>
    </div>

    <div className="home2">
      <img src={vg} alt="rodotimg" />
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta, tempora impedit natus aspernatur, accusamus nulla delectus voluptate incidunt consequatur eius cumque adipisci earum iusto officia numquam alias quo laborum quasi? 
          Odio dolores iure accusantium. Rem accusantium nemo ullam, maxime voluptas at officiis similique quisquam ipsam temporibus, ducimus provident ad laudantium voluptatem numquam minima accusamus!
        </p>
      </div>
    </div>

    <div className="home3" id='About'>
      <div>
        <h1>Who we are ?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum amet deleniti incidunt deserunt impedit, unde quidem aperiam ex veniam molestiae, ipsum voluptatibus sunt et suscipit fuga dolorem officiis earum delectus tempore quia reiciendis quibusdam? Molestiae eaque possimus suscipit provident sequi.</p>
      </div>
    </div>

    <div className="home4" id='Brands' >
      <div>
        <h1>Brands</h1>
        <article>
          <div style={{
            animationDelay:"0.3s"
          }}
          >
              <AiFillGoogleCircle/>
              <p>Google</p>
          </div>

          <div style={{
            animationDelay:"0.5s"
          }}
          >
              <AiFillAmazonCircle/>
              <p>Amazon</p>

          </div>

          <div style={{
            animationDelay:"0.7s"
          }}
          >
              <AiFillYoutube/>
              <p>YouTube</p>
              
          </div>

          <div style={{
            animationDelay:"0.9s"
          }}
          >
              <AiFillInstagram/>
              <p>Instagram</p>
              
          </div>
        </article>
      </div>
    </div>
    </>
  )
}

export default Home
