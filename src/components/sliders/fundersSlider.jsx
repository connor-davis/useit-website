import Glide, {
    Breakpoints,
    Controls,
    Images
} from '@glidejs/glide/dist/glide.modular.esm';
import { useNavigate } from 'solid-app-router';
import { onMount } from 'solid-js';
import AshokaImage from '../../assets/ashoka.gif';
import EthekwiniImage from '../../assets/ethekwini.webp';
import GreenFundImage from '../../assets/greenfund.webp';
import TradeAndInvestmentImage from '../../assets/trade.webp';

const sliderConfiguration = {
  peek: 50,
  gap: 10,
  perView: 3,
  type: 'carousel',
  autoplay: 10000,
};

let FundersSlider = () => {
  let navigate = useNavigate();

  const sliderFunders = new Glide('.glideFunders', sliderConfiguration);

  onMount(() => {
    sliderFunders.mount({ Controls, Breakpoints, Images });
    // sliderAssociations.mount({ Controls, Breakpoints, Images });
  });

  return (
    <div class="relative">
      <div class="text-4xl font-bold p-5 select-none">​Funders</div>

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
        <div class="glideFunders relative">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              <li class="glide__slide w-auto my-auto">
                <a
                  href="https://www.durban.gov.za/Discover_Durban/Pages/default.aspx"
                  target="_blank"
                >
                  <img src={EthekwiniImage} />
                </a>
              </li>
              <li class="glide__slide w-auto my-auto">
                <a href="https://www.ashoka.org/en-us" target="_blank">
                  <img src={AshokaImage} class="max-h-40" />
                </a>
              </li>
              <li class="glide__slide w-auto my-auto">
                <img src={TradeAndInvestmentImage} />
              </li>
              <li class="glide__slide w-auto my-auto">
                <img src={GreenFundImage} />
              </li>
            </ul>
          </div>
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
  );
};

export default FundersSlider;
