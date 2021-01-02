import { Checkbox, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./EmailList.css";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import PeopleIcon from "@material-ui/icons/People";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";

function EmailList() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        db.collection("emails")
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => 
                setEmails(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data(), 
                    })
                ))
        )
    }, []);
    // console.log(emails.map(email => new Date(email.data.timestamp?.seconds * 1000).toUTCString()))

    return (
        <div className="emailList">
            <div className="emailList_settings">
                <div className="emailList_settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

                <div className="emailList_settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>
                </div>
            </div>
            <div className="emailList_sections">
                <Section Icon={InboxIcon} Title='Primary' Color='red' Selected />

                <Section Icon={PeopleIcon} Title='Social' Color='#1a73e8' />
                
                <Section Icon={LocalOfferIcon} Title='Promotions' Color='green' />
            </div>
            
            <div className="emailList_list">
            
                {emails.map( ({id, data}) => (
                        <EmailRow 
                            id={id}
                            key={id}
                            Title={data.to}
                            Subject={data.subject}
                            Description={data.message}
                            Time={new Date(data.timestamp?.seconds * 1000).toUTCString()}
                        />
                ))}
                
                <EmailRow Title="Twitch" 
                Subject="Hey Fellow coder" 
                Description="This is a test" 
                // Time="10pm" 
                />
            
                <EmailRow Title="Twitch" 
                Subject="Hey Fellow coder" 
                Description="This is a test, you can play with this as much as you want" 
                Time="10pm" />
            </div>
        </div>
    );
}

export default EmailList;
