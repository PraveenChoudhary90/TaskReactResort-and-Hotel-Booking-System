 import image from "./assets/pic10.jpg"
 import image1 from "./assets/pic15.jpg"
 import image2 from "./assets/pic12.jpg"
 import image3 from "./assets/pic13.jpg"
 const  About = ()=>{
    return(
        <>
        <div id="about">
            <h1>The Grand Hotel & Resort</h1>
            <h3>We have been a family business since 1982, striving 
                relentlessly for unparalled customer satisfaction.</h3>
        </div>

        <div id="about0">
           <a href="">
            <img src={image} alt="" />
          </a>
          <a href="">
            <img src={image1} alt="" />
          </a>
           <a href="">
            <img src={image2} alt="" />
          </a>
          <a href="">
            <img src={image3} alt="" />
          </a>
        </div>
          <div id="about1">
        <div id="pic1">
          <h1>24/7 Concierge Service</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            culpa distinctio, praesentium aliquam neque optio rerum est veniam
            fugiat. Ut et dolores quaerat reiciendis accusantium vitae quis quod
            iure tempore!
          </p>
          </div>
        <div id="pic2">
          <h1>Safes in All Rooms</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            repudiandae? Qui, illo id est odio veritatis enim iusto assumenda
            quae aliquid omnis maxime alias voluptatem, error repudiandae
            explicabo. Reiciendis, itaque.
          </p>
        </div>
        </div>
        
        </>
    )
}
export default About;

