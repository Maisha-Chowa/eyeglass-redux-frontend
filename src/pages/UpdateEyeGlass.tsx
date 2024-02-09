import React, { FormEvent, useRef } from "react";
import { useParams } from "react-router-dom";
import {
  useGetSingleEyeGlassQuery,
  useUpdateEyeGlassMutation,
} from "../redux/features/eyeglass/eyeglassApi";
import { IEyeGlass } from "../types/globalTypes";

const UpdateEyeGlass = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const frameMaterialRef = useRef<HTMLInputElement>(null);
  const frameShapeRef = useRef<HTMLInputElement>(null);
  const lensTypeRef = useRef<HTMLInputElement>(null);
  const brandRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const colorRef = useRef<HTMLInputElement>(null);

  const { id } = useParams();
  const _id = id;
  //console.log("id", id);

  const { data, isLoading, error } = useGetSingleEyeGlassQuery(_id);

  //console.log(data);
  console.log(isLoading);
  console.log(error);
  const productsData = data?.data;
  console.log(productsData);

  const [updateEyeGlass] = useUpdateEyeGlassMutation();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = nameRef?.current?.value;
    const price = priceRef?.current?.value;
    const quantity = quantityRef?.current?.value;
    const image = imageRef?.current?.value;
    const frameMaterial = frameMaterialRef?.current?.value;
    const frameShape = frameShapeRef?.current?.value;
    const lensType = lensTypeRef?.current?.value;
    const brand = brandRef?.current?.value;
    const gender = genderRef?.current?.value;
    const color = colorRef?.current?.value;

    const inputValue: IEyeGlass = {
      id,
      name,
      price,
      quantity,
      image,
      frameMaterial,
      frameShape,
      lensType,
      brand,
      gender,
      color,
    };
    console.log("i", inputValue);
    await updateEyeGlass(inputValue);
    (event.target as HTMLFormElement).reset();
  };
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <h2 className="text-3xl font-semibold p-5 text-center">
        {" "}
        Update Eye Glass
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <input
              className="input input-bordered"
              id="name"
              type="text"
              defaultValue={productsData?.name}
              ref={nameRef}
            />

            <input
              className="input input-bordered"
              id="price"
              placeholder="price"
              type="text"
              ref={priceRef}
              defaultValue={productsData?.price}
            />

            <input
              className="input input-bordered"
              id="quantity"
              placeholder="quantity"
              type="text"
              ref={quantityRef}
              defaultValue={productsData?.quantity}
            />

            <input
              className="input input-bordered"
              id="image"
              placeholder="image"
              type="text"
              ref={imageRef}
              defaultValue={productsData?.image}
            />

            <input
              className="input input-bordered"
              id="frameMaterial"
              placeholder="frameMaterial"
              type="text"
              ref={frameMaterialRef}
              defaultValue={productsData?.frameMaterial}
            />

            <input
              className="input input-bordered"
              id="frameShape"
              placeholder="frameShape"
              type="text"
              ref={frameShapeRef}
              defaultValue={productsData?.frameShape}
            />

            <input
              className="input input-bordered"
              id="lensType"
              placeholder="lensType"
              type="text"
              ref={lensTypeRef}
              defaultValue={productsData?.lensType}
            />

            <input
              className="input input-bordered"
              id="brand"
              placeholder="brand"
              type="text"
              ref={brandRef}
              defaultValue={productsData?.brand}
            />

            <input
              className="input input-bordered"
              id="gender"
              placeholder="gender"
              type="text"
              ref={genderRef}
              defaultValue={productsData?.gender}
            />

            <input
              className="input input-bordered"
              id="color"
              placeholder="Color"
              type="text"
              ref={colorRef}
              defaultValue={productsData?.color}
            />
          </div>
          <button
            type="submit"
            className="rounded-full h-15 w-15 p-2 text-1xl bg-teal-300"
          >
            Update Eye Glass
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEyeGlass;
