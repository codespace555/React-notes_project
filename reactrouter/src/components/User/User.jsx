import React from "react";
import { useParams } from "react-router-dom";

import useData from "../Hooks/useData";

function User() {
  const { userid } = useParams();
  const data = useData(userid);
  return (
  <>
  
  <main className="profile-page">
  <section className="relative block h-500-px">
    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url(" +'https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80' +")"
          }}>
      <span id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></span>
    </div>
    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" >
      <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
      </svg>
    </div>
  </section>
  <section className="relative py-16 bg-blueGray-200">
    <div className="container mx-auto px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
              <div className="relative">
                <img alt="..." src={data.image} className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"/>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <button className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
               {data.username}
                </button>
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xs font-bold block uppercase tracking-wide text-blueGray-600">{data.age}</span><span className="text-sm text-blueGray-400">age</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xs font-bold block uppercase tracking-wide text-blueGray-600">{data.gender}</span><span className="text-sm text-blueGray-400">gender</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xs font-bold block uppercase tracking-wide text-blueGray-600">{data.email}</span><span className="text-sm text-blueGray-400">email</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
              {data.firstName} {data.maidenName} {data.lastName}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              {data.university}
            </div>
            
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>{data.university}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
           
          </div>
        </div>
      </div>
    </div>
    <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-6/12 px-4 mx-auto text-center">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Made with <a href="" className="text-blueGray-500 hover:text-gray-800" target="_blank">namankr_</a> by <a href="https://github.com/codespace555" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> codespace555</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
  </section>
</main>
</>
  );
}

export default User;
