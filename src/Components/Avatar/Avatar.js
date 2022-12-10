import "./Avatar.scss"
import React from "react";

const Avatar = ({url, size}) => {
  return (
    <div className={size&&size==='small'?"avatar smallAvatar":"avatar"}>
        <img src={"https://lh3.googleusercontent.com/-6sMMxPABkSg/AAAAAAAAAAI/AAAAAAAAAAA/AFi9ZuFhvjNprVoXxaytsxxevSXDvM_mTw/photo.jpg?sz=46"} alt="avatar" />
    </div>
  );
};

export default Avatar;