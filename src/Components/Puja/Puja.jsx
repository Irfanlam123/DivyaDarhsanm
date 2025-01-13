import React from "react";
import Footer from "../Footer/Footer";
import PujaCard from "./components/card";
import Kashi from "../../../src/assets/Puja/Kashi.jpeg";
import Kaal from "../../../src/assets/Puja/Kaal.jpeg";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

function Puja() {
  // Array of puja details
  const pujaDetails = [
    {
      title: "Shri Kaal Bhairav Aapda Haran ",
      imageUrl: Kashi,
      location: "Shri Kaal Bhairav Temple, Kashi",
      date: "18th January 2025",
      participants: "120+",
      targetDate: "2025-01-18T18:00:00",
    },
    {
      title: "Somwar Mahamrityunjay Mantra",
      imageUrl: Kaal,
      location: "Mahamrityunjay Temple, Kashi",
      date: "6-Jan-2025, Pasuh Maas",
      participants: "109+",
      targetDate: "2025-02-07T18:00:00",
    },
    {
      title: "Makar Sankranti Special Brahman",
      imageUrl:
        "https://images.unsplash.com/photo-1713922639539-42572e58cbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbmdhJTIwYWFydGl8ZW58MHx8MHx8fDA%3D",
      location: "Ganga Ghat, Kashi",
      date: "28-Jan-2025",
      participants: "158+",
      targetDate: "2025-01-28T18:00:00",
    },
    {
      title: "Shri Kaal Bhairav Aapda Haran ",
      imageUrl: Kashi,
      location: "Shri Kaal Bhairav Temple, Kashi",
      date: "18th January 2025",
      participants: "120+",
      targetDate: "2025-01-18T18:00:00",
    },
    {
      title: "Somwar Mahamrityunjay Mantra",
      imageUrl: Kaal,
      location: "Mahamrityunjay Temple, Kashi",
      date: "6-Jan-2025, Pasuh Maas",
      participants: "109+",
      targetDate: "2025-02-07T18:00:00",
    },
    {
      title: "Makar Sankranti Special Brahman",
      imageUrl:
        "https://images.unsplash.com/photo-1713922639539-42572e58cbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbmdhJTIwYWFydGl8ZW58MHx8MHx8fDA%3D",
      location: "Ganga Ghat, Kashi",
      date: "28-Jan-2025",
      participants: "158+",
      targetDate: "2025-01-28T18:00:00",
    },
    {
      title: "Shri Kaal Bhairav Aapda Haran ",
      imageUrl: Kashi,
      location: "Shri Kaal Bhairav Temple, Kashi",
      date: "18th January 2025",
      participants: "120+",
      targetDate: "2025-01-18T18:00:00",
    },
    {
      title: "Somwar Mahamrityunjay Mantra",
      imageUrl: Kaal,
      location: "Mahamrityunjay Temple, Kashi",
      date: "6-Jan-2025, Pasuh Maas",
      participants: "109+",
      targetDate: "2025-02-07T18:00:00",
    },
    {
      title: "Makar Sankranti Special Brahman",
      imageUrl:
        "https://images.unsplash.com/photo-1713922639539-42572e58cbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbmdhJTIwYWFydGl8ZW58MHx8MHx8fDA%3D",
      location: "Ganga Ghat, Kashi",
      date: "28-Jan-2025",
      participants: "158+",
      targetDate: "2025-01-28T18:00:00",
    },
    {
      title: "Shri Kaal Bhairav Aapda Haran ",
      imageUrl: Kashi,
      location: "Shri Kaal Bhairav Temple, Kashi",
      date: "18th January 2025",
      participants: "120+",
      targetDate: "2025-01-18T18:00:00",
    },
    {
      title: "Somwar Mahamrityunjay Mantra",
      imageUrl: Kaal,
      location: "Mahamrityunjay Temple, Kashi",
      date: "6-Jan-2025, Pasuh Maas",
      participants: "109+",
      targetDate: "2025-02-07T18:00:00",
    },
    {
      title: "Makar Sankranti Special Brahman",
      imageUrl:
        "https://images.unsplash.com/photo-1713922639539-42572e58cbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbmdhJTIwYWFydGl8ZW58MHx8MHx8fDA%3D",
      location: "Ganga Ghat, Kashi",
      date: "28-Jan-2025",
      participants: "158+",
      targetDate: "2025-01-28T18:00:00",
    },
    {
      title: "Shri Kaal Bhairav Aapda Haran ",
      imageUrl: Kashi,
      location: "Shri Kaal Bhairav Temple, Kashi",
      date: "18th January 2025",
      participants: "120+",
      targetDate: "2025-01-18T18:00:00",
    },
    {
      title: "Somwar Mahamrityunjay Mantra",
      imageUrl: Kaal,
      location: "Mahamrityunjay Temple, Kashi",
      date: "6-Jan-2025, Pasuh Maas",
      participants: "109+",
      targetDate: "2025-02-07T18:00:00",
    },
    {
      title: "Makar Sankranti Special Brahman",
      imageUrl:
        "https://images.unsplash.com/photo-1713922639539-42572e58cbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbmdhJTIwYWFydGl8ZW58MHx8MHx8fDA%3D",
      location: "Ganga Ghat, Kashi",
      date: "28-Jan-2025",
      participants: "158+",
      targetDate: "2025-01-28T18:00:00",
    },
    {
      title: "Shri Kaal Bhairav Aapda Haran ",
      imageUrl: Kashi,
      location: "Shri Kaal Bhairav Temple, Kashi",
      date: "18th January 2025",
      participants: "120+",
      targetDate: "2025-01-18T18:00:00",
    },
    {
      title: "Somwar Mahamrityunjay Mantra",
      imageUrl: Kaal,
      location: "Mahamrityunjay Temple, Kashi",
      date: "6-Jan-2025, Pasuh Maas",
      participants: "109+",
      targetDate: "2025-02-07T18:00:00",
    },
    {
      title: "Makar Sankranti Special Brahman",
      imageUrl:
        "https://images.unsplash.com/photo-1713922639539-42572e58cbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbmdhJTIwYWFydGl8ZW58MHx8MHx8fDA%3D",
      location: "Ganga Ghat, Kashi",
      date: "28-Jan-2025",
      participants: "158+",
      targetDate: "2025-01-28T18:00:00",
    },
    {
      title: "Shri Kaal Bhairav Aapda Haran ",
      imageUrl: Kashi,
      location: "Shri Kaal Bhairav Temple, Kashi",
      date: "18th January 2025",
      participants: "120+",
      targetDate: "2025-01-18T18:00:00",
    },
    {
      title: "Somwar Mahamrityunjay Mantra",
      imageUrl: Kaal,
      location: "Mahamrityunjay Temple, Kashi",
      date: "6-Jan-2025, Pasuh Maas",
      participants: "109+",
      targetDate: "2025-02-07T18:00:00",
    },
    {
      title: "Makar Sankranti Special Brahman",
      imageUrl:
        "https://images.unsplash.com/photo-1713922639539-42572e58cbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbmdhJTIwYWFydGl8ZW58MHx8MHx8fDA%3D",
      location: "Ganga Ghat, Kashi",
      date: "28-Jan-2025",
      participants: "158+",
      targetDate: "2025-01-28T18:00:00",
    },

    // Add more puja objects here...
  ];

  return (
    <div className="">
      <div className="p-4">
        <div className=" px-4 bg-slate-800 rounded-md flex flex-col items-center pb-10">
          <p className="text-2xl text-slate-50 font-bold py-8">
            卐 Upcoming Puja 卐
          </p>

          <div className="mt-4">
            <Menu>
              <MenuHandler>
                <Button className="font-montserrat rounded-md  bg-slate-50 text-slate-900 px-6 py-3">
                  Choose Date
                </Button>
              </MenuHandler>
              <MenuList className="bg-slate-100 text-slate-950">
                <MenuItem className="font-montserrat font-bold">
                  Coming Soon
                </MenuItem>
                <MenuItem className="font-montserrat font-bold">
                  This Week
                </MenuItem>
                <MenuItem className="font-montserrat font-bold">All</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 py-6 ">
          {pujaDetails.map((puja, index) => (
            <PujaCard
              key={index}
              title={puja.title}
              imageUrl={puja.imageUrl}
              location={puja.location}
              date={puja.date}
              participants={puja.participants}
              targetDate={puja.targetDate}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Puja;
