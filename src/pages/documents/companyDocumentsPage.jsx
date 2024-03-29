import { Link } from "solid-app-router";
import Footer from "../../components/footer/footer";

let CompanyDocumentsPage = ({ }) => {
  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 pt-2 border-tl border-gray-200 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 rounded-sm animate-fade-in duration-50 ease-in-out m-2">
        <div class="flex flex-col space-y-5  pt-10 p-5">
          <div class="flex-none text-5xl text-center font-bold border-b-2 border-green-900 dark:border-green-600 pb-5">
            Company Documents
          </div>

          <ul class="marker:text-green-900 dark:marker:text-green-600 list-outside list-disc px-5 text-lg">
          <li>
              <a
                href="https://drive.google.com/file/d/134R0nMdKG_wIXpoSOgi2Vlf8YULmUBuC/view?ts=6368f4a5"
                class="border-b   border-black dark:border-white"
                target="_blank"
              >
                PBO Certification
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1rBNMoqLWJdxT8jOoF8l-kQpSDjJC0twg/view?ts=6368f482"
                class="border-b   border-black dark:border-white"
                target="_blank"
              >
                Non-Profit Certification
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1eDocdR4LLfV8nlX1KiJYWCq0qn10YSy4/view?ts=6368f4c6"
                class="border-b   border-black dark:border-white"
                target="_blank"
              >
                BEE Certification
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1GZIKKw7BPZLAGDMDyuKTJd9tk0xCbHhO/view?ts=6368f445"
                class="border-b   border-black dark:border-white"
                target="_blank"
              >
                Audited Financial Statement
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1RLCxGRLuVzAHUZgAU1z0xlhh2czq2NhQ/view?ts=6368f4b5"
                class="border-b   border-black dark:border-white"
                target="_blank"
              >
                Company Registration
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1ZNxuc7CpidpGAekIRlxwa4v5ragKZT2t/view?ts=6368f4da"
                class="border-b   border-black dark:border-white"
                target="_blank"
              >
                Annual Report 2017-2018
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1C-mHjazsPHjeTobMnJL_-CvxaB9ScFFf/view?ts=6368f45f"
                class="border-b   border-black dark:border-white"
                target="_blank"
              >
                Annual Report 2018-2019
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1KeNvT0Lpf-xl6OnpUvZOvWIbXvtNhNLY/view?ts=6368f500"
                class="border-b   border-black dark:border-white"
                target="_blank"
              >
                Annual Report 2019-2020
              </a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1Vw_5GJiusnjXHryN6tkpaq8ZngRbw8U1/view?ts=6368f4ef" class="border-b   border-black dark:border-white"
                target="_blank"
              >
                Annual Report 2020-2021</a>
            </li>
            <li>
              <a href="https://drive.google.com/file/d/1bw2RFFQXbWaesw5gWor6R06eunRRBxdS/view?ts=6368f471" class="border-b   border-black dark:border-white"
                target="_blank"
              >
                Annual Report 2021-2022</a>
            </li>
          </ul>
          
          <ul class="list-disc px-5">
            <li>VAT Number: 4920274968</li>
            <li>PBO Number: 930036764</li>
            <li>NPO 089-770-NPO</li>
            <li>DUNS 652910419</li>
          </ul>

          <div class="text-lg">
            Should you require any additional documents please feel free to{' '}
            <Link
              href="/contactUs"
              class="border-b   border-black dark:border-white cursor-pointer"
            >
              contact us
            </Link>.
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CompanyDocumentsPage;
