import React from 'react';
import '../Comp/Animal.js';
import ani1 from '../Images/Animal/ani1.jpg';
import ani2 from '../Images/Animal/ani2.jpg';
import ani3 from '../Images/Animal/ani3.jpg';
import ani4 from '../Images/Animal/ani4.jpeg';
import ani5 from '../Images/Animal/ani5.jpg';

const Animal = () => {

    let data =[
        {
            id: 1,
            imgSrc: ani1,
        },
        {
            id: 2,
            imgSrc: ani2,
        },
        {
            id: 3,
            imgSrc: ani3,
        },
        {
            id: 4,
            imgSrc: ani4,
        },
        {
            id: 5,
            imgSrc: ani4,
        },
        {
            id: 6,
            imgSrc: ani5,
        }
    ]



  return (
      <div className="container">
          <div className="row">
              <div className="col-12"><h1 className="display-5">
                  Animals</h1>
             </div>
                  {data && data.map(animal => (
                    <div className="col-md-3 mt-3">
                        <img src={animal.imgSrc} alt=".." style={{height: '250px', width:'100%'}} />
                    </div>
                  ))}
          </div>
      </div>
  )
};

export default Animal;
