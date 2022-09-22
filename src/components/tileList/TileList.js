import React from "react";
import { ContactsPage } from "../../containers/contactsPage/ContactsPage";
import Tile from '../tile/Tile';

export const TileList = ({obj}) => {
  return (
    <div>
      {obj.map(item => {
        return (
          <Tile item={item} key={item.id}/>)
      })}
    </div>
  );
};

export default TileList;