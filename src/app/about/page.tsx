import React from 'react';

const Page = () => {
  return (
    <div className="p-6">
      <h1 className="flex text-red-400 font-extrabold text-3xl h-[220px] w-auto">
        About Us
      </h1>
      <p className="text-lg leading-7 mt-2">
        Pizza is a delicious Italian dish consisting of a flatbread sliced into thin, 
        <span className="font-semibold"> round slices</span>, typically topped with tomato, 
        cheese, and various other ingredients, such as mozzarella, basil, olives, and 
        extra virgin olive oil. The term <span className="uppercase font-bold text-red-400">  pizza  </span> 
        is also used to refer to a whole pizza, a piece of pizza, or a type of pizza, 
        such as a New York style.
      </p>
    </div>
  );
};

export default Page;

