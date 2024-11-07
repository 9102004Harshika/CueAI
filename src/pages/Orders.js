import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { IoHome } from "react-icons/io5";

const Orders = () => {
  const { username } = useParams(); // Retrieve the username from URL parameters
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [downloadedFiles, setDownloadedFiles] = useState({}); // Track downloaded files

  useEffect(() => {
    // Fetch order details when the component mounts
    axios.get(`http://localhost:5000/${username}/getOrders`)
      .then(response => {
        if (Array.isArray(response.data)) {
          setOrders(response.data);
          setLoading(false);
        } else {
          throw new Error('Unexpected data format from server');
        }
      })
      .catch(err => {
        console.error('Failed to fetch orders:', err.response || err);
        setError(`Failed to fetch orders: ${err.response?.statusText || err.message}`);
        setLoading(false);
      });

    // Load downloaded files from localStorage
    const storedDownloads = JSON.parse(localStorage.getItem('downloadedFiles')) || {};
    setDownloadedFiles(storedDownloads);
  }, [username]);

  const handleGetPromptFile = async (promptId) => {
    try {
      const response = await axios.get(`http://localhost:5000/getPromptFile/${promptId}`, {
        responseType: 'blob' // Important to handle file downloads
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `prompt_${promptId}.docx`); // Change extension based on your file type
      document.body.appendChild(link);
      link.click();
      link.remove();

      setDownloadedFiles(prevState => {
        const updatedState = {
          ...prevState,
          [promptId]: true
        };
        localStorage.setItem('downloadedFiles', JSON.stringify(updatedState));
        return updatedState;
      });
    } catch (err) {
      console.error('Failed to fetch the prompt file', err);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="orders-container bg-[#222236] min-h-screen p-10 relative">
      <button 
        onClick={() => navigate(`/${username}`)} 
        className="absolute top-15 right-10 text-3xl text-white font-bold py-2 px-4 rounded"
      >
       <IoHome />
      </button>
      
      <h1 className="mb-6">Order Details for <span className="capitalize"> {username}</span></h1>
      {orders.length > 0 ? (
        <div className="orders-list">
          {orders.map(order => (
            <div key={order._id} className="order-item bg-[rgb(57,57,84)] p-6 rounded-lg shadow-lg mb-4">
              <h2 className="text-xl text-white font-semibold mb-2">Order ID: {order._id}</h2>
              <p className="[color:var(--textColor)] mb-4">Date: {new Date(order.date).toLocaleDateString()}</p>
              <p className="text-lg text-white font-bold">Total Price: ₹{order.totalPrice}</p>
              <div className="order-items mt-4">
                {order.items.map(item => (
                  <div key={item.promptId} className="order-item-details bg-[rgb(50,50,70)] p-4 rounded-lg mb-2">
                    <h3 className="text-lg text-white font-semibold">{item.title}</h3>
                    <p className="[color:var(--textColor)]">Quantity: {item.quantity}</p>
                    <p className="[color:var(--textColor)]">Price per unit: ₹{item.price}</p>
                    
                    <button 
                      onClick={() => handleGetPromptFile(item.promptId)} 
                      className={`mt-3 font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-white 
                        button hover:bg-white`}
                    >
                      {downloadedFiles[item.promptId] ? 'Download Again' : 'Get Prompt File'}
                    </button>

                    {downloadedFiles[item.promptId] && (
                      <p className="text-green-500 mt-3">File Already Downloaded</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg [color:var(--textColor)]">No orders found for {username}...</p>
      )}
    </div>
  );
};

export default Orders;
