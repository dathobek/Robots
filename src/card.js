import React from 'react';


const Card = ({id,name,email}) =>{

       return(
              <div className='tc measure bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                  <img alt='robots' src={`https://robohash.org/${id}?size=200x200`}></img>
                  <div>
                    <h5>{name}</h5>
                    <p>{email}</p>
                  </div> 
              </div>

       );
}

export default Card;