import React, { useRef, useEffect, useState } from 'react'
import ZingTouch from 'zingtouch';
const Menu = (
    {
        backgroundImg,
        setBackgroundImg,
        currentMusic,
        setCurrentMusic,
        angle,
        setAngle,
        menu,
        setMenu,
        pause,
        setPause,
        isPlaying,
        setIsPlaying,
        switchMusic,
        setSwitchMusic,
        chooseFeature,
        setChooseFeature,
        song,
        setSong,
        homeBg,
        setHomeBg,
        musicLength,
        setMusicLength,
    }) => {



    var currentAngle = 15;
    var target;
    var region;



    //Zing Region 
    useEffect(() => {
        target = document.getElementById('interaction');
        region = new ZingTouch.Region(target, false, false);
        region.bind(target, 'rotate', function (e) {
            currentAngle += e.detail.distanceFromLast;

            //ca is the current angle
            let ca = Math.floor(currentAngle % 360);
            if (ca >= 0 && ca <= 90) {
                setAngle(0)
            } else if (ca > 90 && ca <= 180) {
                setAngle(1);;
            } else if (ca > 180 && ca <= 270) {
                setAngle(2);
            } else if (ca > 240 && ca <= 360) {
                setAngle(3);
            } else if (ca >= -90 && ca < 0) {
                setAngle(3);
            } else if (ca >= -90 && ca < -180) {
                setAngle(2);
            } else if (ca >= -180 && ca < -270) {
                setAngle(1);
            } else {
                setAngle(0);
            }
        });
    }, []);

    //handle Menu games,music else 
    const handleMenu = () => {
        if (chooseFeature == true) {
            setChooseFeature(!chooseFeature)
        }
        setMenu(!menu);
    }

    //handle Feature center button
    const handleFeature = () => {

        if (chooseFeature === false) {
            setChooseFeature(!chooseFeature);
        } else if (menu === false) {
            setChooseFeature(false);
        }
        setMenu(!menu);
    }

    //Acess Next music
    const handleNextMusic = () => {

        setCurrentMusic(currentMusic + 1 <= 2 ? currentMusic + 1 : 0);
        setPause(true);
    }

    //Access previous music
    const handlePrevMusic = () => {
        setCurrentMusic(currentMusic - 1 >= 0 ? currentMusic - 1 : 2);
        setPause(true);

    }

    //Handle Play Pause function
    const handlePlayPause = () => {
        if (chooseFeature) {
            setPause(!pause);
        }
    }
    return (
        <div style={{ height: "40%", width: "60%", borderRadius: "100%", position: "relative" }} id="interaction" className="interaction  bg-white mt-4 m-auto d-flex justify-content-center align-items-center ">
            <button style={{ top: "5px", outline: "none" }} className="bg-white position-absolute border-0  pt-2 " onClick={() => handleMenu()} >Menu</button>
            <button onClick={handlePrevMusic} style={{ left: "5px", outline: "none" }} className="position-absolute text-secondary border-0 bg-white"><i className="ml-2 fa-solid fa-backward-fast"></i></button>
            <button onClick={handleNextMusic} style={{ right: "5px", outline: "none" }} className="position-absolute text-secondary border-0 bg-white"><i className="mr-2 fa-solid fa-forward-fast"></i></button>
            <button onClick={handlePlayPause} style={{ bottom: "5px", outline: "none" }} className="position-absolute border-0 bg-white text-secondary"><i className={`fa ${pause != true ? "fa-pause" : "fa-play"} mb-3`}></i></button>
            <button onClick={handleFeature} style={{ bottom: "56px", height: "84px", width: "85px", borderRadius: "100%", paddingBottom: "3px" }} className=" position-absolute border-0 bg-dark"></button>
        </div>
    )
}

export default Menu;