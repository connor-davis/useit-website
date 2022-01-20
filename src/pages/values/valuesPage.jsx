import Footer from '../../components/footer/footer';

let ValuesPage = ({}) => {
  return (
    <div class="flex flex-col items-center w-screen h-full overflow-x-hidden overflow-y-auto">
      <div class="z-10 flex flex-col w-full md:w-4/5 lg:w-4/6 h-auto shadow-md space-y-2 pt-2 border-tl border-gray-200 backdrop-blur-md bg-white/50 rounded-sm animate-fade-in duration-50 ease-in-out m-2">
        <div class="flex flex-col space-y-5 pt-10 p-5">
          <div class="flex-none text-5xl text-center font-bold border-b-2 border-green-900 pb-5">
            Values and Criticial Success Factors
          </div>

          <div class="text-3xl text-green-900">Our values</div>

          <ul class="list-disc px-5">
            <li>Integrity</li>
            <li>Approachability</li>
            <li>Innovation</li>
            <li>Collaboration</li>
            <li>Passion</li>
            <li>Focus</li>
          </ul>

          <div class="text-3xl text-green-900">Critical Success Factors</div>

          <ul class="list-disc px-5">
            <li>
              <span class="font-bold">People:</span> Ensuring the USE-IT has a
              committed, passionate and knowledgeable team;
            </li>
            <li>
              <span class="font-bold">Partnerships:</span> The creating of
              catalytic partnerships through positive mutually beneficial
              relationships;
            </li>
            <li>
              <span class="font-bold">Funding:</span> Establish consistent
              reliable and distributed sources of funding;
            </li>
            <li>
              <span class="font-bold">Processes:</span> Accurate customized
              processes that provide the necessary reporting requirements for
              USE-IT's stakeholders and funders
            </li>
            <li>
              <span class="font-bold">Marketing:</span> Establish and maintain
              communication platforms that promote USE-IT, waste diversion and
              job creation through waste beneficiation projects;
            </li>
            <li>
              <span class="font-bold">Knowledge Management:</span> Keep up to
              date with relevant, current innovation and best practice in the
              industry;
            </li>
            <li>
              <span class="font-bold">Enterprise Development:</span> Identify
              and assist with funding and growing viable projects.
            </li>
          </ul>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ValuesPage;
