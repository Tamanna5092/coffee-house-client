import React from 'react';

const AddCofffee = () => {
    return (
        <div>
            <h1 className='text-center text-4xl font-extrabold'>Add Coffee Here</h1>
            <div>
            <div className="flex gap-6 mb-6">
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
                    placeholder="Available Quantity"
                    className="w-full border rounded-r-md focus:ring-inset p-2 dark:border-gray-300 dark:text-gray-800 dark:bg-gray-100 focus:dark:ring-violet-600"
                  />
                </div>
              </fieldset>
            </div>
          </div>
            </div>
        </div>
    );
};

export default AddCofffee;