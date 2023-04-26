import DoughnutChart from "./Charts/DoughnutChart";
import Nigeria from "../assets/Countries/nigeria.svg";
import Blue from "../assets/Blue.svg";
import USA from "../assets/Countries/usa.svg";
import Purple from "../assets/Purple.svg";
import Nertherland from "../assets/Countries/Nertherland.svg";
import Green from "../assets/Green.svg";
import Andorra from "../assets/Countries/Andorra.svg";
import Yellow from "../assets/Yellow.svg";
import Orange from "../assets/Orange.svg";

function TopLocations() {
  return (
    <div className="my-4 border rounded-lg lg:w-[70%] lg:h-[60%] px-4 ">
      <div className="flex justify-between mb-8">
        <h1 className="py-4 text-xl font-bold text-[#131316]">Top Locations</h1>
        <p className=" py-4 text-base text-[#FF5403] leading-5 h-6">
          View full reports
        </p>
      </div>

      <div className=" justify-center lg:flex gap-2 lg:justify-between">
        <div>
          <div className="flex gap-2 justify-between py-2">
            <img src={Nigeria} alt="Nigeria" />
            <div>Nigeria</div>
            <div>50%</div>
            <img src={Blue} alt="blue" />
          </div>
          <div className="flex gap-2 justify-between py-2">
            <img src={USA} alt="United State" />
            <div>United States</div>
            <div>24%</div>
            <img src={Purple} alt="blue" />
          </div>
          <div className="flex gap-2 justify-between py-2">
            <img src={Nertherland} alt="Nertherlands" />
            <div>Nertherlands</div>
            <div>24%</div>
            <img src={Green} alt="blue" />
          </div>
          <div className="flex gap-2 justify-between py-2">
            <img src={Andorra} alt="Andorra" />
            <div>Andorra</div>
            <div>24%</div>
            <img src={Yellow} alt="blue" />
          </div>
          <div className="flex gap-2 justify-between py-2">
            <div></div>
            <div> Others</div>
            <div>24%</div>
            <img src={Orange} alt="blue" />
          </div>
        </div>

        <DoughnutChart />
      </div>
    </div>
  );
}

export default TopLocations;
