import React, { FormEvent, useRef } from "react";
import { usePostEyeGlassMutation } from "../redux/features/eyeglass/eyeglassApi";

const AddEyeGlass = () => {
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

  const [postEyeGlass, { isLoading, isError, isSuccess }] =
    usePostEyeGlassMutation();
  console.log(isLoading);
  console.log(isError);
  console.log(isSuccess);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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

    const inputValue = {
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
    console.log(inputValue);

    const options = {
      data: inputValue,
    };

    console.log(options.data);
    postEyeGlass(options);
    (event.target as HTMLFormElement).reset();
  };
  return (
    <div className="max-w-7xl mx-auto mt-5">
      <h2 className="text-3xl font-semibold p-5 text-center"> Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <input id="name" placeholder="name" type="text" ref={nameRef} />

            <input id="price" placeholder="price" type="text" ref={priceRef} />

            <input
              id="quantity"
              placeholder="quantity"
              type="text"
              ref={quantityRef}
            />

            <input id="image" placeholder="image" type="text" ref={imageRef} />

            <input
              id="frameMaterial"
              placeholder="frameMaterial"
              type="text"
              ref={frameMaterialRef}
            />

            <input
              id="frameShape"
              placeholder="frameShape"
              type="text"
              ref={frameShapeRef}
            />

            <input
              id="lensType"
              placeholder="lensType"
              type="text"
              ref={lensTypeRef}
            />

            <input id="brand" placeholder="brand" type="text" ref={brandRef} />

            <input
              id="gender"
              placeholder="gender"
              type="text"
              ref={genderRef}
            />

            <input id="color" placeholder="Color" type="text" ref={colorRef} />
          </div>
          <button
            type="submit"
            className="rounded-full h-15 w-15 p-2 text-1xl bg-teal-300"
          >
            Add Eye Glass
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEyeGlass;
