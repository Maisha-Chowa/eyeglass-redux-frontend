import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleEyeGlassQuery } from "../redux/features/eyeglass/eyeglassApi";

const EyeGlassDetails = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGetSingleEyeGlassQuery(id);

  console.log(data);
  console.log(isLoading);
  console.log(error);
  const productsData = data?.data;
  console.log(productsData);
  return (
    <>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[40%] p-10">
          <img src={productsData?.image} className="w-full" alt="book" />
        </div>

        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold"> {productsData?.name}</h1>
          <h1 className="text-xl font-semibold">
            Price: {productsData?.price}
          </h1>
          <p className="text-xl">
            <span className="font-semibold"> Quantity:</span>{" "}
            {productsData?.quantity}
          </p>
          <p className="text-xl">
            {" "}
            <span className="font-semibold"> Frame Material::</span>{" "}
            {productsData?.frameMaterial}
          </p>
          <p className="text-xl">
            {" "}
            <span className="font-semibold">Short Frame Shape: </span>
            {productsData?.frameShape}
          </p>
          <p className="text-xl">
            <span className="font-semibold"> Long Lens Type: </span>
            {productsData?.lensType}
          </p>
          <p className="text-xl">
            <span className="font-semibold"> Brand: </span>
            {productsData?.brand}
          </p>
          <p className="text-xl">
            <span className="font-semibold"> Gender: </span>
            {productsData?.gender}
          </p>
          <p className="text-xl">
            <span className="font-semibold"> Color: </span>
            {productsData?.color}
          </p>
          <button className="bg-emerald-500 p-4 rounded-xl text-white">
            Add to Wishlist
          </button>
        </div>
      </div>
    </>
  );
};

export default EyeGlassDetails;
