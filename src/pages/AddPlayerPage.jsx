import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { addPlayerFunction } from '../api/apis';
import { useNavigate } from 'react-router-dom';

const AddPlayerPage = () => {

  const navigate = useNavigate();

  const [inputValues, setInputValues] = useState({
    townhall_player: "", townhall_tag: "", townhall_level: "", war_stars: "", experience_level: "", king_level: "", queen_level: "", warden_level: "", royal_champion_level: "", walls: "", playerAddDate: ""
  });

  const handleChange = (event) => {
    setInputValues({ ...inputValues, [event.target.name]: event.target.value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { townhall_player, townhall_tag, townhall_level, war_stars, experience_level, king_level, queen_level, warden_level, royal_champion_level, walls, playerAddDate } = inputValues;

    if (townhall_player === "") {
      toast.error("Name cannot be blank");
    }
    else if (townhall_tag === "") {
      toast.error("Tag cannot be blank")
    }
    else if (townhall_level === "") {
      toast.error("Th Level cannot be blank")
    }
    else if (war_stars === "") {
      toast.error("War Stars cannot be blank")
    }
    else if (experience_level === "") {
      toast.error("Xp Level cannot be blank")
    }
    else if (townhall_tag === "") {
      toast.error("Tag cannot be blank")
    }
    else if (king_level === "") {
      toast.error("King Level cannot be blank")
    }
    else if (queen_level === "") {
      toast.error("Queen Level cannot be blank")
    }
    else if (warden_level === "") {
      toast.error("Warden Level cannot be blank")
    }
    else if (royal_champion_level === "") {
      toast.error("Royal Champion Level cannot be blank")
    }
    else if (walls === "") {
      toast.error("Enter maxxed walls")
    }
    else if (playerAddDate === "") {
      toast.error("Player added date cannot be blank")
    }
    else {
      const data = new FormData();
      data.append("townhall_player", townhall_player);
      data.append("townhall_tag", townhall_tag);
      data.append("townhall_level", townhall_level);
      data.append("war_stars", war_stars);
      data.append("experience_level", experience_level);
      data.append("king_level", king_level);
      data.append("queen_level", queen_level);
      data.append("warden_level", warden_level);
      data.append("royal_champion_level", royal_champion_level);
      data.append("walls", walls);
      data.append("playerAddDate", playerAddDate);

      const apiResponse = await addPlayerFunction(data);
      console.log(apiResponse);
      if(apiResponse.status===200){
        toast.success(apiResponse.data.successMessage);
        navigate("/get-user-player")
      }
      else{
        toast.error("Some error occured");
      }
    }
  }
  return (
    <>
      <div className="default-page">
        <div className="add-player">
          <h1>Add New Player</h1>
          <form className="row" onSubmit={(event) => handleSubmit(event)}>
            <div className="col-xl-6 mb-2">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="townhall_player" value={inputValues.townhall_player} onChange={(e) => handleChange(e)} />
            </div>
            <div className="col-xl-6 mb-2">
              <label className="form-label">Tag</label>
              <input type="text" className="form-control" name="townhall_tag" value={inputValues.townhall_tag} onChange={(e) => handleChange(e)} />
            </div>
            <div className="col-xl-4 mb-2">
              <label className="form-label">Th Level</label>
              <input type="text" className="form-control" name="townhall_level" value={inputValues.townhall_level} onChange={(e) => handleChange(e)} />
            </div>
            <div className="col-xl-4 mb-2">
              <label className="form-label">War Stars</label>
              <input type="text" className="form-control" name="war_stars" value={inputValues.war_stars} onChange={(e) => handleChange(e)} />
            </div>
            <div className="col-xl-4 mb-2">
              <label className="form-label">Xp Level</label>
              <input type="text" className="form-control" name="experience_level" value={inputValues.experience_level} onChange={(e) => handleChange(e)} />
            </div>
            <div className="col-xl-3 mb-2">
              <label className="form-label">King Level</label>
              <input type="text" className="form-control" name="king_level" value={inputValues.king_level} onChange={(e) => handleChange(e)} />
            </div>
            <div className="col-xl-3 mb-2">
              <label className="form-label">Queen Level</label>
              <input type="text" className="form-control" name="queen_level" value={inputValues.queen_level} onChange={(e) => handleChange(e)} />
            </div>
            <div className="col-xl-3 mb-2">
              <label className="form-label">Warden Level</label>
              <input type="text" className="form-control" name="warden_level" value={inputValues.warden_level} onChange={(e) => handleChange(e)} />
            </div>
            <div className="col-xl-3 mb-2">
              <label className="form-label">RC Level</label>
              <input type="text" className="form-control" name="royal_champion_level" value={inputValues.royal_champion_level} onChange={(e) => handleChange(e)} />
            </div>
            <div className="col-xl-6 mb-2">
              <label className="form-label">Walls</label>
              <input type="text" className="form-control" name="walls" value={inputValues.walls} onChange={(e) => handleChange(e)} />
            </div>
            <div className="col-xl-6 mb-2">
              <label className="form-label">Player Added date</label>
              <input type="text" className="form-control" name="playerAddDate" value={inputValues.playerAddDate} onChange={(e) => handleChange(e)} />
            </div>
            <div className="col-xl-4 m-auto">
              <button className="btn add-player-btn btn-outline-success mt-2">Add</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AddPlayerPage