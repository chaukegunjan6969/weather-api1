import React, { useState } from "react";
import { Grantlocation } from "../components/Grantlocation";
import { Card } from "../components/Card";



export const Yourwheather = () => {

    
  return (
    <div  className="flex flex-col  w-screen h-screen">
    {
      <div className="pt-12">
      <Grantlocation></Grantlocation>
      </div>
      
    }
    </div>
  )
}
