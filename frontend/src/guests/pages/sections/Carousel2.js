import React, { useEffect } from "react";
import { Carousel } from "flowbite";
import first from "../../assets/wedding-pictures/01cb0bfc-6c23-46ce-af2c-9dd04706a2d8_20241219_145208_0000.jpg";
import second from "../../assets/wedding-pictures/030bb8b0-74ce-4cd2-9834-ac1b1301cb35_20241219_143930_0000.jpg";
import third from "../../assets/wedding-pictures/1748934c-296a-4cff-ba3e-de727147d5a6_20241219_143532_0000.jpg";
import fourth from "../../assets/wedding-pictures/1f4cca24-2f57-4e59-9bce-31949352648d_20241219_143354_0000.jpg";
import fifth from "../../assets/wedding-pictures/23d8cca3-6a3e-4479-a666-7259ae7577a4_20241219_135438_0000.jpg";
import sixth from "../../assets/wedding-pictures/2be48745-27bc-4244-8ac4-80dbdca8bf05_20241219_144038_0000.jpg";
import seventh from "../../assets/wedding-pictures/2e9cddbf-c82f-4543-b8e5-6afb72791ac9_20241219_143649_0000.jpg";
import eight from "../../assets/wedding-pictures/35681dc4-a292-4fb2-9912-47ac372582dd_20241219_135954_0000.jpg";
import ninth from "../../assets/wedding-pictures/37321513-4c85-4058-809c-10ec3e766ebc_20241219_135005_0000.jpg";
import tenth from "../../assets/wedding-pictures/44999ab1-4ec6-41d0-a0db-a582e07f6c37_20241219_135304_0000.jpg";
import eleventh from "../../assets/wedding-pictures/482ac969-0e5a-479b-bb7e-8ff777dcd1d5_20241219_133453_0000.jpg";
import twelve from "../../assets/wedding-pictures/48886810-e1f1-4c20-9b3f-874aaf8cd73e_20241219_142929_0000.jpg";
import thirteenth from "../../assets/wedding-pictures/4abeed5c-011e-42e0-a283-7e93d5570a7a_20241219_143612_0000.jpg";
import fourtheen from "../../assets/wedding-pictures/52dfa3a0-840f-423f-9bd4-cfa168f7c6fa_20241219_144825_0000.jpg";
import fifteen from "../../assets/wedding-pictures/556d9251-56bd-4f4c-9e70-3d1e99ad0fe0_20241219_135535_0000.jpg";
import sixtheen from "../../assets/wedding-pictures/6ff002f4-8060-4456-b7f8-461a77e26fad_20241219_133736_0000.jpg";
import seventeen from "../../assets/wedding-pictures/70065fea-909b-4f12-86d4-9397d78c1ae3_20241219_145600_0000.jpg";
import eighteen from "../../assets/wedding-pictures/7883d9c3-7c46-40a8-a9ab-e1b908f5247c_20241219_144539_0000.jpg";
import nineteen from "../../assets/wedding-pictures/7acd7fc0-e0b1-470d-ada1-7edf1e824dd7_20241219_145037_0000.jpg";
import twenty from "../../assets/wedding-pictures/8b1ca22d-0e90-4799-b586-ab54af6f3f44_20241219_143849_0000.jpg";
import twentyone from "../../assets/wedding-pictures/9534d73a-71f3-49e8-83c4-66c52c0cd87b_20241219_140809_0000.jpg";
import twentytwo from "../../assets/wedding-pictures/a0721474-d349-43f5-a7a9-56bf80bb3cd6_20241219_144627_0000.jpg";
import twentythree from "../../assets/wedding-pictures/a5d168e1-419f-44d0-88d1-b47995a41985_20241219_145423_0000.jpg";
import twentyfour from "../../assets/wedding-pictures/ac479d94-f20b-4039-9645-b8f1e83e30c7_20241219_140041_0000.jpg";
import twentyfive from "../../assets/wedding-pictures/af626a63-2cdc-4809-beb9-1e7dfb7572ec_20241219_145118_0000.jpg";
import twentysix from "../../assets/wedding-pictures/c2f86c77-85ba-401f-8ed4-7f74fcea5a32_20241219_140122_0000.jpg";
import twentyseven from "../../assets/wedding-pictures/c6ac5b0a-bfb8-49f1-b9bb-66fdcff19db9_20241219_143804_0000.jpg";
import twentynine from "../../assets/wedding-pictures/c8e114de-5ee9-4b6e-986c-e199d3b5c5f5_20241219_144007_0000.jpg";
import thirty from "../../assets/wedding-pictures/c940d065-8037-4be1-8fa8-e7e81442b97e_20241219_135217_0000.jpg";
import thirtyone from "../../assets/wedding-pictures/cf4a0fcd-d6b2-4fbc-87d7-43d834b8cca5_20241219_145000_0000.jpg";
import thirtytwo from "../../assets/wedding-pictures/df43f140-f1f2-4920-a666-0bead7583ab5_20241219_145349_0000.jpg";
import thirtythree from "../../assets/wedding-pictures/e2e96124-d851-4f55-95c3-5bf90e08fdb0_20241219_143438_0000.jpg";
import thirtyfour from "../../assets/wedding-pictures/e5e6966a-9169-4f79-9bbc-41715364b18a_20241219_144729_0000.jpg";
import thirtyfive from "../../assets/wedding-pictures/e9a12b83-c381-4722-9d36-11ac1c89e582_20241219_145303_0000.jpg";
import thirtsix from "../../assets/wedding-pictures/f4479690-05b1-4170-83b2-152dbfc6781d_20241219_143728_0000.jpg";
import thirtyseven from "../../assets/wedding-pictures/f547c5b2-b4de-446d-b5b0-3ace33bd79aa_20241219_144916_0000.jpg";
import Background from "../Background";

export default function Carousel2() {
  useEffect(() => {
    // Initialize Flowbite carousel
    const carouselElement = document.getElementById("controls-carousel");
    const options = {
      defaultPosition: 1,
      interval: 3000,
      indicators: {
        activeClasses: "bg-white dark:bg-gray-800",
        inactiveClasses:
          "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800",
      },
    };

    if (carouselElement) {
      const carousel = new Carousel(carouselElement, options);
    }
  }, []);

  return (
    <Background>
      <div
        id="controls-carousel"
        className="container mx-auto px-4 max-w-6xl"
        data-carousel="static"
      >
        {/* Carousel wrapper */}
        <div className="relative h-64 sm:h-64 md:h-[50vh] lg:h-[70vh] xl:h-[90vh] overflow-hidden rounded-lg">
          {/* Item 1 */}
          <div className="duration-700 ease-in-out" data-carousel-item="active">
            <img
              src={first}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={second}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={third}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={fourth}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={fifth}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={sixth}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={seventh}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={eight}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={ninth}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={tenth}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={eleventh}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={twelve}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={thirteenth}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={fourtheen}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={fifteen}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={sixtheen}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={seventeen}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={eighteen}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={nineteen}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={twenty}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={twentyone}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={twentytwo}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={twentythree}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={twentyfour}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={twentyfive}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={twentysix}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>{" "}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={twentyseven}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>{" "}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={twentynine}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>{" "}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={thirty}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={thirtytwo}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>{" "}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={thirtythree}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={thirtyfour}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>{" "}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={thirtyfive}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>{" "}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={thirtsix}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>{" "}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src={thirtyseven}
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-contain"
              alt="..."
            />
          </div>
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </Background>
  );
}
