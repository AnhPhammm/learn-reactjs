import React from "react";
import PropsType from "prop-types";
import Album from "../Album";
import './styles.scss'

AlbumList.propTypes = {
    albumList: PropsType.array,
};
AlbumList.defaultProps = {
    albumList: [],
};

function AlbumList({albumList}) {
  return (
    <ul className="album-list">
      {albumList.map((item)=>(
        <li key={item.id}>
          <Album album={item}/>
        </li>
      ))}
    </ul>
  );
}
export default AlbumList;
