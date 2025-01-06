import React from "react";
import Footer from "../Footer/Footer";
import PujaCard from "./components/card";
import Kashi from "../../../src/assets/Puja/Kashi.jpeg";
import Kaal from "../../../src/assets/Puja/Kaal.jpeg";

function Puja() {
  return (
    <div className="p-3">
      <p className=" flex justify-center text-4xl text-[#F56606] font-bold py-2">
        卐 :Upcoming Puja: 卐
      </p>
      <div className="flex justify-center">
        <PujaCard
          title="Shri Kaal Bhairav Aapda Haran Yagya"
          subtitle="Includes Kaal Bhairav Ashtakam and Maha Aarti"
          description="Participate to remove sins and negativity from the past 7 lifetimes."
          imageUrl={Kashi}
          location="Shri Kaal Bhairav Temple, Kashi"
          date="18th January 2025"
          participants="120+"
        />

        <PujaCard
          title="Somwar Mahamrityunjay Mantra Jaap "
          subtitle="And Rudra Abhishek In Kashi"
          description="To ‘God of Health’ Healing, Protection, And Warding Off Untimely Misfortunes"
          imageUrl={Kaal}
          location="Mahamrityunjay Temple ,  Kashi"
          date="6-Jan-2025, Pasuh Maas"
          participants="109+"
        />

        <PujaCard
          title="Makar Sankranti Special Brahman"
          subtitle="Bhojan, Gau Seva and Deep Daan in Kashi "
          description="To Get Rid of Misfortune, Horoscope Doshas, Anxiety and to satiate Ancestors’ Souls"
          imageUrl="https://images.unsplash.com/photo-1713922639539-42572e58cbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGdhbmdhJTIwYWFydGl8ZW58MHx8MHx8fDA%3D"
          location="Ganga Ghat , Kashi"
          date="28-Jan-2025 "
          participants="158+"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Puja;
