import React, { Component } from 'react';

const Card = ({data, title,image}) => {
    console.log(data);
        return (
            <div className='col-11 col-md-6 col-lg-4 mx-0 mb-4'>
            <a href={`/Category/${title}`} style={{ textDecoration: 'none'}}>
                        <div class="card p-0 overflow-hidden h-100 shadow">

                            <img src={image}class="card-img-top" alt="..." style={{ height: '200px' }}/>
                                <div class="card-body">
                                 <h3 className="text-dark">{title}</h3>
                                
                          </div>
                         </div>
                   
                    </a>
                    </div>
            );
        }

export default Card;