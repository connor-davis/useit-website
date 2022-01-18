import Glide, {
    Breakpoints,
    Controls,
    Images
} from '@glidejs/glide/dist/glide.modular.esm';
import { onMount } from 'solid-js';
import DCoCI from '../../assets/DCoCI.webp';
import DSW from '../../assets/DSW.webp';
import EWASA from '../../assets/ewasa.webp';
import IoWMoSA from '../../assets/IoWMoSA.webp';
import NRF from '../../assets/NRF.webp';
import PSA from '../../assets/PSA.webp';

const sliderConfiguration = {
  peek: 50,
  gap: 10,
  perView: 3,
  type: 'carousel',
};

let AssociationsSlider = () => {
  const sliderFunders = new Glide('.glideAssociations', sliderConfiguration);

  onMount(() => {
    sliderFunders.mount({ Controls, Breakpoints, Images });
    // sliderAssociations.mount({ Controls, Breakpoints, Images });
  });

  return (
    <>
      <div class="text-4xl font-bold p-5 select-none">Associations</div>

      <div class="relative w-full h-auto p-5 pb-10 bg-white rounded-md">
        <div
          class="z-50 absolute bottom-5 left-5 bg-gray-900/60 text-white p-2 rounded-full cursor-pointer select-none"
          onClick={() => sliderFunders.go('<')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
        <div class="glideAssociations z-50">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide w-auto my-auto">
                <a href="https://ewasa.org" target="_blank">
                  <img src={EWASA} />
                </a>
              </li>
              <li class="glide__slide w-auto my-auto">
                <a href="https://durbanchamber.co.za" target="_blank">
                  <img src={DCoCI} />
                </a>
              </li>
              <li class="glide__slide w-auto my-auto">
                <a
                  href="https://www.durban.gov.za/City_Services/cleansing_solid_waste/Pages/default.aspx"
                  target="_blank"
                >
                  <img src={DSW} />
                </a>
              </li>
              <li class="glide__slide w-auto my-auto">
                <a href="https://www.plasticsinfo.co.za/" target="_blank">
                  <img src={PSA} />
                </a>
              </li>
              <li class="glide__slide w-auto my-auto">
                <a href="https://www.recycling.co.za/" target="_blank">
                  <img src={NRF} />
                </a>
              </li>

              <li class="glide__slide w-auto my-auto">
                <img src={IoWMoSA} />
              </li>
            </ul>
          </div>
        </div>
        <div
          class="z-50 absolute bottom-5 right-5 bg-gray-900/60 text-white p-2 rounded-full cursor-pointer select-none"
          onClick={() => sliderFunders.go('>')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default AssociationsSlider;
