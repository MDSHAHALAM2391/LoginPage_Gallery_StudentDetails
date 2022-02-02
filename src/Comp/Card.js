import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
                <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>

                        <div class="card p-0 overflow-hidden h-100 shadow">

                            <img src={this.props.img}class="card-img-top" alt="..." style={{ height: '200px' }}/>
                                <div class="card-body">
                                 <h5 class="card-title">{this.props.title}</h5>
                                
                          </div>
                         </div>
                    </div>
            );
        }
    }

export default Card;