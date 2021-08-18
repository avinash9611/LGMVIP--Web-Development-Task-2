import React from 'react';
import './card.css';
import { css } from "@emotion/react";
import PuffLoader
from "react-spinners/PuffLoader";

const override = css`
  display: block;
  margin: 100px auto;
  border-color: red;
`;

const Users = ({loading,users}) => {
  return loading ? (   
    <div>
    <PuffLoader color={"#36D7B7"} loading={loading} size={50} css={override}/>
    <h1 className='fetch'>Please wait while we fetch the data</h1>
    </div>
    ) : 
        (
        <div>
            {users.map(user =>
              <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3 sizing" key={user.id}>
                {
                  console.log(user)
                }
                <img src={user.avatar} alt={user.avatar} className="sizing2"></img>
                <h1 className="upper">{user.first_name} {user.last_name}</h1>
                <p>{user.email}</p>
              </div>
            )
          }
        </div>
  )
}

export default Users;