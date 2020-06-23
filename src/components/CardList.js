import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  // const cardComponent = robots.map((user, i) => {
  //   return (
  //   <Card 
  //     key={i} 
  //     id={robots[i].id} 
  //     name={robots[i].name} 
  //     email={robots[i].email}/>
  //   );
  // });

  if (true) {
    throw new Error('No Good!');
  }

  return (
    <div>
      {
        // {cardComponent}
        robots.map((user, i) => {
          return (
            <Card 
              key={i} 
              id={robots[i].id} 
              name={robots[i].name} 
              email={robots[i].email}/>
          );
        })
      }
    </div>
  );
}

export default CardList;