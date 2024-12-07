import Image from "next/image";

const CardProfile = () => {
  return (
    <div className="relative items-center">
      <div className="relative ">
        {/* Gambar Profil */}
        <Image
          src="/vio.png"
          alt="profile"
          width={700}
          height={700}
          className="w-[1000px] h-[500px] absolute z-[3] -bottom-[154px] left-[10px] tablet:w-[500px] tablet:h-[400px] tablet:left-1/2 tablet:-translate-x-1/2 tablet:-bottom-[266px] hp:w-[500px] hp:h-[400px] hp:left-[20px]  hp:-bottom-[167px]"
        />

        {/* Lingkaran Kuning */}
        <div className="py-2 w-[200px] text-center rounded-full bg-yellow z-[4] absolute bottom-[10px] left-[10px] tablet:-bottom-[120px] tablet:left-[70px] tablet:w-[150px] hp:hidden">
          7th Nov 2003
        </div>
        <div className="py-2 w-[200px] text-center rounded-full bg-yellow z-[4] absolute -bottom-[80px] right-4 tablet:-bottom-[220px] tablet:right-[80px] tablet:w-[150px] hp:hidden">
          Indonesian
        </div>

        {/* Lingkaran Putih */}
        <div className="w-[275px] h-[275px] bg-white rounded-full absolute z-[2] -bottom-[150px] left-[100px] komputer:left-[130px] tablet:w-[180px] tablet:h-[180px] tablet:-bottom-[230px] tablet:left-[160px] hp:w-[180px] hp:h-[180px] hp:-bottom-[130px] hp:left-[100px]"></div>

        {/* Kotak Informasi */}
        <div className="w-full absolute -bottom-[340px] left-[60px] tablet:left-[130px] tablet:-bottom-[450px] hp:left-[50px] hp:-bottom-[350px]">
          <div className="bg-darkgreen w-3/4 h-[290px] shadow-xl shadow-darkgreen tablet:w-1/2 tablet:h-[230px] hp:w-3/4 hp:h-[230px]"></div>
          <div className="bg-black w-3/4 shadow-lg shadow-darkgreen tablet:w-1/2 hp:w-3/4">
            <div className="text-white w-[200px] mx-auto text-center py-4 text-sm">
              <h2 className="text-4xl font-bold mb-2 tablet:text-3xl hp:text-3xl">
                Contact
              </h2>
              <p className="py-1 flex items-center text-center">
                <i className="bx bx-map text-lg mr-2"></i> East Java, Indonesia
              </p>
              <p className="py-1 flex items-center text-center">
                <i className="bx bx-envelope text-lg mr-2"></i>{" "}
                actonaputra@gmail.com
              </p>
              <p className="py-1 flex items-center text-center">
                <i className="bx bx-phone text-lg mr-2"></i> 0822-3215-5420
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
