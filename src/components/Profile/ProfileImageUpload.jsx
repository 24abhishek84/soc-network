import React, { useState, useRef } from 'react'
import { ProfileImage } from '../Group/Group.style';

const ProfileImageUpload = ({ uploadFile, mainPage, positionrelative }) => {

  const [uploadedProfileImg, setUploadedProfileImg] = useState(undefined);
  const fileUpload = useRef(null);

  return (
    <ProfileImage className="shadow" bgimage={uploadedProfileImg && uploadedProfileImg.value } mainPage>
      <span className={`profile-photo-edit__file-upload-input cursor-pointer user-select-none`} onClick={() => fileUpload.current.click()} />
      <input
        type="file"
        className="d-none"
        ref={fileUpload}
        accept="image/*"
        onChange={(e) => {
          if (e.target.files.length === 0) {
            setUploadedProfileImg(undefined);
            // setUploadedProfileImgObj(undefined);
            return;
          } else {
            const reader = new FileReader();
            const file = e.target.files[0];
            const filetype = file.type;
            reader.readAsDataURL(file);
            reader.onload = (event) => {
              let payload = undefined;

              if (filetype.includes('image/')) {
                payload = {
                  type: 'image',
                  value: event.target.result,
                }
              }

              setUploadedProfileImg(payload);
            };

            // setUploadedProfileImgObj(e.target.files[0]);
            uploadFile(e.target.files[0]);
          }
        }}
      />
    </ProfileImage>
  )
}

export default ProfileImageUpload
