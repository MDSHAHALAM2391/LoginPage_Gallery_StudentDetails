
import React from 'react';
import '../Comp/Emoji.js';
import emo1 from '../Images/Emoji/emo1.png';
import emo2 from '../Images/Emoji/emo2.jpg';
import emo3 from '../Images/Emoji/emo3.png';
import emo4 from '../Images/Emoji/emo4.jpg';
import emo6 from '../Images/Emoji/emo6.png';


const Emoji = () => {

    let data =[
        {
            id: 1,
            imgSrc: emo1,
        },
        {
            id: 2,
            imgSrc: emo2,
        },
        {
            id: 3,
            imgSrc: emo3,
        },
        {
            id: 4,
            imgSrc: emo4,
        },
        {
            id: 5,
            imgSrc: emo6,
        },
        {
            id: 6,
            imgSrc: emo2,
        }
    ]



  return (
      <div className="container">
          <div className="row">
              <div className="col-12"><h1 className="display-5">
                  Emoji</h1>
             </div>
                  {data && data.map(emoji => (
                    <div className="col-md-3 mt-3">
                        <img src={emoji.imgSrc} alt=".." style={{height: '250px', width:'100%'}} />
                    </div>
                  ))}
          </div>
      </div>
  )
};

export default Emoji;
