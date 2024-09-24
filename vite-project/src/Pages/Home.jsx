import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import Highlighttext from "../compoents/core/Homepage/Highlighttext";

const Home = () => {
  return (
    <div className="relative flex flex-col mx-auto items-center max-w-[90%] shadow-md  justify-between text-white">
      {/* section 1 */}
     
        <Link to="/signup">
          <div className="group mt-16 mx-auto p-1 rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:bg-richblack-900  hover:shadow-lg">
            <div className="flex flex-row items-center gap-2 px-4 py-[5px] group-hover:text-richblack-100">
              <p className="text-white">Become an Instructor</p>
              <HiArrowSmRight className="group-hover:translate-x-1 transition-all duration-200" />
            </div>
          </div>
        </Link>

        <div  className="" >
         
        Empower Your Future With  <Highlighttext text={"Coding Skills"}/>



        </div>
      
    </div>


  );
};

export default Home;
