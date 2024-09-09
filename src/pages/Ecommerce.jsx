import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";
import { useStateContext } from "../context/ContextProvider";
import SparkLine from "../components/Charts/SparkLine";
import Stacked from "../components/Charts/Stacked";
import Button from "../components/Button";
import { earningData, SparklineAreaData } from "../data/dummy";

function Ecommerce() {
const {  currentColor} = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        {/* Earnings Card */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-90 text-white hover:drop-shadow-xl rounded-full p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 md:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm ml-2 text-${item.pcColor}`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-10">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-780 p-4 m-3">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Update</p>
            <div className="flex gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <GoDotFill className="text-gray-600" />
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <GoDotFill className="text-green-400" />
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className=" mt-10 flex gap-10 flex-wrap justify-center ">
            <div className=" border-r-1 border-color m-4 pr-10 ">
              <div >
                <p>
                  <span className="mr-1 text-3xl font-semibold">$90,322.380</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white text-xs bg-green-400 ">23%</span>
                </p>
                <p className=" text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-5">
                <p>
                  <span className=" text-3xl font-semibold">$90,322.380</span>
                 </p>
                <p className=" text-gray-500 mt-1">Expense</p>
              </div>
              <div className="mt-5">
                <SparkLine
                currentColor={currentColor}
                type="Line"
                height="80px"
                width="250px"
                data={SparklineAreaData}
                color={currentColor}
                />
              </div>
              <div className="mt-10">
              <Button
              color="white"
              bgColor={currentColor}
              text="Download Report"
              borderRadius="10px"
            />
              </div>
            </div>
            <div className="flex">
              <Stacked 
              width="320px" 
              height="360px"
              />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
