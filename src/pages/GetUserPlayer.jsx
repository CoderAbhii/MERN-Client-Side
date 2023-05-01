import React, { useContext, useEffect, useState } from 'react'
import {toast} from 'react-toastify'
import UserPlayerItem from '../components/UserPlayerItem'
import { fetchUserPlayer, userSearch } from '../context/PayerContext'
import { getUserPlayerFunction } from '../api/apis';

const GetUserPlayer = () => {

  const [sort, setSort] = useState("New");
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState();
  const {userSearchState} = useContext(userSearch)


  const convertPageIntoNumber = parseInt(page);
  const loadMore = () => {
    setPage(convertPageIntoNumber + 1)
  }

  const { fetchUserPlayerState, setFetchUserPlayerState } = useContext(fetchUserPlayer);

  const getUserPlayer = async () => {
    const apiResponse = await getUserPlayerFunction(sort, page, userSearchState);
    if (apiResponse.status === 200){
      setFetchUserPlayerState(apiResponse.data.allPlayer);
      setPagination(apiResponse.data.total_pages);
    }
    if(apiResponse.data.total_docs === 0){
      toast.error("No player added by you");
    }
  }

  useEffect(() => {
    getUserPlayer();
  }, [sort, page, userSearchState])


  return (
    <>
      <div className="default-page">
        <h1>Get User Added Player <button className="btn btn-dark btn-sm" type="button" data-bs-toggle="dropdown"><i className="fa-solid fa-sort"></i></button>
          <ul className="dropdown-menu">
            <li className="dropdown-item" onClick={() => { setSort("Old") }}>Old</li>
            <li className="dropdown-item" onClick={() => { setSort("New") }}>New</li>
          </ul>
        </h1>

        <div className="all-user-player">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Player Name</th>
                <th scope="col">Player Tag</th>
                <th scope="col">Player War Stars</th>
              </tr>
            </thead>
            {
              fetchUserPlayerState.map((element, index) => {
                return <UserPlayerItem key={index} sno={index + 1} dataItems={element} />
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

export default GetUserPlayer