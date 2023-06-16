import { useState, useEffect } from "react";
import Pagination from "./pagination";
import User from "./user";
import { paginate } from "../utils/paginate";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";

const Users = ({ users: allUsers, ...rest }) => {
    // сниппет sfc
    const [currentPage, setCurrentPage] = useState(1);
    const count = allUsers.length; // количество юзеров
    const pageSize = 4; // количество юзеров на странице

    const handlePageChange = (pageIndex) => {
        // сниппет nfn
        setCurrentPage(pageIndex);
        // console.log("page: ", pageIndex);
    };

    const userCrop = paginate(allUsers, currentPage, pageSize);
    // console.log(userCrop);

    useEffect(() => {
        if (currentPage > Math.ceil(allUsers.length / pageSize) &&
            currentPage > 1
        ) {
            setCurrentPage(currentPage - 1);
        }
    }, [allUsers]);

    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User
                                {...rest}
                                {...user}
                                key={uuid()}
                            />
                        ))}
                    </tbody>
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
    users: PropTypes.array
};

export default Users;
