import React from "react";
import PropsType from "prop-types";
import AlbumList from "./components/AlbumList";

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: "Nhac Hoa Thinh Hanh",
      thumbnailUrl:
        "https://photo-zmp3.zmdcdn.me/banner/c/7/c/8/c7c8cc5473acb26c9ccf99ca70fb100a.jpg",
    },
    {
      id: 2,
      name: "Rap Viet Nghe La Nghien",
      thumbnailUrl:
        "https://photo-zmp3.zmdcdn.me/banner/9/d/a/2/9da2e8c2a70ee428655caa65c170f37e.jpg",
    },
    {
      id: 3,
      name: "Trao luu nhac hot",
      thumbnailUrl:
        "https://photo-zmp3.zmdcdn.me/banner/6/9/a/0/69a0714c44618a232eaaed8c4dbbd5d8.jpg",
    },
  ];
  return (
    <div>
      <h2>Maybe You Like?</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}
export default AlbumFeature;
