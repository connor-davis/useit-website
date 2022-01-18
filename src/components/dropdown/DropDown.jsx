import { createSignal } from 'solid-js';

let DropDown = ({ text, children }) => {
  let [active, setActive] = createSignal(false);

  return (
    <div
      class="relative h-auto"
      onClick={() => {
        setActive(!active());
      }}
    >
      <div class="cursor-pointer py-2 px-4 hover:bg-green-100 text-xl md:text-base">{text}</div>

      {active() && (
        <div class="absolute w-full md:w-64 top-full right-0 bg-white md:border-l md:border-t md:border-r md:border-b md:border-gray-100 p-3 z-50 drop-shadow-xl">
          {children}
        </div>
      )}
    </div>
  );
};

export default DropDown;
