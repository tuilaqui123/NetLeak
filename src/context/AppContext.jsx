import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [casts, setCasts] = useState([])
    const [directors, setDirectors] = useState([])
    const [movies, setMovies] = useState([])

    const fetchUser = () => {
        axios.get("http://localhost:8081/v1/api/admin/users")
            .then((res) => {
                setUsers(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const fetchCast = () => {
        axios.get("http://localhost:8081/v1/api/admin/casts")
            .then((res) => {
                setCasts(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const fetchDirector = () => {
        axios.get("http://localhost:8081/v1/api/admin/studios")
            .then((res) => {
                setDirectors(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const fetchMovie = () => {
        axios.get("http://localhost:8081/v1/api/admin/films")
            .then((res) => {
                console.log("fetch film: ", res.data)
                setMovies(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        fetchUser()
        fetchCast()
        fetchDirector()
        fetchMovie()
    }, [])
    console.log("user", users)
    console.log("cast", casts)
    console.log("director", directors)
    console.log("movie", movies)

    return <AppContext.Provider value={{
        users, setUsers,
        casts, setCasts,
        directors, setDirectors,
        movies, setMovies
    }}>
        {children}
    </AppContext.Provider>
}