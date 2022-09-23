import React from "react";

function App() {
    return (
        <Desktop1
            tabViewBackground="Background-tab.png"
            tabTitleApp="HSManager"
            additionalsViewBackground="Background.png"
            logoApp="logo.png"

            profileNickname="20GK"
            profileTag="#5454"
            profileNoteTitle="Заметка:"
            profileTitle="Profile"
            friendsTitle="Friends"
        />
    );
}

export default App;

function Desktop1(props) {
    const {
        tabViewBackground,
        tabTitleApp,
        additionalsViewBackground,
        logoApp,
        profileNickname,
        profileTag,
        profileNoteTitle,
        profileTitle,
    } = props;




    //fgdfg
    return (
        <div className="desktopView">
            <div className="desktopView-1 screen">
                <div className="tab-view">
                    <div className="tab-container" style={{ backgroundImage: `url(${tabViewBackground})` }}>
                        <div className="tab-title-app valign-text-middle">
                            {tabTitleApp}
                        </div>
                        <div className="tab-button-hide"></div>
                        <div className="tab-button-resize"></div>
                        <div className="tab-button-close"></div>
                    </div>
                </div>
                <div className="mainview">
                    <div className="additionalsView" style={{ backgroundImage: `url(${additionalsViewBackground})` }}>
                        <img className="app-icon" src={logoApp} alt="AppIcon" />
                        <div className="delegate"></div>
                        <div className="container-App-Upper">
                            <div className="integrate-app-red"></div>
                            <div className="integrate-app-green"></div>
                        </div>
                        <div className="container-App-Bottom">
                            <div className="integrate-app-blue"></div>
                            <div className="integrate-app-yellow"></div>
                        </div>
                    </div>
                    <div className="overlap-profile">
                        <div className="overlap-profile-flex">
                            <div className="overlap-profile-container">
                                <div className="overlap-profile-2">
                                    <div className="background"></div>
                                    <div className="profile-icon"></div>
                                    <div className="profile-nickname valign-text-middle">
                                        {profileNickname}
                                    </div>
                                    <div className="profile-tag valign-text-middle">
                                        {profileTag}
                                    </div>
                                    <div className="profile-online"></div>
                                    <div className="profile-note-area"></div>
                                    <div className="profile-note-title valign-text-middle">
                                        {profileNoteTitle}
                                    </div>
                                    <h1 className="title valign-text-middle inter-bold-white-40px">
                                        {profileTitle}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
