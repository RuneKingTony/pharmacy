import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-12" id='services'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          What <span className='text-green-600'>We Do?</span>
        </h2>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <div className="space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our work targets overcoming Patient access and Market access barriers - Closing the gap in the last mile pharmaceutical supply chain of primary and select secondary healthcare centers in Nigeria and Africa at large. The primary healthcare centers are the closest and first healthcare respondents in access to medicine, yet evidence suggests that they have the worst supply chain infrastructure in Nigeria. It is even worse for the hard-to-reach and vulnerable communities with near-zero pharma supply chain system.
            </p>
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                PHC-ACCESS TO MEDICINE INITIATIVE (PHC-ATM)
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pharma-AID identifies select underserved communities, adopts the PHC Dispensary, and strengthens their supply chain system to be efficient. We partner with known pharmaceutical companies to adopt these PHCs and make a commitment with initial Pharma product seed that will comprise essential lifesaving medicines. This model will be sustained by the adoption of the select PHC by a philanthropist in the community (preferably a healthcare professional).
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                PHC SUPPLY CHAIN MENTORSHIP PROGRAM (PHC-SCM PROGRAM)
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pharma-AID guarantees the sustainability of the PHC-ATM initiative by mentoring young pharmacists in the professionalization of supply chain as volunteers at these PHC-ATM centers while on NYSC training or internship program. They will be focal persons at these centers and will be mentored in global healthcare supply chain excellence. This will sharpen their basic skill set in supply chain and equip them with global certification while preparing them to contribute their quota in the future in the public health space professionally.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                PHARMA-AID NCD PHARMA BANK
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pharma-AID, being a regional organization, operates a Pharma Bank that will focus on overcoming patient access to medicines on identified non-Communicable diseases to drive the Oncology-Patent Access to Medicine and Cardio Access to Medicine Initiatives. The burden of Non-communicable Diseases in sub-Saharan Africa cannot be overemphasized. According to WHO, cardiovascular diseases account for most NCD deaths, followed by cancers and diabetes. Pharma-AID is positioned to run a tech-driven pharma bank that will focus on warehousing donations of innovative medicines that meet the needs of the most vulnerable and underserved among us. Through our App - Pharm AID, we will create a platform that serves as a donation platform and a platform to sell about-to-expire medicines at the most affordable prices to those who need them the most.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-4">
                AfCFTA Pharma Market Access Program
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Pharma-AID will promote trade amongst African countries by overcoming trade barriers in the regime of the Africa Continental Free Trade Agreement (AfCFTA). We identify countries to share in market access protocols, such as Common Technical Document (CTD) dossier harmonization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
