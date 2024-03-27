import { signOut } from 'firebase/auth';
import React from 'react';
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { firebaseAuth } from '../utils/FirebaseConfig';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setPokemonTab, setToast, setUserStatus } from '../app/slices/AppSlice';
import { pokemonTabs } from '../utils/Constants';
import { useLocation } from 'react-router-dom';

const Footer = () => {

  const location = useLocation();
  const dispatch = useAppDispatch();
  const { currentPokemonTab } = useAppSelector(({ app }) => app);
  const handleLogOut = () => {
    signOut(firebaseAuth);
    dispatch(setUserStatus(undefined));
    dispatch(setToast("Logged out successfully from Firebase."))
  };

  const routes = [
    {
      name: pokemonTabs.description,
      value: "Description",
    },
    {
      name: pokemonTabs.evolution,
      value: "Evolution",
    },
    {
      name: pokemonTabs.locations,
      value: "Catching",
    },
    {
      name: pokemonTabs.moves,
      value: "Capable Moves",
    },
  ];

  return (
    <footer>
    <div className="block"></div>
    <div className="data">
      {location.pathname.includes("/pokemon") && (
        <ul>
          {routes.map((route) => (
            <li
              key={route.name}
              className={`${
                currentPokemonTab === route.name ? "active" : ""
              }`}
              onClick={() => dispatch(setPokemonTab(route.name))}
            >
              {route.value}
            </li>
          ))}
        </ul>
      )}
    </div>
    <div className="block">
      <MdOutlinePowerSettingsNew onClick={handleLogOut} />
    </div>
  </footer>
  )
}

export default Footer
