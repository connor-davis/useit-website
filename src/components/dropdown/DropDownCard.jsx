import { createSignal } from 'solid-js';

let DropDownCard = ({ leftText, rightText, reverse, children }) => {
  let [active, setActive] = createSignal(false);

  return (
    <div class="flex flex-col bg-white dark:bg-gray-900">
      <div
        class={`flex w-full items-center space-x-10 cursor-pointer group ${
          reverse && 'flex-row-reverse'
        }`}
        onClick={() => setActive(!active())}
      >
        <div class="relative">
          <div class="flex z-50 justify-center items-center w-20 h-20 md:w-48 md:h-48  bg-green-900 dark:bg-green-600 text-white font-bold text-xl md:text-5xl">
            {leftText}
          </div>
          <div
            class={`absolute -z-50 ${
              reverse ? '-left-6' : 'right-2'
            } w-8 h-8 m-0 p-0 -rotate-45 transform top-1/2 -translate-y-1/2 origin-top-right bg-green-900 dark:bg-green-600`}
          ></div>
        </div>

        <div
          class={`flex z-10 items-center w-full h-full ${
            reverse ? 'text-start' : 'text-end'
          }`}
        >
          {rightText}
        </div>
      </div>

      {active() && (
        <div class="flex flex-col p-5">
          <div
            class="self-end cursor-pointer"
            onClick={() => setActive(!active())}
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div class="flex flex-col space-y-5">{children}</div>
        </div>
      )}
    </div>
  );
};

export default DropDownCard;
