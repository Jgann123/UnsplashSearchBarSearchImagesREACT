import React from "react";
import "./ImagList.css";

const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return (
     
        <img alt={description} key={id} src={urls.regular} />
     
    );
  });

  return  <div id="imagediv"><div>{images}</div></div>;
};

export default ImageList;
