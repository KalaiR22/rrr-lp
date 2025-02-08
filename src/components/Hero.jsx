import React, { useState, useEffect } from 'react';
import bg2 from '../assets/bg2.jpg';
import bgrrr from '../assets/bgrrr.png'
import char1 from '../assets/char1.png';
import char2 from '../assets/char2.png';
import char3 from '../assets/char3.png';
import char4 from '../assets/char4.png';
import char5 from '../assets/char5.png';
import char6 from '../assets/char6.png';
import bg from '../assets/magicstudio-art.jpg'
import { useAddress } from '../components/AddressContext';


const Hero = () => {
  const characters = [char1, char2, char3, char4, char5, char6];
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const { address } = useAddress();
  console.log("addressin hero:",address)

  useEffect(() => {
    const charInterval = setInterval(() => {
      setCurrentCharIndex((prevIndex) => (prevIndex + 1) % characters.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(charInterval);
  }, [characters.length]);

  useEffect(() => {
    const checkUserExists = async () => {
        try {
            // Check if the user exists based on the address
            const checkResponse = await fetch(`https://virtual-gf-py.vercel.app/user/check_user?username=${address}`);
            console.log(`https://virtual-gf-py.vercel.app/user/check_user?username=${address}`);
            console.log("checkResponse", checkResponse);

            if (checkResponse.ok) {
                const userExists = await checkResponse.json();

                if (userExists.message === "User exists") {
                    // If user exists, redirect to the URL with the address
                    window.location.href = `https://protostar-metaverse.vercel.app/${address}`;
                    return;
                }
            }
        } catch (error) {
            console.log("Error in checking user existence:", error);
        }
    };

    checkUserExists();
}, [address]);


  const handleClick = async () => {
    if (!address) {
        alert('Please connect your wallet first.');
        return;
    }

    try {
        

        // If user does not exist, prompt for the username and proceed to add the user
        const username = prompt("Please enter your username:");
        
        if (username && username.trim()) {
            const payload = {
                username: username.trim(),
                user_wallet_address: address
            };

            const addResponse = await fetch('https://virtual-gf-py.vercel.app/user/add_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (addResponse.ok) {
                console.log("Data sent successfully:", await addResponse.json());
                // Redirect to the new URL with address at the end
                window.location.href = `https://protostar-metaverse.vercel.app/${address}`;
            } else {
                console.error("Failed to send data. Status code:", addResponse.status);
            }
        } else {
            alert("Username is required to proceed.");
        }
    } catch (error) {
        console.error("An error occurred while checking or sending data:", error);
    }
};


const handleGusetClick = async () => {
  // Prompt for the wallet address if not provided
  const userAddress = prompt("Please enter your wallet address:");
  
  if (!userAddress || !userAddress.trim()) {
      alert('Wallet address is required to proceed.');
      return;
  }

  const address = userAddress.trim(); // Clean up any extra spaces
  
  try {
      // Prompt for the username
      const username = prompt("Please enter your username:");
      
      if (username && username.trim()) {
          const payload = {
              username: username.trim(),
              user_wallet_address: address
          };

          const addResponse = await fetch('https://virtual-gf-py.vercel.app/user/add_user', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(payload)
          });

          if (addResponse.ok) {
              console.log("Data sent successfully:", await addResponse.json());
              // Redirect to the new URL with address at the end
              window.location.href = `https://protostar-metaverse.vercel.app/${address}`;
          } else {
              console.error("Failed to send data. Status code:", addResponse.status);
          }
      } else {
          alert("Username is required to proceed.");
      }
  } catch (error) {
      console.error("An error occurred while checking or sending data:", error);
  }
};


  return (
    <div
      id="home"
      className="relative w-full h-screen flex justify-between items-center px-6 md:px-[5%] font-roboto"
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${bgrrr})` }}
      ></div>
      {/* Left section - Content */}
      <div className="text-left text-black space-y-6 w-full md:w-1/2 z-10">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold ">
          Explore, Build, and Thrive in Multiple Realms
        </h1>
        <p className="text-base md:text-lg lg:text-xl">
          Create your world, compete with others, and trade NFT worlds in a
          vibrant metaverse.
        </p>
        <button
          onClick={handleClick}
          className="px-6 py-3 bg-[#8689EB] border border-[#07030b36] text-black font-semibold rounded-lg shadow-md transition duration-300 
  relative overflow-hidden hover:bg-[#07030b] hover:text-[#8689EB] hover:border-[#8689EB] 
  before:absolute before:inset-0 before:bg-[#8689EB] before:blur-lg before:opacity-50 before:transition-opacity 
  before:duration-300 hover:before:opacity-100"
        >
          Join Now
        </button>

        <button
          onClick={handleGusetClick}
          className="px-6 py-3 bg-[#8689EB] border border-[#07030b36] text-black font-semibold rounded-lg shadow-md transition duration-300 
  relative overflow-hidden hover:bg-[#07030b] hover:text-[#8689EB] hover:border-[#8689EB] 
  before:absolute before:inset-0 before:bg-[#8689EB] before:blur-lg before:opacity-50 before:transition-opacity 
  before:duration-300 hover:before:opacity-100 sm:ml-9"
        >
          Join as Guest
        </button>
      </div>

      {/* Right section - Character slideshow */}
      <div className="w-1/2 hidden md:flex justify-center items-center z-50">
        <img
          src={characters[currentCharIndex]}
          alt="Character"
          className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] lg:w-[440px] lg:h-[620px] p-5 object-cover rounded-lg shadow-lg transition duration-1000 ease-in-out"
        />
      </div>

      {/* Mobile Character Slideshow */}
      <div className="md:hidden w-full flex justify-center items-center mt-8">
        <img
          src={characters[currentCharIndex]}
          alt="Character"
          className="w-[250px] h-[370px] object-cover rounded-lg shadow-lg  transition duration-1000 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Hero;
