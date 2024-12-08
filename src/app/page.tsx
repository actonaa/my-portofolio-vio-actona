import CardProfile from "./_Components/(home)/CardProfile";
import Introduction from "./_Components/(home)/Introduction";
import IntroductionSection from "./_Components/(home)/IntroductionSection";
import SocialLinks from "./_Components/(home)/SocialLinks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vio Actona | Home",
  description: "Profile of Vio Actona Putra",
  authors: [
    {
      name: "Vio Actona Putra",
      url: "https://linkedin.com/in/vio-actona-putra",
    },
  ],
  icons: "/myicon.ico",
};

export default function Home() {
  return (
    <>
      <div className="bg-white pt-44 pb-32 tablet:pt-36 tablet:pb-96 hp:pt-36 hp:pb-96 hp:overflow-y-hidden hp:overflow-x-hidden">
        <div className="max-w-5xl w-full mx-auto grid grid-cols-2 gap-16 items-center komputer:max-w-6xl tablet:grid-cols-1 tablet:max-w-xl hp:grid-cols-1 hp:mb-20">
          <Introduction />
          <CardProfile />
        </div>
      </div>
      <div className="bg-darkgreen pt-16 pb-16 tablet:pt-32 hp:pt-20">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 gap-8 items-center komputer:max-w-6xl tablet:grid-cols-1 tablet:max-w-xl hp:grid-cols-1 hp:max-w-xl">
          <SocialLinks />
          <IntroductionSection />
        </div>
      </div>
    </>
  );
}
