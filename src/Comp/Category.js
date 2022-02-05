import React from 'react';
import { myData } from './data'; 
import {useParams} from 'react-router-dom'

const Category = () => {


    const id = useParams();
  console.log(id.category);
  return (
      <div className="container">
          <div className="row">
              <div className="col-12"><h1 className="display-5">
                 {id.category}</h1>
                 <a href="/gallery" className="btn btn-primary float-start" style={{ width: '200px' }}>Go back</a>
             </div>
                  {myData && myData[id.category].map((category) => (
                       <div className="col-md-3 mt-3">
                        <img src={category.Image} alt=".." style={{height: '250px', width:'100%'}} />
                    </div>
                  ))}
          </div>
      </div>
  )
};

export default Category;
