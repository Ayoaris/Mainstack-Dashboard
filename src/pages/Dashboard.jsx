import Profile from "../components/Profile";
import SideBar from "../components/Sidebar";
import LineChart from "../components/Charts/lineChart";
import TopLocations from "../components/TopLocations";
import TopReferralSource from "../components/TopReferralSource";

function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row border-2 border-gray-100">
      <div className=" ">
        <SideBar />
      </div>
      <div className="flex flex-col lg:w-[70%] px-6 pt-4 lg:mx-10">
        <Profile />
        <div className="h-[85vh] overflow-y-scroll">
          <div className="w-full pb-4 my-4 rounded-b-lg ">
            <LineChart />
          </div>
          <div className=" lg:flex gap-4 h-full pb-4  rounded-b-lg ">
            <TopLocations />
            <TopReferralSource />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
