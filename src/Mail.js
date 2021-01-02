import { IconButton } from '@material-ui/core';
import { ArrowBack, CheckCircle, Delete, Email, Error, MoreVert, MoveToInbox, WatchLater, LabelImportant, UnfoldMore, Print, ExitToApp } from '@material-ui/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectOpenMail } from './features/mailSlice';
import "./Mail.css";


function Mail() {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);
 

    return (
        <div className="mail">
            <div className="mail_tools">
                <div className="mail_toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBack />
                    </IconButton>

                    <IconButton>
                        <MoveToInbox />
                    </IconButton>

                    <IconButton>
                        <Error />
                    </IconButton>

                    <IconButton>
                        <Delete />
                    </IconButton>

                    <IconButton>
                        <Email />
                    </IconButton>

                    <IconButton>
                        <WatchLater />
                    </IconButton>

                    <IconButton>
                        <CheckCircle />
                    </IconButton>

                    <IconButton>
                        <LabelImportant />
                    </IconButton>

                    <IconButton>
                        <MoreVert />
                    </IconButton>

                </div>

                <div className="mail_toolsRight">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>

                    <IconButton>
                        <Print />
                    </IconButton>

                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>

            <div className="mail_body">
                <div className="mail_bodyHeader">
                    <h2>{selectedMail?.Subject}</h2>
                    <LabelImportant className="mail_important" />
                    <p>{selectedMail?.Title}</p>
                    <p className="mail_time">{selectedMail?.Time}</p>
                </div>

                <div className="mail_message">
                   <p>{selectedMail?.Description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
