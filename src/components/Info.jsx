import React, { useState } from 'react';

const Info = () => {
  const [currentPage, setCurrentPage] = useState(1); // State to track current page

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-100 px-8 py-12">
      {/* Navigation buttons */}
      <div className="flex justify-center mb-8">
        <button
          onClick={() => handlePageChange(1)}
          className={`mr-4 px-4 py-2 rounded ${
            currentPage === 1 ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          2023
        </button>
        <button
          onClick={() => handlePageChange(2)}
          className={`px-4 py-2 rounded ${
            currentPage === 2 ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'
          }`}
        >
          2024
        </button>
      </div>

      {/* Conditional rendering based on currentPage state */}
      {currentPage === 1 && (
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Event <span className="text-green-600">Section</span>
          </h1>
          {/* Content for 2023 */}
          <div className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
  In line with one of the components of Primary Healthcare and as enshrined in the sustainable development goal,
  target 3.8, ‘Provision of essential medicines’ Pharmaceutical Market Access Initiative and Development 
  (Pharma-AID Africa) on the 24th of August, 2023 was at Karmo Sabo Primary Health Care Centre located at a suburb of the 
  Federal Capital Territory to give support to the facility.<br/>
  
  The visit was in pursuance of the mission of Pharma-Aid Africa ‘enabling access’ overcoming barrier to patient access to medicines by closing the gap in the last mile pharmaceutical supply 
  chain of primary and selected secondary healthcare centres in Nigeria and Africa at large.<br/>
  
  A representative of the Director of Pharmacy, FCT Primary Healthcare Board, Pharm Abdul was at the site to take delivery of the medicines. He expressed his appreciation for the donation 
  saying that the healthcare centre will benefit immensely from it as it will go a long way to cater for the needs of the residents that troop to the centre on daily basis.<br/>
  
  The Executive Director of Pharma-AID Africa, Dr. Chinedu Ayogu while handling over the medicine tasked the centre to make judicious use of the items.<br/>
  
  A member of the Board of Advisors, Pharma-AID Africa who is also the Executive Secretary, Pharmaceutical Manufacturing Group of Manufacturers Association of Nigeria, Pharm Frank Muonemeh in his speech pointed out that outside the drug donation, that Pharma-AID Africa was at the site to identify other areas that may require collaboration.<br/>
  
  Others present at the occasion were the OIC of the facility, Mr. Ibrahim, Pharm Pamela Chiazo- Senior Procurement Expert Liberia and other health workers and members of Pharma-AID Africa.
</p>

            {/* Add more paragraphs or content as needed */}
          </div>
        </section>
      )}

      {currentPage === 2 && (
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Event <span className="text-green-600">Section</span>
          </h1>
          {/* Content for 2024 */}
          <div className="max-w-3xl mx-auto text-lg text-gray-800 leading-relaxed">
          <p>
  PHARMA-AID-AFRICA KICK STARTS THE YEAR WITH HEALTH AND WELLNESS OUTREACH.<br></br>

  The Pharma-AID team started the year 2024 blissfully, aligning with their vision of equitable access to medicines for the most vulnerable communities in Africa. With the understanding that the PHCs are the first-line responders for patient care in vulnerable communities, as such needs strengthening as regards the health supply chain. On this premise, @pharm_aidafrica partnered with Pa Muonemeh JeDoC Foundation (PMJF) and Aguluzigbo Dynamic Youth Forum (ADYF) to carry out community outreach- PHARMA-AID- AFRICA HEALTH AND WELLNESS outreach in a community @Aguluzigbo in Aniocha Local Government Area of Anambra State. These organizations share the same values in common- ‘Social impact down to equitable communities".<br/>
  
  It was a 2 Day event that happened on respectively 6th and 7th of January, at the Village Community Primary School – Ebenesi Primary School Aguluzigbo and Aguluzigbo Primary Healthcare Center situated at the Civic and Development Center Aguluzigbo. The event saw the attendance of over 200 people being attended to by healthcare professionals, offering free health checks and examinations, making referrals, and giving free medications to the villagers.<br></br>
  
  <strong>Day 1: 6th January:</strong> Started with Advocacy to the traditional ruler of Aguluzigbo in Anaocha Local Government Area, His Royal Majesty, Igwe Rufus ILuoduba, Ugochinyelu, Eze Ohanyelu Aguluzigbo and his select Cabinet and family, carrying out health checks and highlighting the importance of Health awareness. It was inspiring to see the community leader super-excited to welcome the delegation of @pharma_aidafrica to his palace, with great blessings from his Majesty at his palace led by the board member of the @pharma_aidAfrica - Pharmacist Frank Muonemeh, who also is the Executive Secretary of the Pharmaceutical Manufactures Group of Manufactures Association of Nigeria (PMGMAN) @officialPMGMAN and other members of the team. The exercise started in earnest, at the Community Primary School, where the team was overwhelmed with the turnout of participants who were eager to get their health checked by the physicians and other health professionals. The elderly, the Children, the religious, the community leaders, the youth, the clergy, and the neighboring communities benefited from the outreach.<br></br>
  
  It was an honor for the team to have the Anambra State government delegation -the Executive Secretary Primary Healthcare Development Board (APHCDA)- Pharm (Mrs ) Chisom represent the Hon Commissioner for Health- Dr Afam Obidike, accompanied by her team,  and some indigenous health professionals to support in the outreach.  The team attended to over 200, participants checking vitals, running rapid diagnostic test such as Random blood sugar and H.Pylori among others. The health professionals made referrals, and medications were given freely. Medications approximated to be at the value of N10 Million Naira were used in this outreach. Participants and beneficiaries at the outreach expressed their joy, gratitude and fulfillment to team and asked God to continue to strengthen them as they keep touching lives. The Parish priest of the Host Catholic church resident at the Venue of the outreach who was also a beneficiary, appreciated team Pharma AID AFRICA, stating that the intervention was very timely  considering the macroeconomic dynamics of the Nigerian economy, where access to Medicines is becoming out of reach for ordinary Nigerians, most importantly those in underserved communities like the Aguluzigbo community. He also stated that this intervention was the first of its kind in the community.<br></br>
  
  The Anambra State government delegation led by the Executive Secretary Primary Healthcare Development Board (APHCDA)- Pharm (Mrs ) Chisom, conveyed the goodwill message from the Honorable commissioner for health in the state while thanking Team Pharma AID AFRICA for collaborating with the state government in ensuring equitable access to healthcare even in rural communities in the state. She further lauded the commitment of Pharma AID AFRICA in ensuring equitable access to medicine even to the most vulnerable communities.<br></br>
  
  <strong>Day 2: The 7th of January</strong> was another spectacular day that the team assembled at the Aguluzigbo Civic and Development Center which housed the Primary Health Care Center- offering yet another free health care checks, essentially as it concerns preventable health care checks and making of referrals and provision of free Medication to patients. 110 patients were attended to and given basic lifesaving medications Medication and were referred to secondary and tertiary institutions. <br></br>
  
  After the outreach, Pharma AID AFRICA donated Drugs to donated to the PHC and the General Hospital Aguluzigbo, essentially to be given to the community when they visit the health facilities. The drugs included Antibiotics, Antihypertensives, antihistimines, Antimalarials, antacids, antidepressants, antidiabetics, anagelsics and a host of other classes. The team also donated Personal protectives gears to the facility such as sanitizers, disposable gloves, etc. <br></br>
  
  Speaking at the event, The Chief Matron of the Facility received the drugs in the company of other health care workers from the facility. She thanked the team for the kind geture and assure the team the medications willl be used for the betterment of the people of the community. She also reiterated her commitment and that of the facility to continue to  partner with Pharma AID AFRICA in ensuring equitable distribution of medicines to those in need of care especially in the community.<br></br>
  
  This was another impactful engagement, where the core value of Pharma-Aid -Africa was made manifest, the team carried out a need assessment of the PHC center from the perspective of Supply Chain strengthening, identifying the gaps, to support them infrastructurally and otherwise in the future, to factor the findings in the future of the Pharma- AID – Africa plans. Gaps like the absence of access to Clean water, the absence of a computerized Supply chain system, and proper storage system for medications, in addition to the poor power supply and in-efficient supply chain system. These gaps we look forward to closing soon with our partners.
</p>

            {/* Add more paragraphs or content as needed */}
          </div>
        </section>
      )}
    </div>
  );
};

export default Info;
