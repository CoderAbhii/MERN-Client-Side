import React from 'react'
import { Link } from 'react-router-dom'

const UserPlayerItem = ({dataItems, sno}) => {
    return (
        <>
            <tbody className="text-center">
                <tr>
                    <th scope="row">{sno}</th>
                    <td>{dataItems.townhall_player}</td>
                    <td>{dataItems.townhall_tag}</td>
                    <td>{dataItems.war_stars}</td>
                    <td>
                        <div className="action-btn">
                            <Link to={`/view-player/${dataItems._id}`}><i className="fa fa-eye text-dark me-2"></i></Link>
                            <Link to={`/update-player/${dataItems._id}`}><i className="fa fa-pencil text-dark me-2"></i></Link>
                        </div>
                    </td>
                </tr>
            </tbody>
        </>
    )
}

export default UserPlayerItem