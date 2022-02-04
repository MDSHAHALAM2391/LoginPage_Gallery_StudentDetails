import React from 'react';
import '../Comp/Computer.js';
import Comp1 from '../Images/Computer/Comp1.jpg';
import comp2 from '../Images/Computer/comp2.jpg';
import comp3 from '../Images/Computer/comp3.jpg';
import Comp4 from '../Images/Computer/Comp4.jpg';
import comp5 from '../Images/Computer/comp5.jpg';
import comp6 from '../Images/Computer/comp6.jpg';


const Computer = () => {

    let data =[
        {
            id: 1,
            imgSrc: Comp1,
        },
        {
            id: 2,
            imgSrc: comp2,
        },
        {
            id: 3,
            imgSrc: comp3,
        },
        {
            id: 4,
            imgSrc: Comp4,
        },
        {
            id: 5,
            imgSrc: comp5,
        },
        {
            id: 6,
            imgSrc: comp6,
        }
    ]



  return (
      <div className="container">
          <div className="row">
              <div className="col-12"><h1 className="display-5">
                  Computer</h1>
             </div>
                  {data && data.map(computer => (
                    <div className="col-md-3 mt-3">
                        <img src={computer.imgSrc} alt=".." style={{height: '250px', width:'100%'}} />
                    </div>
                  ))}
          </div>
      </div>
  )
};

export default Computer;
