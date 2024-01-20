import React, { useEffect } from "react";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { app } from "src/firebase.config";
import { setUser } from "src/redux/features/user";
import { Button } from "src/ui-elements/Button";

export const Auth = () => {
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();
  const firebaseAuth = getAuth(app);
  const { user } = useSelector((state) => state.user);
  console.log("user", user);

  const login = async () => {
    if (!user) {
      const response = await signInWithPopup(firebaseAuth, provider);
      localStorage.setItem(
        "user",
        JSON.stringify(response.user.providerData[0])
      );
      dispatch(setUser(response.user.providerData[0]));
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(setUser(null));
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
  }, [dispatch]);
  return (
    <div>
      {user ? (
        <Button onClick={() => logout()}>
          <LuLogOut />
        </Button>
      ) : (
        <Button onClick={() => login()}>
          <LuLogIn />
        </Button>
      )}
    </div>
  );
};
