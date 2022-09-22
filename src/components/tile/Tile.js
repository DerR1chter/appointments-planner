import React from "react";

export const Tile = ( {item}) => {
    if(item.id) {
      return (
        <div className="tile-container">
          <ul>
            {Object.entries(item).map(entry => {
              if (entry[0] === 'id') {
                return <p key={entry[1]} className="title-title" style={{fontWeight: 'bold', listStyleType: 'none'}}>Entry #{entry[1]}</p>;
              } else {
                return <li key={entry[1]}><p className="title">{entry[1]}</p></li>;
              }
            })
            }
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
};

export default Tile;
