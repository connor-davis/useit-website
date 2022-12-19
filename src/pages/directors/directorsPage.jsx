import AdrienneImage from '../../assets/adrienne.webp';
import AnukaImage from '../../assets/anuka.webp';
import BelindaImage from '../../assets/belinda.webp';
import DevonImage from '../../assets/devon.webp';
import HeidiImage from '../../assets/heidi.png';
import MarkImage from '../../assets/mark.webp';
import PaulosImage from '../../assets/paulos.webp';
import PortioImage from '../../assets/portio.webp';
import Footer from '../../components/footer/footer';

let DirectorsPage = ({ }) => {
  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 pt-2 border-tl border-gray-200 backdrop-blur-md bg-white/50 dark:bg-gray-900/50 rounded-sm animate-fade-in duration-50 ease-in-out m-2">
        <div class="flex flex-col space-y-5 pt-10 p-5">
          <div class="flex-none text-5xl text-center font-bold border-b-2 border-green-900 dark:border-green-600 pb-5">
            Directors
          </div>

          <div class="space-y-20 md:space-y-10">
            <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
              <img
                src={BelindaImage}
                class="rounded-full grayscale flex-none w-48 h-48"
              />

              <div class="flex flex-col space-y-5 w-full">
                <div class="text-2xl font-bold">Belinda Putterill</div>
                <div class="text-xl text-green-900 dark:text-green-600">Managing Director</div>
                <div class="text-md">
                  Belinda has been with USE-IT since 2018.
                </div>
                <div class="text-md">
                  Experienced Operations Manager with a demonstrated history of
                  working in the non-profit organization management industry who
                  has recently been promoted to the Managing Director. Graduated
                  from Ladysmith High School, KwaZulu and has been employed in
                  various sectors ranging from sales, operations, construction,
                  civil engineering and local government.
                </div>
                <div>
                  <a
                    href="https://www.linkedin.com/in/belinda-putterill-834089110/"
                    target="_blank"
                    class="border-b  border-black dark:border-white cursor-pointer"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
              <img
                src={PaulosImage}
                class="rounded-full grayscale flex-none w-48 h-48"
              />

              <div class="flex flex-col space-y-5 w-full">
                <div class="text-2xl font-bold">Paulos Ngcobo</div>
                <div class="text-xl text-green-900 dark:text-green-600">Chairperson</div>
                <div class="text-md">
                  Paulos Ngcobo has been a Director with USE-IT since 2015.
                </div>
                <div class="text-md">
                  He worked for NUMSA from 1982 to 1993 as a Union Organizer.
                  From November 1993 until 1999, he served as COSATU’s
                  Provincial Secretary . In 1999 he joined the KwaZulu-Natal
                  Parliament and served in the following committees: Premier,
                  Finance & Economic, Transport, Agriculture, Public Works and
                  Sport & Recreation. Ngcobo holds the following diplomas:
                </div>
                <ul class="list-disc px-5">
                  <li>
                    Special Human Resource which he did at Natal Technicon
                  </li>
                  <li>Labour Economics by Workers College.</li>
                  <li>Co-operatives, which he did in Israel.</li>
                </ul>
                <div class="text-md">
                  Paulos currently works in the private sector and is seated on
                  various other boards.
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
              <img
                src={MarkImage}
                class="rounded-full grayscale flex-none w-48 h-48"
              />

              <div class="flex flex-col space-y-5 w-full">
                <div class="text-2xl font-bold">Mark Liptrot</div>
                <div class="text-xl text-green-900 dark:text-green-600">Director</div>
                <div class="text-md">
                  Mark Liptrot has been a Director with USE-IT since 2014.
                </div>
                <div class="text-md">
                  Educated in Nigeria, England and South Africa, Mark embarked
                  on a journey through the technical departments in a variety of
                  consumer-based industries. He has been involved in waste
                  management since 1996 at various printing and packaging
                  companies, and has been a member of the IWMSA since 1999 His
                  particular interest is maximising the use of waste, and in
                  particular manufacturing items from non-recyclable plastics,
                  for which he has won several awards.
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
              <img
                src={PortioImage}
                class="rounded-full grayscale flex-none w-48 h-48"
              />

              <div class="flex flex-col space-y-5 w-full">
                <div class="text-2xl font-bold">Portio Dlamini</div>
                <div class="text-xl text-green-900 dark:text-green-600">Director</div>
                <div class="text-md">
                  Portio Dlamini is currently  the Managing Director of Emakheni Group, a company she started 9 years ago. She is a Chemical Process Engineer by proffession, with more than 10 years experience in the Manufacturing industry.
                </div>
                <div class="text-md">
                  She is  a dynamic woman whose experience in the Manufacturing industry gave her the ability to understand systems and people. And how these can work together to maximise output and increase margin. Emakheni was born out of that!
                </div>
                <div class="text-md">
                  Running her own business has given her  the ability to dream, solve problems and dive into different roles as a Leader & Change Agent .
                </div>
                <div class="text-md">
                  Her strengths in  Leadership, Communication, and Empowerment have given her a competitive edge as an Entrepreneur.  She is also passionate about the empowerment of the marginalized through different mediums in order to transform & elevate their lives. This is one of the major reasons her first business venture has been in the Cleaning & Hygiene industry - to transform lives while cleaning excellently.
                </div>
                <div class="text-md">
                  She has won numerous awards over the past 5 years including Sekela Passion & Patience Awards (funded by SA Homeloans Foundation),  the Regional Positive Role Model Award ( KZN) - by Gender Mainstream Awards, and also came 4th in the same category in Southern  Africa. This award recognizes women who are making a difference  in their industries.
                </div>
                <div class="text-md">
                  She was also one of the main participants in the  the KZNTopBusinesswonen 2021 campaign that  was sponsored by Standard Bank.
                </div>
                <div class="text-md">
                  Portio sees herself  and  Emakheni Group being players in the  Cleaning & Hygiene, Waste Management and Manufacturing  sectors.  And will continue to transform  lives through the  Empowerment  & Leadership development initiatives
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
              <img
                src={HeidiImage}
                class="rounded-full grayscale flex-none w-48 h-48"
              />

              <div class="flex flex-col space-y-5 w-full">
                <div class="text-2xl font-bold">Heidi Cox</div>
                <div class="text-xl text-green-900 dark:text-green-600">Director</div>
                <div class="text-md">
                  Heidi has been with USE-IT since 2018.
                </div>
                <div class="text-md">
                  A qualified textile technologist, Heidi has over 20 years’
                  technical manufacturing experience in the textile industry,
                  but has always had a keen interest in conservation and the
                  environment. In 2009, when the time came to “go it alone” due
                  to factory closure, Heidi decided to diversify her area of
                  expertise and set about researching the in-factory
                  requirements of post-consumer waste to be used as raw
                  materials for recycled products, with a view to pass on the
                  unadulterated facts on recycling to consumers. For 7 years,
                  for some time at her own cost, but currently supported by the
                  Paper Recycling Association of SA, Heidi has visited schools,
                  community groups and any other willing victims, intent on
                  creating public awareness of good practice in waste
                  management.
                </div>
                <div class="text-md">
                  Starting out as more of a concerned citizen, and relatively
                  new to this industry, Heidi hopes to make a difference in
                  public awareness of the importance of participation in
                  responsible waste management in the smallest and largest
                  contexts, as well as support and expand economically
                  sustainable, industrial-scale end-uses for waste goods that
                  are still being sent to landfill.
                </div>
                <div class="text-md">
                  Heidi is the chairperson of the South African Dyers’ and
                  Finishers’ Association, and is on the committee of the
                  Mountain Backpackers’ Club. She runs, hikes, cycles and is
                  threatening to do a triathlon in the not-too-distant future.
                  She also enjoys reading, bird-watching and taking time to
                  appreciate the peace of wild areas.
                </div>
                <div class="text-md">
                  Heidi’s husband, Chris Cox, is a chemical engineer with a
                  background in the paper industry, and thus endures hours of
                  interrogation on a regular basis. They have 2 sons, 3 dogs and
                  a cat who shall be obeyed.
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
              <img
                src={AdrienneImage}
                class="rounded-full grayscale flex-none w-48 h-48"
              />

              <div class="flex flex-col space-y-5 w-full">
                <div class="text-2xl font-bold">Adrienne Brown</div>
                <div class="text-xl text-green-900 dark:text-green-600">Director</div>
                <div class="text-md">
                  An entrepreneurial accountant and coach who completed her
                  Articles with Grant Thornton in 2004 BCompt - UNISA, she has a
                  BCompt degree and a strong passion for assisting entrepreneurs
                  and businesses with the A – Z of running their business
                  financially.
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5">
              <img
                src={AnukaImage}
                class="rounded-full grayscale flex-none w-48 h-48"
              />

              <div class="flex flex-col space-y-5 w-full">
                <div class="text-2xl font-bold">Anuka Baijoo-Brown</div>
                <div class="text-xl text-green-900 dark:text-green-600">Director</div>
                <div class="text-md">
                  Experienced Quality Assurance Manager with a demonstrated
                  history of working in the packaging and industry.
                </div>
                <div class="text-md">
                  Skilled in Manufacturing, Operations Management, Packaging
                  Design, Management, and Lean Manufacturing. Strong quality
                  assurance professional graduated from the University of Natal
                  with BSC Chemistry
                </div>
              </div>
            </div>

            <div class="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-5">
              <img
                src={DevonImage}
                class="rounded-full grayscale flex-none w-48 h-48"
              />

              <div class="flex flex-col space-y-5 w-full">
                <div class="text-2xl font-bold">Devon De Sousa</div>
                <div class="text-xl text-green-900 dark:text-green-600">Director</div>
                <div class="text-md">
                  A seasoned legal executive committed to ensuring an equitable,
                  diverse and high performing culture by providing expert advice
                  and quality services to attract, develop, motivate and
                  maintain a diverse and engaged workforce. Demonstrates
                  strategic leadership and direction to achieve company
                  objectives through employee training and development and
                  engagement initiatives. Leverage success in establishing
                  trusted partnerships through exceptional relationship-building
                  skills, utilising strong interpersonal abilities to secure
                  trust between employees and management. A strategic business
                  partner focused on legal compliance, leading people, processes
                  and outcomes and improving business agility.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DirectorsPage;
