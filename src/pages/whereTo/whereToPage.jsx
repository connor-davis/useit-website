import Footer from '../../components/footer/footer';

let WhereToPage = ({}) => {
  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 pt-2 border-tl border-gray-200 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 rounded-sm animate-fade-in duration-50 ease-in-out m-2">
        <div class="flex flex-col space-y-5  pt-10 p-5">
          <div class="flex-none text-5xl text-center font-bold border-b-2 border-green-900 dark:border-green-600 pb-5">
            Where can I take my Recyclables?
          </div>

          <div class="text-lg">
            DSW has Buy-Back and Drop Off Centers strategically located within
            the eThekwini Region allowing for easy access to the community. The
            recyclables that are accepted at these sites are paper, plastic,
            cans, glass and cardboard.
          </div>

          <div class="text-xl text-green-900 dark:text-green-600">
            DSW Customer Service Line:
          </div>

          <ul class="list-disc px-5">
            <li>Tel: 031 311 8804 / 36</li>
            <li>
              email:{' '}
              <a
                href="mailto:dsw@durban.gov.za"
                type="_blank"
                class="border-b border-black dark:border-white cursor-pointer"
              >
                dsw@durban.gov.za
              </a>
            </li>
            <li>
              Website:{' '}
              <a
                href="https://www.durban.gov.za"
                type="_blank"
                class="border-b border-black dark:border-white cursor-pointer"
              >
                www.durban.gov.za
              </a>
            </li>
            <li>P O Box 1038</li>
            <li>Durban</li>
            <li>4000</li>
            <li>
              Education and Waste Minimisation Section:
              <br />
              <span>031 303 1665</span>
            </li>
          </ul>

          <div class="text-xl text-green-900 dark:text-green-600">
            INNERWEST / OUTERWEST:
          </div>
          <ul class="list-disc px-5">
            <li>
              Westville Community Drop Off Site - William Lester Drive,
              Westville
            </li>
            <li>
              Kloof Community Drop Off Site - Emolweni Road, Kloof Civic Centre,
              Kloof
            </li>
            <li>Escom Road Buy Back Centre - 19 Pineside Road, New Germany</li>
            <li>Westmeade Recycling Centre - 34 Westmeade Road, Westmeade</li>
            <li>
              Queensmeade Recycling Centre - Cnr of Turquoise and Piet Retief,
              Queensmead
            </li>
            <li>
              Hillcrest Drop off Centre - Cnr of Hospital & Delamore Road
              (Sizakala Centre)
            </li>
          </ul>

          <div class="text-xl text-green-900 dark:text-green-600">CENTRAL:</div>
          <ul class="list-disc px-5">
            <li>
              Brook St Community Buy Back Centre - 2 Brook Street North, Warwick
              Junction
            </li>
            <li>
              Lornes Street Buy Back Centre - Carlisle Street off ML Sultan Road
            </li>
          </ul>

          <div class="text-xl text-green-900 dark:text-green-600">NORTH:</div>
          <ul class="list-disc px-5">
            <li>
              Malacca Road, Garden Refuse Community Drop Off Centre - Malacca
              Road, Durban North
            </li>
            <li>
              Phoenix, Garden Refuse Community Drop Off Centre - Canehaven
              Drive, Phoenix
            </li>
            <li>
              Mt Edgecombe, Garden Refuse Community Drop Off Centre - Flanders
              Road
            </li>
            <li>
              Newlands, Garden Refuse Community Drop Off Centre - Pipdale ROad,
              Newlands West
            </li>
            <li>
              Riverside Road Garden Refuse Community Drop Off Site - Riverside
              Road, Durban North
            </li>
            <li>
              North Coast Recycling Site - 1244 Old North Coast Road, Redhill
            </li>
            <li>
              Kwa Mashu Buy Back SIte - Close to road 106354, in the vicinity of
              Malandela Road
            </li>
          </ul>

          <div class="text-xl text-green-900 dark:text-green-600">SOUTH:</div>
          <ul class="list-disc px-5">
            <li>
              Seadoone Road, Garden Refuse Community Drop Off Site - Seadoone
              Road, Amanzimtoti
            </li>
            <li>
              Nyati Road, Garden Refuse Community Drop Off SIte - Nyati Road,
              Amanzimtoti
            </li>
            <li>
              Bellair, Garden Refuse Community Drop Off Site- Bellair Road
            </li>
            <li>Westmeade Recycling Centre - 34 Westmeade Road, Westmeade</li>
            <li>
              Woodlands, Garden Refuse Community Drop Off Site - Glanville Road,
              Woodlands
            </li>
            <li>
              Chatsworth, Garden Refuse Community Drop Off SIte - 5 Sagittarius
              Road, Chatsworth
            </li>
            <li>
              Merewent Garden site and Recycling Drop Off, Travencore Drive
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default WhereToPage;
