import Footer from "../../components/footer/footer";

let ContactPage = () => {
  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto ">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 pt-2 border-tl border-gray-200 dark:border-gray-800 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 rounded-sm animate-fade-in duration-50 ease-in-out m-2">
        <div class="flex flex-col space-y-5 pt-10 p-5">
          <div class="flex-none text-5xl text-center font-bold border-b-2 border-green-900 dark:border-green-600 pb-5">
            How to Contact Us
          </div>

          <div class="flex flex-col w-full space-y-5">
            <div class="text-4xl font-bold">Get in touch</div>
            <div class="text-xl">
              We would love to hear from you, for any information, please feel
              free to contact us.
            </div>

            <form
              class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"
              action="https://formspree.io/f/mvolgeba"
              method="POST"
            >
              <div class="flex flex-col w-full space-y-2">
                <input
                  class="bg-white border-l border-t border-r border-b border-green-900 dark:border-green-600 outline-none p-2"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name *"
                  required
                />
                <input
                  class="bg-white border-l border-t border-r border-b border-green-900 dark:border-green-600 outline-none p-2"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email *"
                  required
                />
                <input
                  class="bg-white border-l border-t border-r border-b border-green-900 dark:border-green-600 outline-none p-2"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Phone Number"
                />
                <input
                  class="bg-white border-l border-t border-r border-b border-green-900 dark:border-green-600 outline-none p-2"
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div class="flex flex-col w-full space-y-2">
                <textarea
                  class="w-full h-48 md:h-full bg-white border-l border-t border-r border-b border-green-900 dark:border-green-600 outline-none p-2"
                  name="message"
                  id="message"
                  placeholder="Message"
                ></textarea>
                <button
                  type="submit"
                  class="w-auto bg-green-900 dark:bg-green-600 border-l border-t border-r border-b border-green-900 dark:border-green-600 text-white outline-none px-4 py-2"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-2">
            <div class="flex flex-col space-y-5 w-full">
              <div class="text-2xl font-bold">Our Address</div>
              <div class="flex flex-col space-y-5">
                <div>21 Buthelezi Road, Mpumalanga F, Hammarsdale</div>
                <div>Coordinates:</div>
                <div>-29.812530, 30.643365</div>
                <div>
                  <div>Tel: +27 (0) 31 765 2349</div>
                  <div>Email: info@use-it.co.za</div>
                </div>
              </div>
            </div>
            <iframe
              class="w-full h-96"
              frameborder="0"
              style="border:0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAH8g_iKPrzzhPiO_wae4uXjU5sNwP-h9o&q=Hammarsdale Waste Beneficiation Centre"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
