import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Request from "../../api/Request";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

function Profile({ match }) {
  const [user, setUser] = useState(undefined);
  const sObjectId = match?.params?.id;

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      var sPath = window.location.pathname.replace("profile", "user");
      Request.readSingle(sPath)
        .then((oResponse) => {
          console.log(oResponse.data.data?.entry);
          setUser(oResponse.data.data?.entry);
        })
        .catch((e) => {
          navigate("/");
        });
    }
  }, [user, sObjectId, navigate]);

  const sTitle = user ? `${user[1]} ${user[2]}` : "Error";

  return (
    <div>
      <Helmet title={sTitle} />
      {user && (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <div className="card p-4">
            <div className=" image d-flex flex-column justify-content-center align-items-center">
              <button className="btn btn-secondary">
                <Avatar
                  alt="Remy Sharp"
                  src="https://i.imgur.com/wvxPV9S.png"
                  sx={{ width: 100, height: 100 }}
                />
              </button>
              <span className="name mt-3">{sTitle}</span>
              <span className="idd">{user[6]}</span>
              <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <span className="idd1">{user[4]}</span>
                <span>
                  <i className="fa fa-copy"></i>
                </span>
              </div>
              <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                <span className="number"></span>
              </div>
              <div className=" d-flex mt-2">
                <button className="btn1 btn-dark">Editar Perfil</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
