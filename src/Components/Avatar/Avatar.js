import React from "react";

const Avatar = ({url, size}) => {
  return (
    <div className={size&&size==='small'?"smallAvatar":"Avatar"}>
        <img src={url} alt="avatar" />
    </div>
  );
};

export default Avatar;