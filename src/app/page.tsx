import CardProfile from "./_Components/(home)/CardProfile";
import Introduction from "./_Components/(home)/Introduction";
import IntroductionSection from "./_Components/(home)/IntroductionSection";
import SocialLinks from "./_Components/(home)/SocialLinks";

export default function Home() {
  return (
    <>
      <div className="bg-white pt-44 pb-32">
        <div className=" max-w-5xl mx-auto grid grid-cols-2 gap-16 items-center komputer:max-w-6xl">
          <Introduction />
          <CardProfile />
        </div>
      </div>
      <div className="bg-darkgreen pt-16 pb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-8 items-center komputer:max-w-6xl">
          <SocialLinks />
          <IntroductionSection />
        </div>
      </div>
    </>
  );
}
