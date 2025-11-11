import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';
import Loader from '../../components/Loader/Loader';


const url = import.meta.env.VITE_BACKEND_URL;

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);
    
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        if (!user) {
            return <Loader></Loader>
            
        } else {
            fetch(`${url}/reviews?email=${user?.email}`)
              .then((res) => res.json())
              .then((data) => setMyReviews(data));
            
        }
    }, [])
    console.log(myReviews);
    const handleDelete = () => {
        console.log('click d');
        
    }
    
    return (
      <div>
       
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
          <h1 className="text-3xl text-primary sm:text-5xl font-bold mb-6 text-center">
            My Reviews: {" "}
            <span className="text-primary">{myReviews?.length || 0}</span>
          </h1>

          <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
            <table className="min-w-full text-left text-xs sm:text-sm text-gray-700">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="py-3 px-2 sm:px-4">SL No</th>
                  <th className="py-3 px-2 sm:px-4">Food</th>
                  <th className="py-3 px-2 sm:px-4">MyInfo</th>
                  <th className="py-3 px-2 sm:px-4">Ratings</th>
                  <th className="py-3 px-2 sm:px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myReviews.map((item, index) => (
                  <tr
                    key={item._id}
                    className="border-t border-gray-200 hover:bg-gray-50 transition"
                  >
                    {/* SL No */}
                    <td className="py-3 px-2 sm:px-4">{index + 1}</td>

                    {/* Food Details */}
                    <td className="py-3 px-2 sm:px-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <img
                          src={item.foodImage}
                          alt={item.foodName}
                          className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-md border"
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">
                            {item.foodName}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500">
                            {item.location}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* MyInfo */}
                    <td className="py-3 px-2 sm:px-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <img
                          src={item.userImage}
                          alt={item.userName}
                          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border"
                        />
                        <div className="flex flex-col">
                          <p className="font-semibold text-gray-800 text-sm sm:text-base">
                            {item.userName}
                          </p>
                          <p className="text-xs sm:text-sm text-gray-500 truncate max-w-[120px] sm:max-w-none">
                            {item.userEmail}
                          </p>
                        </div>
                      </div>
                    </td>

                    
                    {/* Review Ratings */}
                    <td>
                      <button className="px-2 sm:px-3 py-1 ml-4 my-4 rounded-full bg-[#f82780] text-white transition text-xs sm:text-sm">
                        {item.ratings}
                      </button>
                    </td>

                    {/* Actions */}
                    <td className="py-3  sm:px-4 space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col  items-center justify-center lg:mt-2 sm:flex-row">
                      <button className="px-2 sm:px-3 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-50 transition text-xs sm:text-sm">
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="px-2 sm:px-3 py-1 text-red-500 border border-red-500 rounded hover:bg-red-50 transition text-xs sm:text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default MyReviews;