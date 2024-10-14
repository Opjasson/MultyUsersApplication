import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Userlist() {
    const [Users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const response = await axios.get("http://localhost:5000/users");
            setUsers(response.data);
        } catch (error) {
            console.log(error.response);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getUsers();
    };
    return (
        <div>
            <h1 className="title">Dashboard</h1>
            <h2 className="subtitle">List Of Users</h2>
            <Link to={"/users/add"} className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.map((user, index) => (
                        <tr key={user.uuid}>
                            <td>{index + 1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <Link
                                    className="button is-small is-info"
                                    to={`/users/edit/${user.uuid}`}>
                                    Edit
                                </Link>
                                <button
                                    onClick={() => deleteUser(user.uuid)}
                                    className="is-danger button is-small">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Userlist;
