import * as React from "react";

export const AuthContext = React.createContext<{
  user: any;
  setUser: any;
  handleSignOut: any;
} | null>(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContextProvider = ({ children }:{children:any}) => {
  const [user, setUser] = React.useState({});

  const handleSignOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
