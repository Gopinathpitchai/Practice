import React, { useContext, useState ,createContext} from 'react';


const UserContext = createContext();

const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState({ name: 'John Doe', age: 25 });

  return (

    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}; 

const UserProfile = () => {
  
  const { user, setUser } = useContext(UserContext);

  const changeName = () => {
    setUser({ ...user, name: 'Jane Doe' });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

// const Profile = () => {
  
//   const { user, setUser } = useContext(UserContext);

//   const Name = () => {
//     setUser({ ...user, name: 'gopi' });
//   };

//   return(
//     <div>
//       <h1>PROFILE</h1>
//       <p>Name:{user.name}</p>
//       <p>Age:{user.age}</p>
//       <button onClick ></button>
//     </div>
//   )
// }
const Ex1 = () => {
  
  return (
    <>
    <UserProvider>
      <div>
        <h1>Welcome to the User App</h1>
        <UserProfile />
        {/* <Profile/> */}
      </div>
    </UserProvider>
    {/* parentProvider */}
    {/* <parantProfile/> */}
    </>
  );
};




export default Ex1;
