import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';

const Users2 = () => {

    const {isPending, isError, error, data: users} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=> {
            const res = await fetch('http://localhost:5000/user')
            return res.json()
        }
    })

    // const [users, setUsers] = useState([])
    
    // useEffect(()=> {
    //     fetch('http://localhost:5000/user')
    //         .then(res => res.json())
    //         .then(data => {
    //             setUsers(data)
    //         })
    // },[])

    const handleDelete = _id => {
        console.log('handle Delete', _id)
        // make sure user is confirmed to delete
        fetch(`http://localhost:5000/user/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Delete",
                text: "User deleted successfully!",
                icon: "success",
              });
            //   const remainingUsers = users.filter(user => user._id !== _id);
            //   setUsers(remainingUsers)
            }
          });
     }

     if(isPending){
        return <span className="loading loading-spinner text-success"></span>
     }
     if(isError){
        return <p>{error}</p>
     }

    return (
        <div>
        {/* <h1>Users : {loadUsers.length}</h1> */}
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th className="text-black font-extrabold">No</th>
                <th className="text-black font-extrabold">Email</th>
                <th className="text-black font-extrabold">Created At</th>
                <th className="text-black font-extrabold">Last Login</th>
                <th className="text-black font-extrabold">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>{user.email}</td>
                  <td>{user.createdAt}</td>
                  <td>{user.lastLoggedAt}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-success"
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Users2;