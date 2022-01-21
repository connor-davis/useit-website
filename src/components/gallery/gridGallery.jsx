let GridGallery = ({ images }) => {
  return (
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      {images &&
        images.map((imageUrl) => (
          <img src={imageUrl} class="galleryImage" data-emergence="hidden" />
        ))}
    </div>
  );
};

export default GridGallery;
