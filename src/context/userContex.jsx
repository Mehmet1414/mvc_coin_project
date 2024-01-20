import { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";
const UserContex = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const signed_user = localStorage.getItem("token");

    setUser(signed_user);
  }, []);
  const signUser = (newUser) => {
    // benzersiz id olustur
    newUser.id = v4();
    // id`yi localStorige göndder
    localStorage.setItem("token", newUser.id);
    // id'yi usser a atama yap
    setUser(newUser.id);
  };
  //console.log(user);

  return (
    <UserContex.Provider value={{ user, signUser }}>
      {children}
    </UserContex.Provider>
  );
};

export default UserContex;
