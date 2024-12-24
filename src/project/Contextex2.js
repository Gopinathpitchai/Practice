import { useContext, createContext, useState } from "react";

const ParentContext = createContext();

const ParentProvider = ({ children }) => {
  const [user, setUser] = useState([
    { constmerid: 1, constmername: "Gopi", age: 25 },
    { constmerid: 2, constmername: "jeeva", age: 32 },
    { constmerid: 3, constmername: "kalai", age: 20 },
    { constmerid: 4, constmername: "Akash", age: 26 },
    { constmerid: 5, constmername: "Josva", age: 36 },
    { constmerid: 6, constmername: "vishnu", age: 45 },
    { constmerid: 7, constmername: "Zia", age: 41 },
    { constmerid: 8, constmername: "Mohan", age: 23 },
    { constmerid: 9, constmername: "Saravan", age: 21 },
  ]);

  return (
    <ParentContext.Provider value={{ user, setUser }}>
      {children}
    </ParentContext.Provider>
  );
};
const ParentProfile = () => {
  const { user } = useContext(ParentContext);

  // const displayDetails = () => {
  //     return user.map(coustomer => {
  //         console.log(coustomer)
  //     }

  //     )
  // };
  console.log(user);

  return (
    <div>
      {user.map((image, index) => (
        <ul key={index}>
          <li>
            {image.constmerid}
            {image.constmername}
            {image.age}
          </li>
        </ul>
      ))}
    </div>
  );
};

const Display = () => {
  return (
    <ParentProvider>
      <div>
        <h1>Displaying ListIdeam</h1>
        <ParentProfile />
      </div>
    </ParentProvider>
  );
};

export default Display;
