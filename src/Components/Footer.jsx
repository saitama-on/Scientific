import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="mx-4">
        <div
          className="hidden sm:grid grid-cols-2 place-content-center place-items-start w-full my-2"
          id="contact"
        >
          <div className="flex flex-col justify-start items-start space-y-20 px-6 lg:px-10 xl:px-24">
            <div className="flex flex-col justify-start items-start text-4xl lg:text-5xl xl:text-6xl font-extrabold -space-y-1">
              <div className="drop-shadow-xl shadow-[#5172E7]">
                Get in TOUCH
              </div>
              <div className="drop-shadow-xl shadow-[#5172E7]">with US.</div>
            </div>
            <div className="flex flex-col justify-start items-start text-sm lg:text-base  space-y-2">
              <div>
                <img
                  src="./assets/logo.png"
                  className="h-12 lg:w-16 w-12 lg:h-16"
                  alt=""
                />
              </div>
              <div className="drop-shadow-2xl shadow-[#5172E7] font-semibold">
                Dr SPM International Institute of Information Technology, Naya
                Raipur
              </div>
              <div className="drop-shadow-2xl shadow-[#5172E7] font-semibold">
                Plot No-07, Sector-24, Near Purkhoti Muktangan, Nava Raipur,
                Atal Nagar, Chattisgarh-493661
              </div>
              <div className="drop-shadow-2xl shadow-[#5172E7] font-semibold">
                Ph: 0771-2474040
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start px-6 lg:px-10">
            <div className="flex flex-col justify-between items-start space-y-4">
              <div className="flex flex-col justify-start items-start space-y-2">
                <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                  Faculty Co-ordinators
                </div>
                <div className="text-sm lg:text-base">
                  Dr. Kavita Jaiswal 
                </div>
              </div>
              <div className="flex flex-col justify-start items-start space-y-2">
                <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                  Student Co-ordinators
                </div>
                <div className="flex flex-col justify-start items-start space-y-0.5">
                  <div className="text-sm lg:text-base">
                    Shivam Kushwaha : +91 9198364979
                  </div>
                  <div className="text-sm lg:text-base">
                    Ch Swati : +91 9439776497
                  </div>
                  <div className="text-sm lg:text-base">
                    Shubham Khilari : +91 7987665370
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start space-y-2">
                <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                  Website team members
                </div>
                <div className="grid grid-cols-2 place-content-center place-items-start">
                  <div className="text-sm lg:text-base">Ojas Dubey</div>
                  <div className="text-sm lg:text-base">Ganesh Prajapati</div>
                </div>
              </div>
              <div className="flex flex-col justify-start items-start space-y-2">
                <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                  Social Media Accounts
                </div>
                <div className="grid grid-cols-3 gap-x-4 place-content-center place-items-start">
                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/scintfic_iiitnr/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ width: "5vmin" }}
                      src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"
                      alt="Instagram logo"
                    />
                  </a>
                  {/* Linkedin */}
                  <a
                    href="https://in.linkedin.com/company/scintfic-iiit-naya-raipur"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ width: "5vmin" }}
                      src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
                      alt="Linkedin logo"
                    />
                  </a>
                  {/* Twitter */}
                  <a
                    href="https://twitter.com/SCInTFICiiitnr"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ width: "4.7vmin", marginTop: "0.4vmin" }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1200px-X_logo_2023.svg.png"
                      alt="Twitter logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center space-y-6 sm:hidden px-2"
          id="contact1"
        >
          <div className="flex flex-col justify-center items-center text-3xl">
            <div className="drop-shadow-xl shadow-[#5172E7] uppercase font-bold">
              Get in TOUCH WITH US.
            </div>
          </div>
          <div className="flex flex-col justify-center items-start space-y-3">
            <div className="flex flex-col justify-start items-start space-y-1">
              <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                Faculty Co-ordinators
              </div>
              <div className="text-sm lg:text-base">
                Dr. Sresha : +91 7489914304
              </div>
              <div className="text-sm lg:text-base">
                Dr. Vijaya : +91 7708764280
              </div>
              <div className="text-sm lg:text-base">
                Dr. Avantika : +91 9605710311
              </div>
            </div>
            <div className="flex flex-col justify-start items-start space-y-1">
              <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                Student Co-ordinators
              </div>
              <div className="flex flex-col justify-start items-start space-y-0.5">
                <div className="text-sm lg:text-base">
                  Shivam Kushwaha : +91 6309106555
                </div>
                <div className="text-sm lg:text-base">
                  Ch Swati: +91 9398428741
                </div>
                <div className="text-sm lg:text-base">
                  Shubham Khilari : +91 9001076499
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start space-y-2">
              <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base">
                Organizing Student team members
              </div>
              <div className="grid grid-cols-2 place-content-center place-items-start">
                <div className="text-sm lg:text-base">Ojas Dubey</div>
                <div className="text-sm lg:text-base">Ganesh Prajapati</div>
                <div className="text-sm lg:text-base"></div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start space-y-2">
              <div className="uppercase drop-shadow-2xl shadow-[#5172E7] font-semibold text-base lg:text-lg">
                Social Media Accounts
              </div>
              <div className="grid grid-cols-3 gap-x-4 place-content-center place-items-start">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/scintfic_iiitnr/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ width: "5vmin" }}
                    src="https://static.vecteezy.com/system/resources/previews/014/414/683/non_2x/instagram-black-logo-on-transparent-background-free-vector.jpg"
                    alt="Instagram logo"
                  />
                </a>
                {/* Linkedin */}
                <a
                  href="https://in.linkedin.com/company/scintfic-iiit-naya-raipur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ width: "5vmin" }}
                    src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
                    alt="Linkedin logo"
                  />
                </a>
                {/* Twitter */}
                <a
                  href="https://twitter.com/SCInTFICiiitnr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    style={{ width: "4.7vmin", marginTop: "0.4vmin" }}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1200px-X_logo_2023.svg.png"
                    alt="Twitter logo"
                  />
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start text-sm lg:text-base  space-y-2">
              <div>
                <img
                  src="./assets/logo.png"
                  className="h-12 lg:w-16 w-12 lg:h-16"
                  alt=""
                />
              </div>
              <div className="drop-shadow-2xl shadow-[#5172E7] font-semibold">
                Dr SPM International Institute of Information Technology, Naya
                Raipur
              </div>
              <div className="drop-shadow-2xl shadow-[#5172E7] font-semibold">
                Plot No-07, Sector-24, Near Purkhoti Muktangan, Nava Raipur,
                Atal Nagar, Chattisgarh-493661
              </div>
              <div className="drop-shadow-2xl shadow-[#5172E7] font-semibold">
                Ph: 0771-2474040
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
