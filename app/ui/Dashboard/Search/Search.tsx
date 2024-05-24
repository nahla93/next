"use client";
import React, { useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import style from './Search.module.css';
import { IPerson } from '@/app/types';
import Modal from '@/app/ui/Dashboard/Modal/Modal'
const Search: React.FC = () => {
    const [searchString, setSearchString] = useState("");
    const [searchRes, setSearchRes] = useState<string[]>([]);
    const [listUsers, setListUsers] = useState<IPerson[]>([]);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        const fetchTotalUsers = async () => {
            try {
                const response = await fetch('/api/User');
                const users: IPerson[] = await response.json();
                setListUsers(users);
            } catch (err) {
                console.error('Failed to fetch users', err);
            }
        };

        fetchTotalUsers();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value);
        handleSearch(e.target.value);
    };

    const handleSearch = (searchString: string) => {
        const results = listUsers
            .filter(user => user.name.toLowerCase().includes(searchString.toLowerCase()))
            .map(user => user.name);
        setSearchRes(results);
        setShowModal(true);
    };
    const handleCloseModal = () => {
      setShowModal(false);
  };

    return (
        <div className={style.search}>
            <input
                type="text"
                placeholder="Rechercher..."
                value={searchString}
                onChange={handleChange}
                className={style.input}
            />
            <button><IoSearch style={{ color: '#425c54' }} /></button>
            <Modal showModal={showModal} handleClose={handleCloseModal}>
                <h2>Search Results</h2>
                {searchRes.length > 0 ? (
                    <ul className={style.results}>
                        {searchRes.map((result, index) => (
                            <li key={index}>{result}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found</p>
                )}
            </Modal>
        </div>
    );
};

export default Search;
