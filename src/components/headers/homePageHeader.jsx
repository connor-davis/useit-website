import { useNavigate } from 'solid-app-router';
import { createSignal } from 'solid-js';
import UseItLogoBig from '../../assets/useitlogobig.webp';
import DropDown from '../dropdown/DropDown';

let HomePageHeader = () => {
  let navigate = useNavigate();

  let [menuToggled, toggleMenu] = createSignal(false);

  return (
    <div class="flex flex-col md:flex-row md:justify-between md:items-center w-screen p-5 shadow-md bg-white flex-none z-50">
      <div class="flex justify-between items-center">
        <div
          class="cursor-pointer"
          onClick={() => {
            navigate('/');
          }}
        >
          <img src={UseItLogoBig} class="w-32 md:w-48" />
        </div>

        <div
          class="md:hidden"
          onClick={() => {
            toggleMenu(!menuToggled());
          }}
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
      <div class={`hidden md:flex items-center`}>
        <div
          class="cursor-pointer py-2 px-4 hover:bg-green-100"
          onClick={() => {
            navigate('/');
          }}
        >
          Home
        </div>
        <div
          class="cursor-pointer py-2 px-4 hover:bg-green-100"
          onClick={() => {
            navigate('/aboutUs');
          }}
        >
          About Us
        </div>
        <div
          class="cursor-pointer py-2 px-4 hover:bg-green-100"
          onClick={() => {
            navigate('/projects');
          }}
        >
          Projects
        </div>
        <div
          class="cursor-pointer py-2 px-4 hover:bg-green-100"
          onClick={() => {
            navigate('/contactUs');
          }}
        >
          Contact Us
        </div>
        <DropDown text={'More'}>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/resources');
            }}
          >
            Resources
          </div>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/links');
            }}
          >
            Links
          </div>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/');
            }}
          >
            News
          </div>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/');
            }}
          >
            NGO Promotions
          </div>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/');
            }}
          >
            Gallery
          </div>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/');
            }}
          >
            HWBC Photos
          </div>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/');
            }}
          >
            FAQ
          </div>
        </DropDown>
      </div>

      <div
        class={`${
          menuToggled()
            ? 'absolute top-0 left-0 w-screen h-screen z-50 bg-white animate-fade-in ease-in-out'
            : 'hidden animate-fade-out ease-in-out'
        }`}
      >
        <div class="flex justify-between items-center p-5">
          <div class="text-3xl"></div>

          <div
            class="md:hidden"
            onClick={() => {
              toggleMenu(!menuToggled());
            }}
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
        </div>

        <div
          class="cursor-pointer text-xl py-2 px-4 hover:bg-green-100"
          onClick={() => {
            navigate('/');
            toggleMenu(!menuToggled());
          }}
        >
          Home
        </div>
        <div
          class="cursor-pointer text-xl py-2 px-4 hover:bg-green-100"
          onClick={() => {
            navigate('/aboutUs');
            toggleMenu(!menuToggled());
          }}
        >
          About Us
        </div>
        <div
          class="cursor-pointer text-xl py-2 px-4 hover:bg-green-100"
          onClick={() => {
            navigate('/projects');
            toggleMenu(!menuToggled());
          }}
        >
          Projects
        </div>
        <div
          class="cursor-pointer text-xl py-2 px-4 hover:bg-green-100"
          onClick={() => {
            navigate('/contactUs');
            toggleMenu(!menuToggled());
          }}
        >
          Contact Us
        </div>
        <DropDown text={'More'}>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/resources');
              toggleMenu(!menuToggled());
            }}
          >
            Resources
          </div>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/links');
              toggleMenu(!menuToggled());
            }}
          >
            Links
          </div>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/');
              toggleMenu(!menuToggled());
            }}
          >
            News
          </div>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/');
              toggleMenu(!menuToggled());
            }}
          >
            NGO Promotions
          </div>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/');
              toggleMenu(!menuToggled());
            }}
          >
            Gallery
          </div>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/');
              toggleMenu(!menuToggled());
            }}
          >
            HWBC Photos
          </div>
          <div
            class="break-none cursor-pointer py-2 px-4 hover:bg-green-100"
            onClick={() => {
              navigate('/');
              toggleMenu(!menuToggled());
            }}
          >
            FAQ
          </div>
        </DropDown>
      </div>
    </div>
  );
};

export default HomePageHeader;
