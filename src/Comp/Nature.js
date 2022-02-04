import React from 'react';
import '../Comp/Nature.js';
import na1 from '../Images/Nature/na1.jpg';
import na2 from '../Images/Nature/na2.jpg';
import na3 from '../Images/Nature/na3.jpg';
import na4 from '../Images/Nature/na4.jpg';
import na5 from '../Images/Nature/na5.jpg';
import na6 from '../Images/Nature/na6.jpg';

const Nature = () => {

    let data =[
        {
            id: 1,
            imgSrc: na1,
        },
        {
            id: 2,
            imgSrc: na2,
        },
        {
            id: 3,
            imgSrc: na3,
        },
        {
            id: 4,
            imgSrc: na4,
        },
        {
            id: 5,
            imgSrc: na5,
        },
        {
            id: 6,
            imgSrc: na6,
        }
    ]



  return (
      <div className="container">
          <div className="row">
              <div className="col-12"><h1 className="display-5">
                  Nature</h1>
             </div>
                  {data && data.map(nature => (
                    <div className="col-md-3 mt-3">
                        <img src={nature.imgSrc} alt=".." style={{height: '250px', width:'100%'}} />
                    </div>
                  ))}
          </div>
      </div>
  )
};

export default Nature;
