import * as Emergence from 'emergence.js';
import { onMount } from 'solid-js';
import Image1 from '../../assets/gallery/1.webp';
import Image10 from '../../assets/gallery/10.webp';
import Image11 from '../../assets/gallery/11.webp';
import Image12 from '../../assets/gallery/12.webp';
import Image13 from '../../assets/gallery/13.webp';
import Image14 from '../../assets/gallery/14.webp';
import Image15 from '../../assets/gallery/15.webp';
import Image16 from '../../assets/gallery/16.webp';
import Image17 from '../../assets/gallery/17.webp';
import Image18 from '../../assets/gallery/18.webp';
import Image19 from '../../assets/gallery/19.webp';
import Image2 from '../../assets/gallery/2.webp';
import Image20 from '../../assets/gallery/20.webp';
import Image21 from '../../assets/gallery/21.webp';
import Image22 from '../../assets/gallery/22.webp';
import Image23 from '../../assets/gallery/23.webp';
import Image24 from '../../assets/gallery/24.webp';
import Image25 from '../../assets/gallery/25.webp';
import Image3 from '../../assets/gallery/3.webp';
import Image4 from '../../assets/gallery/4.webp';
import Image5 from '../../assets/gallery/5.webp';
import Image6 from '../../assets/gallery/6.webp';
import Image7 from '../../assets/gallery/7.webp';
import Image8 from '../../assets/gallery/8.webp';
import Image9 from '../../assets/gallery/9.webp';
import Footer from '../../components/footer/footer';
import GridGallery from '../../components/gallery/gridGallery';


let emergence = Emergence(this);

let GalleryPage = ({}) => {
  let imageUrls = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    Image24,
    Image25,
  ];

  onMount(() => {
    var wrapper = document.querySelector('.galleryContainer');

    emergence.init({
      container: wrapper,
    });

    emergence.engage();
  });

  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto galleryContainer">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 pt-2 border-tl border-gray-200 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 rounded-sm animate-fade-in duration-50 ease-in-out m-2">
        <div class="flex flex-col space-y-5  pt-10 p-5">
          <div class="flex-none text-5xl text-center font-bold border-b-2 border-green-900 dark:border-green-600 pb-5">
            Gallery
          </div>

          <GridGallery images={imageUrls} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GalleryPage;
