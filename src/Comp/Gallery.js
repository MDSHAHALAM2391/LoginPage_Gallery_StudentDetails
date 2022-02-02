import React from 'react';
import 'aos/dist/aos.css';
import Card from '../Comp/Card';
import Stu from '../Images/stu.jpg';
import Stu1 from '../Images/stu1.jpg';
import Stu2 from '../Images/stu2.jpg';
import Stu4 from '../Images/stu4.jpg';
import Stu5 from '../Images/stu5.jpg';
import Stu6 from '../Images/stu6.jpg';




const Gallery = () => {
  return (
  <section className='py-4 py-lg-5 container'>
      <div className='row'>
        <div className="col-md-12">
          <h1 className="display-5 mt-4 mb-4">
            Gallery
          </h1>
          <a href="/" className="btn btn-primary mt-3 mb-3">Go Back</a>
        </div>
      <Card img={Stu} title="Nature" />
      <Card img={Stu1} title="Computer" />
      <Card img={Stu2} title="Animal" />
      <Card img={Stu4} title="Emoji"/>
      <Card img={Stu5} title="Fly" />
      <Card img={Stu6} title="Fish" />
      


</div>
 </section>
 )
};

export default Gallery;
