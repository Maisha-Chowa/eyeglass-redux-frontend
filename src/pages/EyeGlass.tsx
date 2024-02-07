import React from "react";
import { useGetEyeGlassQuery } from "../redux/features/eyeglass/eyeglassApi";
import Card from "../components/Card";
import { IEyeGlass } from "../types/globalTypes";

const EyeGlass = () => {
  const { data, isLoading, error } = useGetEyeGlassQuery(undefined);
  console.log(data);
  console.log(isLoading);
  console.log(error);
  const productsData = data?.data;
  console.log(productsData);
  return (
    <div className="grid grid-cols-12 max-w-7xl mx-auto relative ">
      <div className="col-span-9 grid grid-cols-3 gap-10 pb-20">
        {productsData?.map((EyeGlass: IEyeGlass) => (
          <Card EyeGlass={EyeGlass} />
        ))}
      </div>
    </div>
  );
};

export default EyeGlass;
