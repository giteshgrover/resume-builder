import React, { useRef } from 'react';
import { Box, Button, Avatar } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

function ImageUpload({ image, onImageChange }) {
  const fileInputRef = useRef();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Avatar
        src={image}
        sx={{ width: 120, height: 120, mb: 2 }}
        onClick={() => fileInputRef.current.click()}
      />
      <Button
        variant="outlined"
        startIcon={<AddAPhotoIcon />}
        onClick={() => fileInputRef.current.click()}
      >
        Upload Photo
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        style={{ display: 'none' }}
      />
    </Box>
  );
}

export default ImageUpload; 