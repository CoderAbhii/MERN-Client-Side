import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAllPlayerFunction } from '../api/apis';
import { fetchAllPlayers, userSearch } from '../context/PayerContext';
import UserPlayerItem from '../components/UserPlayerItem';

const GetAllPlayerPage = () => {

  const [sort, setSort] = useState("New");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState();
  const { userSearchState } = useContext(userSearch);
  const [date, setDate] = useState("");


  const convertPageIntoNumber = parseInt(page);
  const loadMore = () => {
    setPage(convertPageIntoNumber + 1);
  }

  const handleDate = (date) => {
    setDate(moment(date).format('L'));
  }
  const clearDate = () => {
    setDate("");
  }

  const { fetchAllPlayersState, setFetchAllPlayersState } = useContext(fetchAllPlayers);

  const getAllPlayer = async () => {
    const apiResponse = await getAllPlayerFunction(sort, page, userSearchState, date);
    setFetchAllPlayersState(apiResponse.data.allPlayer);
    setPagination(apiResponse.data.total_pages);
  }


  useEffect(() => {
    getAllPlayer();
  }, [sort, page, userSearchState, date])


  return (
    <>
      <div className="default-page">
        <h1>Get User Added Player <button className="btn btn-dark btn-sm" type="button" data-bs-toggle="dropdown"><i className="fa-solid fa-sort"></i></button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={() => { setSort("Old") }}>Old</li>
            <li className="dropdown-item" onClick={() => { setSort("New") }}>New</li>
          </ul></h1>

         <div className="row">
          <div className="col-xl-12 m-auto">
          <DatePicker className="form-control search_feild" id="reservationDate" name="reservationDate" placeholderText="Choose date" dateFormat="MM/dd/yyyy" value={date} onChange={handleDate} autoComplete='off' /> <i className="fa-solid fa-xmark date-clr" onClick={clearDate}></i>
          </div>
         </div>

        <div className="all-user-player">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Player Name</th>
                <th scope="col">Player Tag</th>
                <th scope="col">Player War Stars</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            {
              fetchAllPlayersState.map((element, index) => {
                return <UserPlayerItem key={index} sno={index + 1} dataItems={element}/>
              })
            }
          </table>
          <div className="load-more-btn d-flex justify-content-center">
            <button className="btn btn-outline-dark btn-sm" disabled={page === pagination} onClick={loadMore}>Load More...</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default GetAllPlayerPage