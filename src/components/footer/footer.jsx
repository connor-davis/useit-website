import UseItLogoSmall from '../../assets/useitlogosmall.webp';

let Footer = () => {
  return (
    <div class="bg-white w-full p-5">
      <div class="flex flex-col md:flex-row w-full justify-center space-y-10 md:space-y-0 md:space-x-10">
        <div class="flex space-x-5">
          <div
            class="cursor-pointer"
            onClick={() => {
              navigate('/');
            }}
          >
            <img src={UseItLogoSmall} class="w-20 md:w-24" />
          </div>
          <div class="break-all w-64">
            USE-IT is a Non-Profit Organisation with registered PBO status with
            the express aim of diverting waste and creating jobs.
          </div>
        </div>
        <div class="flex flex-col items-center space-y-5">
          <div class="w-full text-lg text-center font-bold text-green-900">
            Get social with us!
          </div>

          <div class="flex justify-center space-x-5 items-center">
            <a
              href="https://www.facebook.com/?stype=lo&jlou=Aff6iIKqIY34o9nTYqfKsEALHe2tCIFVDTvJvXz1n6OKJq5WfYg-Wx03aaQScAV6CpjDg04-hz_XlyNagBvT-7Y8&smuh=29644&lh=Ac_JFgCYT2rRF1kn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 fill-green-900"
              >
                <title>Facebook</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>

            <a
              href="http://www.twitter.com/@useitkzn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 fill-green-900"
              >
                <title>Twitter</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/chris-whyte-a457774"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                class="w-8 h-8 fill-green-900"
              >
                <title>LinkedIn</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="flex flex-col space-y-5">
          <div class="w-full text-lg font-bold text-green-900">
            Share your thoughts!
          </div>

          <div class="flex flex-col w-full">
            <div class="w-full">
              ​Telephone :{' '}
              <a
                href="tel:+27317652349"
                class="border-b border-black"
                target="_blank"
              >
                +27 31 765 2349
              </a>
            </div>
            <div class="w-full">
              Email :{' '}
              <a
                href="mailto:info@use-it.co.za"
                class="border-b border-black"
                target="_blank"
              >
                info@use-it.co.za
              </a>
            </div>
          </div>
          <div class="w-full">© 2022 By Connor Davis</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
