import React, { useContext, useEffect } from 'react'
import { fetchSinglePlayer } from '../context/PayerContext';
import { deletePlayerFunction, viewPlayerFunction } from '../api/apis';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ViewPlayer = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const {fetchSinglePlayerState, setFetchSinglePlayerState} = useContext(fetchSinglePlayer);
  
  const getSinglePlayer = async() => {
    const apiResponse = await viewPlayerFunction(id)
    setFetchSinglePlayerState(apiResponse.data.playerData);
  }

  const deletePlayer = async() => {
    const apiResponse = await deletePlayerFunction(fetchSinglePlayerState._id)
    if(apiResponse.status === 200){
      toast.success(apiResponse.data.successMessage);
      navigate("/get-all-player")
    }
    if(apiResponse.status === 401){
      toast.error(apiResponse.data.errorMessage);
    }
  }

  useEffect(() => {
   getSinglePlayer();
  }, [])
  

  return (
    <>
      <div className="default-page">
        <div className="update-player">
          <h1>View Player</h1>
          <div className="view-player">
            <div className="row">
              <div className="col-xl-3">
                <p>{fetchSinglePlayerState.townhall_player}</p>
              </div>
              <div className="col-xl-3">
                <p>{fetchSinglePlayerState.townhall_tag}</p>
              </div>
              <div className="col-xl-3">
                <p>{fetchSinglePlayerState.experience_level}</p>
              </div>
              <div className="col-xl-3">
                <p>{fetchSinglePlayerState.king_level}</p>
              </div>
              <div className="col-xl-3">
                <p>{fetchSinglePlayerState.playerAddDate}</p>
              </div>
              <div className="col-xl-3">
                <p>{fetchSinglePlayerState.queen_level}</p>
              </div>
              <div className="col-xl-3">
                <p>{fetchSinglePlayerState.royal_champion_level}</p>
              </div>
              <div className="col-xl-3">
                <p>{fetchSinglePlayerState.townhall_level}</p>
              </div>
              <div className="col-xl-3">
                <p>{fetchSinglePlayerState.walls}</p>
              </div>
              <div className="col-xl-3">
                <p>{fetchSinglePlayerState.war_stars}</p>
              </div>
              <div className="col-xl-3">
                <p>{fetchSinglePlayerState.warden_level}</p>
              </div>
              <div className="col-xl-3">
                <p>{fetchSinglePlayerState.playerAddedBy}</p>
              </div>
              <div className="delet-btn">
              <i className="fa fa-trash me-2 fs-1" onClick={deletePlayer}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewPlayer