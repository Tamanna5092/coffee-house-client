import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Delete",
                text: "Coffee delete successfully!",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card card-side h-80 bg-base-100 shadow-xl gap-6">
        <figure>
          <img className="w-48 h-60" src={photo} alt="Movie" />
        </figure>
        <div className="w-full flex justify-between items-center gap-6">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
            <p>{details}</p>
            <p>{category}</p>
          </div>
          <div className="card-actions flex flex-col mr-4">
            <button className="btn btn-primary">View</button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-info">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
