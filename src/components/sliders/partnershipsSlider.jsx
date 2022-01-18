import Glide, {
    Breakpoints,
    Controls,
    Images
} from '@glidejs/glide/dist/glide.modular.esm';
import { onMount } from 'solid-js';
import AECT from '../../assets/AECT.webp';
import Baobab from '../../assets/Baobab.webp';
import IES from '../../assets/ies.webp';
import InvoTech from '../../assets/invotech.webp';
import LifeCo from '../../assets/LifeCo.webp';
import Nedbank from '../../assets/Nedbank.webp';
import SongiMvelo from '../../assets/SongiMvelo.webp';
import Umgibe from '../../assets/Umgibe.webp';
import WildLands from '../../assets/WildLands.webp';
import WildTrust from '../../assets/WildTrust.webp';
import Yes4Youth from '../../assets/Yes4Youth.webp';

const sliderConfiguration = {
  peek: 50,
  gap: 10,
  perView: 3,
  type: 'carousel',
};

let PartnershipsSlider = () => {
  const sliderFunders = new Glide('.glidePartnerships', sliderConfiguration);

  onMount(() => {
    sliderFunders.mount({ Controls, Breakpoints, Images });
    // sliderAssociations.mount({ Controls, Breakpoints, Images });
  });

  return (
    <>
      <div class="text-4xl font-bold p-5 select-none">Partnerships</div>

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
        <div class="glidePartnerships z-50">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide w-auto my-auto">
                <a href="https://interwaste.co.za" target="_blank">
                  <img src={IES} />
                </a>
              </li>
              <li class="glide__slide w-auto my-auto">
                <a
                  href="https://www.dut.ac.za/Invotech_Innovation_for_Entrepreneurs_Programme_now_open_Find_out_more_/"
                  target="_blank"
                >
                  <img src={InvoTech} />
                </a>
              </li>
              <li class="glide__slide w-auto my-auto">
                <a
                  href="songimvelorecyclers@gmail.com?subject=Query from USE-IT website"
                  target="mailto"
                >
                  <img src={SongiMvelo} />
                </a>
              </li>
              <li class="glide__slide w-auto my-auto">
                <a href="https://www.lcu-sa.com/" target="_blank">
                  <img src={LifeCo} />
                </a>
              </li>
              <li class="glide__slide w-auto my-auto">
                <a href="http://umgibe.org/" target="_blank">
                  <img src={Umgibe} />
                </a>
              </li>

              <li class="glide__slide w-auto my-auto">
                <img src={AECT} />
              </li>
              <li class="glide__slide w-auto my-auto">
                <img src={Baobab} />
              </li>
              <li class="glide__slide w-auto my-auto">
                <img src={Nedbank} />
              </li>
              <li class="glide__slide w-auto my-auto">
                <img src={Yes4Youth} />
              </li>
              <li class="glide__slide w-auto my-auto">
                <img src={WildTrust} />
              </li>
              <li class="glide__slide w-auto my-auto">
                <img src={WildLands} />
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

export default PartnershipsSlider;
