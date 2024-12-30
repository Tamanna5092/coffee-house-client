import React from "react";
import Swal from "sweetalert2";

const AddCofffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const teast = form.teast.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      teast,
      category,
      details,
      photo,
    };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success",
          text: "User added successfully",
          icon: "success",
        });
      });
      form.reset()
  };
  return (
    <div>
      <h1 className="text-center text-4xl font-extrabold">Add Coffee Here</h1>
      <p className="text-center mt-4">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleAddCoffee}>
        <div className="mt-20 px-4 lg:px-2">
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
                    placeholder="Coffee Name"
                    className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600" required
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
                    placeholder="Available Quantity"
                    className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600" required
                  />
                </div>
              </fieldset>
            </div>
          </div>
          {/* supplier name and teast */}
          <div className="flex flex-col gap-6 mb-6 md:flex-row">
            <div className="md:w-1/2">
              <fieldset className="space-y-1 dark:text-gray-800">
                <label className="block text-xl font-semibold">Supplier</label>
                <div>
                  <input
                    type="text"
                    name="supplier"
                    id="supplier"
                    placeholder="Supplier"
                    className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600" required
                  />
                </div>
              </fieldset>
            </div>
            <div className="md:w-1/2">
              <fieldset className="space-y-1 dark:text-gray-800">
                <label className="block text-xl font-semibold">Taste</label>
                <div>
                  <input
                    type="text"
                    name="teast"
                    id="teast"
                    placeholder="Taste"
                    className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600" required
                  />
                </div>
              </fieldset>
            </div>
          </div>
          {/* Category name and Details */}
          <div className="flex flex-col gap-6 mb-6 md:flex-row">
            <div className="md:w-1/2">
              <fieldset className="space-y-1 dark:text-gray-800">
                <label className="block text-xl font-semibold">Category</label>
                <div>
                  <input
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Category"
                    className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600" required
                  />
                </div>
              </fieldset>
            </div>
            <div className="md:w-1/2">
              <fieldset className="space-y-1 dark:text-gray-800">
                <label className="block text-xl font-semibold">Details</label>
                <div>
                  <input
                    type="text"
                    name="details"
                    id="details"
                    placeholder="Details"
                    className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600" required
                  />
                </div>
              </fieldset>
            </div>
          </div>
          {/* Photo */}
          <div className="flex gap-6 mb-6">
            <div className="md:w-full">
              <fieldset className="space-y-1 dark:text-gray-800">
                <label className="block text-xl font-semibold">Photo</label>
                <div>
                  <input
                    type="text"
                    name="photo"
                    id="photo"
                    placeholder="Photo"
                    className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600" required
                  />
                </div>
              </fieldset>
            </div>
          </div>
          <div className="flex gap-6 mb-6">
            <input
              type="submit"
              value="Add Coffee"
              className="bg-[#D2B48C] text-2xl border-2 border-black w-full rounded-md p-1 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCofffee;
