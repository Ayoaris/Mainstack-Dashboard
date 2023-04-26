

function Profile() {
  return (
    <div className="bg-[ #E5E5E5]">
      <div>
        <h1 className="py-2 lg:py-4 text-xl font-bold text-[#131316]">Dashboard</h1>
      </div>

      <div className="flex justify-between">
        <div>
          <h1 className="py-6 text-2xl font-bold text-[#131316]">
            Good morning, Blessing ⛅️ 
          </h1>
        </div>
        <p className=" py-4 text-base text-[#FF5403] leading-5 h-6">
          View analytics
        </p>
      
      </div>
      <p className=" text-base text-[#31373D] leading-5 h-6">
        Check out your dashboard summary.
      </p>

      <div className=" lg:flex lg:gap-4 py-8">
        <div className="px-4 py-3 border border-[#EFF1F6] rounded-3xl ">
          <p className="text-[#31373D] text-sm font-semibold ">1 Day</p>
        </div>
        <div className="px-4 py-3 border border-[#EFF1F6] rounded-3xl ">
          <p className="text-[#31373D] text-sm font-semibold">3 Days</p>
        </div>
        <div className="px-4 py-3 border border-[#EFF1F6] rounded-3xl ">
          <p className="text-[#31373D] text-sm font-semibold">7 Days</p>
        </div>
        <div className="px-4 py-3 border border-[#EFF1F6] rounded-3xl ">
          <p className="text-[#31373D] text-sm font-semibold">30 Days</p>
        </div>
        <div className="px-4 py-3 bg-[#FFEEE5] border border-[#FF5403] rounded-3xl ">
          <p className="text-[#FF5403] text-sm font-semibold">All Time</p>
        </div>
        <div className="px-4 py-3 border border-[#EFF1F6] rounded-3xl ">
          <p className="text-[#31373D] text-sm font-semibold">Custom Date</p>
        </div>
      </div>
    </div>
  );
}

export default Profile