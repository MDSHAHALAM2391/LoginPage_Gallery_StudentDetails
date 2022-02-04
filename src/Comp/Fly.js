
import React from 'react';
import '../Comp/Fly.js';
import fly1 from '../Images/Fly/fly1.jpg';
import fly2 from '../Images/Fly/fly2.jpg';
import fly3 from '../Images/Fly/fly3.jpg';
import fly4 from '../Images/Fly/fly4.jpg';
import fly5 from '../Images/Fly/fly5.jpg';
import fly6 from '../Images/Fly/fly6.jpg';




const Fly = () => {

    let data =[
        {
            id: 1,
            imgSrc: fly1,
        },
        {
            id: 2,
            imgSrc: fly2,
        },
        {
            id: 3,
            imgSrc: fly3,
        },
        {
            id: 4,
            imgSrc: fly4,
        },
        {
            id: 5,
            imgSrc: fly5,
        },
        {
            id: 6,
            imgSrc: fly6,
        }
    ]



  return (
      <div className="container">
          <div className="row">
              <div className="col-12"><h1 className="display-5">
                  Fly</h1>
             </div>
                  {data && data.map(fly => (
                    <div className="col-md-3 mt-3">
                        <img src={fly.imgSrc} alt=".." style={{height: '250px', width:'100%'}} />
                    </div>
                  ))}
          </div>
      </div>
  )
};

export default Fly;
