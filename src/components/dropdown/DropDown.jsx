let DropDown = ({ text, onClick, children }) => {
  return (
    <div class="relative h-auto group">
      <div class="cursor-pointer py-2 px-4 hover:bg-green-100 dark:hover:bg-green-600 text-xl md:text-base" onClick={onClick}>
        {text}
      </div>

      <div class="hidden group-hover:block absolute w-full md:w-64 top-full right-0 bg-white dark:bg-gray-900 md:border-l md:border-t md:border-r md:border-b md:border-gray-100 dark:md:border-gray-800 p-3 z-50 drop-shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default DropDown;
