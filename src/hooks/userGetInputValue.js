import { useState } from "react";

const useGetInputValue = (initialState) => {
  const [user, setUser] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return { user, setUser, handleChange };
};

export default useGetInputValue;
