import { useNavigate } from 'solid-app-router';
import StrategyImage from '../../assets/Use It Strategy.webp';

let HomePage = () => {
  let navigate = useNavigate();

  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto p-2">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 pt-2 border-tl border-gray-200 backdrop-blur-md bg-white/50 rounded-sm animate-fade-in duration-50 ease-in-out">
        <div class="flex flex-col space-y-5 text-center pt-10 p-5">
          <div class="text-5xl font-bold">USE-IT Non-Profit Organisation</div>
          <div class="text-3xl">
            eThekwini Waste Materials Recovery Industry Development Cluster
          </div>
          <div class="text-lg">
            USE IT WASTE BENEFICIATION (RF) NPC is a Durban based Section 21
            Company that identifies waste beneficiation opportunities in the
            eThekwini Municipal area that will help to divert waste from
            landfill and create employment in the green economy as well as
            provide a number of specialised services.
          </div>
          <div class="flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0 md:space-x-5">
            <div class="flex justify-center items-center w-full h-auto py-2 bg-green-900 text-white cursor-pointer rounded-md" onClick={() => {navigate('/aboutUs')}}>
              About Us
            </div>
            <div class="flex justify-center items-center w-full h-auto py-2 bg-green-900 text-white cursor-pointer rounded-md">
              Latest News
            </div>
            <div class="flex justify-center items-center w-full h-auto py-2 bg-green-900 text-white cursor-pointer rounded-md">
              Videos
            </div>
            <div class="flex justify-center items-center w-full h-auto py-2 bg-green-900 text-white cursor-pointer rounded-md">
              Resources
            </div>
          </div>
          <div class="flex flex-col space-y-3">
            <div class="text-xl font-bold">Our Vision:</div>
            <div class="text-lg font-semibold">
              "To maximize waste diversion from landfill into waste
              beneficiation projects that create a multiplier effect of positive
              benefits to the environment, the economy and the creation of jobs"
            </div>
            <div class="text-lg font-semibold">
              For our values and critical success factors follow this{' '}
              <a href="" class="border-b border-black">
                link
              </a>
            </div>
          </div>
        </div>

        <div class="flex w-full h-auto bg-white justify-center shadow-md rounded-md p-2">
          <img src={StrategyImage} />
        </div>

        <div class="flex flex-col space-y-5 pb-10 p-5 text-black">
          <div class="text-xl font-bold">
            ​USE-IT is the only organization of it's kind in South Africa, it
            holds, among others, the following strengths:
          </div>
          <ul class="list-disc px-5">
            <li>Credible</li>
            <li>Transparent</li>
            <li>Impressive list of awards and achievements</li>
            <li>Committed and dedicated staff members</li>
            <li>Excellent reputation</li>
            <li>
              Growing demand / need for services, the cornerstone of income
              generation
            </li>
            <li>
              The importance of recycling is being recognized more and more
              because of the work done by USE-IT
            </li>
            <li>Registered with the KZN Recycling Forum</li>
            <li>
              Registered as an NPO and NPC with Section 18A Tax Certificate
            </li>
          </ul>

          <div class="text-xl font-bold">How can you get involved?</div>
          <ul class="list-disc px-5">
            <li>
              <a href="#contact" class="border-b border-black">
                Contact
              </a>{' '}
              our offices and someone will respond to your query!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
