import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

    const handleUpdateCoffee = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const teast = form.teast.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updatedCoffee = { name, quantity, supplier,teast, category, details, photo }
        console.log(updatedCoffee)

        // send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
         if(data.modifiedCount > 0){
          Swal.fire({
            title: "Update done",
            text: "Coffee updated successfully!",
            icon: "success"
          });
         }
        })

    }

  return (
    <div>
    <h1 className='text-center text-4xl font-extrabold'>Update Coffee Here</h1>
    <form onSubmit={handleUpdateCoffee}>
    <div className='mt-20 px-4 lg:px-2'>
        {/* coffee name and quantity */}
    <div className="flex flex-col gap-6 mb-6 md:flex-row">
    <div className="md:w-1/2">
      <fieldset className="space-y-1 dark:text-gray-800">
        <label className="block text-xl font-semibold">
          Coffee Name
        </label>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            defaultValue={name}
            placeholder="Coffee Name"
            className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
        </div>
      </fieldset>
    </div>
    <div className="md:w-1/2">
      <fieldset className="space-y-1 dark:text-gray-800">
        <label className="block text-xl font-semibold">
          Available Quantity
        </label>
        <div>
          <input
            type="text"
            name="quantity"
            id="quantity"
            defaultValue={quantity}
            placeholder="Available Quantity"
            className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
        </div>
      </fieldset>
    </div>
  </div>
        {/* supplier name and teast */}
    <div className="flex flex-col gap-6 mb-6 md:flex-row">
        <div className="md:w-1/2">
      <fieldset className="space-y-1 dark:text-gray-800">
        <label className="block text-xl font-semibold">
        Supplier
        </label>
        <div>
          <input
            type="text"
            name="supplier"
            id="supplier"
            defaultValue={supplier}
            placeholder="Supplier"
            className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
        </div>
      </fieldset>
    </div>
    <div className="md:w-1/2">
      <fieldset className="space-y-1 dark:text-gray-800">
        <label className="block text-xl font-semibold">
        Taste
        </label>
        <div>
          <input
            type="text"
            name="teast"
            id="teast"
            defaultValue={taste}
            placeholder="Taste"
            className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
        </div>
      </fieldset>
    </div>
  </div>
        {/* Category name and Details */}
    <div className="flex flex-col gap-6 mb-6 md:flex-row">
        <div className="md:w-1/2">
      <fieldset className="space-y-1 dark:text-gray-800">
        <label className="block text-xl font-semibold">
        Category
        </label>
        <div>
          <input
            type="text"
            name="category"
            id="category"
            defaultValue={category}
            placeholder="Category"
            className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
        </div>
      </fieldset>
    </div>
    <div className="md:w-1/2">
      <fieldset className="space-y-1 dark:text-gray-800">
        <label className="block text-xl font-semibold">
        Details
        </label>
        <div>
          <input
            type="text"
            name="details"
            id="details"
            defaultValue={details}
            placeholder="Details"
            className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
        </div>
      </fieldset>
    </div>
  </div>
        {/* Photo */}
    <div className="flex gap-6 mb-6">
        <div className="md:w-full">
      <fieldset className="space-y-1 dark:text-gray-800">
        <label className="block text-xl font-semibold">
        Photo
        </label>
        <div>
          <input
            type="text"
            name="photo"
            id="photo"
            defaultValue={photo}
            placeholder="Photo"
            className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
          />
        </div>
      </fieldset>
    </div>
  </div>
    <div className="flex gap-6 mb-6">
        <input type="submit" value='Update Coffee' className='bg-[#D2B48C] text-2xl border-2 border-black w-full rounded-md p-1 cursor-pointer' />
  </div>
    </div>
    </form>
</div>
  );
};

export default UpdateCoffee;
