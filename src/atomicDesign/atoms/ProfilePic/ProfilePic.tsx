import React from 'react';
import './ProfilePic.css';

interface IProfilePicArgs {
  style?: object;
}

const ProfilePic = ({ style }: IProfilePicArgs) => (
  <img alt="Ray Blue" src="assets/Ray.jpeg" className="photo" style={style} />
);

export default ProfilePic;
