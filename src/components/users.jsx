import React, { useState } from "react";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "../utils/paginate";
import PropTypes from "prop-types";

const Users = ({ users, onDelete, onToggle }) => {
    // сниппет sfc
    const count = users.length; // количество юзеров
    const pageSize = 4; // количество юзеров на странице
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageIndex) => {
        // сниппет nfn
        // console.log("page: ", pageIndex);
        setCurrentPage(pageIndex);
    };

    const userCrop = paginate(users, currentPage, pageSize);
    // console.log(userCrop);

    return (
        <>
            {count > 0 && (
                <table className="table">
                    <User
                        users={users}
                        userCrop={userCrop}
                        onDelete={onDelete}
                        onToggle={onToggle}
                    />
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default Users;
