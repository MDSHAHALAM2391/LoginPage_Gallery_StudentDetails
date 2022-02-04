
import React from 'react';
import '../Comp/Fish.js';
import fish1 from '../Images/Fish/fish1.jpg';
import fish2 from '../Images/Fish/fish2.jpg';
import fish3 from '../Images/Fish/fish3.jpg';
import fish4 from '../Images/Fish/fish4.jpg';
import fish5 from '../Images/Fish/fish5.jpg';
import fish6 from '../Images/Fish/fish6.jpg';





const Fish = () => {

    let data =[
        {
            id: 1,
            imgSrc: fish1,
        },
        {
            id: 2,
            imgSrc: fish2,
        },
        {
            id: 3,
            imgSrc: fish3,
        },
        {
            id: 4,
            imgSrc: fish4,
        },
        {
            id: 5,
            imgSrc: fish5,
        },
        {
            id: 6,
            imgSrc: fish6,
        }
    ]



  return (
      <div className="container">
          <div className="row">
              <div className="col-12"><h1 className="display-5">
                  Fish</h1>
             </div>
                  {data && data.map(fish => (
                    <div className="col-md-3 mt-3">
                        <img src={fish.imgSrc} alt=".." style={{height: '250px', width:'100%'}} />
                    </div>
                  ))}
          </div>
      </div>
  )
};

export default Fish;
