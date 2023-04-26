import SideBar from "../components/Sidebar";
function Item7() {
  return (
    <div className="flex h-[100vh] flex-col lg:flex-row border-2 border-gray-100">
      <div className="">
        <SideBar />
      </div>
      <div className="flex-1 bg-[#FFEEE5] px-6 pt-4 pb-8 ">
        <h1 className="text-4xl">Item 7</h1>
      </div>
    </div>
  );
}

export default Item7;
