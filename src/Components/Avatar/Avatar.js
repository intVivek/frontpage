import "./Avatar.scss"
import React from "react";

const Avatar = ({url, size}) => {
  return (
    <div className={size&&size==='small'?"avatar smallAvatar":"avatar"}>
        <img src={url} alt="avatar" />
    </div>
  );
};

export default Avatar;