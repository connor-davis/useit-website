import { createSignal } from 'solid-js';

let RecyclingModal = ({ root, children }) => {
  let [active, setActive] = createSignal(false);

  return (
    <div class="rounded relative md:static">
      <div
        class="cursor-pointer z-10"
        onClick={() => {
          setActive(true);
        }}
      >
        {root}
      </div>

      <div
        class={` ${
          active() ? '' : 'hidden'
        } absolute flex flex-col items-center rounded w-full h-full left-0 top-0`}
      >
        <div
          class="bg-gray-900/50 w-full h-full rounded"
          onClick={() => {
            setActive(false);
          }}
        ></div>
        <div class="absolute z-50 w-full md:w-4/6 h-auto p-5 flex flex-col space-y-5 bg-white dark:bg-gray-900 rounded shadow-lg m-5">
          <div class="self-end cursor-pointer" onClick={() => setActive(false)}>
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
      </div>
    </div>
  );
};

export default RecyclingModal;
