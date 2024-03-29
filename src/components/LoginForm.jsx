import React from "react";
import { FormComponent } from "./FormComponent";

function LoginForm() {
  return (
    <>
      <div className="absolute w-screen h-screen grid grid-rows-3 md:grid-cols-3   border-2 lg:bg-white bg-slate-200">
        <div className="md:h-screen  flex flex-row rounded-b-3xl shadow-2xl loginUpper	 items-center justify-center">
          <div>
            <div
              style={{ fontFamily: "Roboto" }}
              className="text-5xl text-emerald-700 font-bold tracking-tighter"
            >
              
              Shuchi
            </div>
          </div>
        </div>
        <div className="row-span-2 md:col-span-2 pt-12 mt-12 md:mt-24">
       <FormComponent />
       </div>
              

              
      </div>
    </>
  );
}

export default LoginForm;
