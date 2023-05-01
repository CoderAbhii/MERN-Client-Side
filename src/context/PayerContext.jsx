import React, { createContext, useState } from 'react'

export const loggedUser = createContext();

export const role = createContext();

export const fetchAllPlayers = createContext();

export const fetchUserPlayer = createContext();

export const fetchSinglePlayer = createContext();

export const addPlayer = createContext();

export const updatePlayer = createContext();

export const deletePlayer = createContext();

export const userSearch = createContext();



const ReservationContext = ({ children }) => {

    const [userState, setUserState] = useState("");

    const [userRole, SetUserRole] = useState("")

    const [fetchAllPlayersState, setFetchAllPlayersState] = useState([]);

    const [fetchUserPlayerState, setFetchUserPlayerState] = useState([]);

    const [fetchSinglePlayerState, setFetchSinglePlayerState] = useState({});

    const [addPlayerState, setAddPlayerState] = useState("");

    const [updatePlayerState, setUpdatePlayerState] = useState("");

    const [deletePlayerState, setDeletePlayerState] = useState("");

    const [userSearchState, setUserSearchState] = useState("")

    return (
        <>
            <loggedUser.Provider value={{ userState, setUserState }}>

                <role.Provider value={{ userRole, SetUserRole }}>

                    <fetchAllPlayers.Provider value={{ fetchAllPlayersState, setFetchAllPlayersState }}>

                        <fetchUserPlayer.Provider value={{ fetchUserPlayerState, setFetchUserPlayerState }}>

                            <fetchSinglePlayer.Provider value={{ fetchSinglePlayerState, setFetchSinglePlayerState }}>

                                <addPlayer.Provider value={{ addPlayerState, setAddPlayerState }}>

                                    <updatePlayer.Provider value={{ updatePlayerState, setUpdatePlayerState }}>

                                        <deletePlayer.Provider value={{ deletePlayerState, setDeletePlayerState }}>

                                            <userSearch.Provider value={{ userSearchState, setUserSearchState }}>

                                                {children}

                                            </userSearch.Provider>

                                        </deletePlayer.Provider>

                                    </updatePlayer.Provider>

                                </addPlayer.Provider>

                            </fetchSinglePlayer.Provider>

                        </fetchUserPlayer.Provider>

                    </fetchAllPlayers.Provider>

                </role.Provider>

            </loggedUser.Provider>

        </>
    )
}

export default ReservationContext