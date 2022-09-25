import React, { useEffect, useState, useRef } from 'react'
//images
import scene from './assets/images/scene.jpg';
import games from './assets/images/games.jpg';
import sacredImg from './assets/images/sacredImg.jpg';
import narcosImg from './assets/images/narcosImg.jpg';
import swayImg from './assets/images/swayImg.jpg';
import setting from './assets/images/setting.jpg';
import coverflow from './assets/images/coverflow.jpg';

//Music
import narcos from './assets/songs/narcos.mp3';
import sacred from './assets/songs/sacred.mp3';
import sway from './assets/songs/sway.mp3';
const Screen = (
    { backgroundImg,
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
        chooseFeature,
        setChooseFeature,
        switchMusic,
        setSwitchMusic,
        song,
        setSong,
        homeBg,
        setHomeBg,
        musicLength,
        setMusicLength,
    }) => {




    const audioElm = useRef();

    //set background Img
    useEffect(() => {
        if (chooseFeature) {
            if (angle == 0) {
                if (currentMusic == 0) {
                    setBackgroundImg(sacredImg)
                } else if (currentMusic == 1) {
                    setBackgroundImg(narcosImg)
                } else {
                    setBackgroundImg(swayImg);
                }
            } else if (angle == 1) {
                setBackgroundImg(games)
            } else if (angle == 3) {
                setBackgroundImg(setting);
            } else if (angle == 2) {
                setBackgroundImg(coverflow);
            }
        } else {
            setBackgroundImg(scene);
        }
    }, [currentMusic, chooseFeature, angle]);

    //set Song
    useEffect(() => {
        if (chooseFeature) {
            if (angle == 0) {
                if (currentMusic == 0) {
                    setSong(sacred);
                } else if (currentMusic == 1) {
                    setSong((narcos));
                } else if (currentMusic == 2) {
                    setSong((sway));
                }
            }
        }
    }, [chooseFeature, currentMusic])

    //pause and play song depending upon the pause state
    useEffect(() => {
        if (pause && chooseFeature) {
            audioElm.current.pause();
        } else {
            audioElm.current.play();
            setMusicLength(song.currentTime / song.duration * 100)

        }
    }, [pause])

    const handlePausePlay = () => {
        setPause(!pause);
    }


    useEffect(() => {
        setPause(true);
    }, [menu]);

    //Play and Pause depending upon the pause state
    useEffect(() => {
        const playing = () => {
            if (pause) {
                audioElm.current.pause();
            } else {
                audioElm.current.play();
            }

        }
        playing();
    }, [pause]);


    //Music duration display
    const handleMusicLength = () => {
        setMusicLength(audioElm.current.currentTime / audioElm.current.duration * 100)
        if (audioElm.current.currentTime == audioElm.current.duration) {
            setPause(true);
        }
    }


    return (
        <div style={{ height: "50%", borderTopLeftRadius: "24px", borderTopRightRadius: "24px" }} className="position-relative overflow-hidden bg-white mb-4 ">
            <div className={`${menu == true ? "d-flex" : "d-none"} flex-column justify-content-center align-items-center menu-bar h-100 w-50 bg-white position-absolute  top-0 left-0 `}>
                <div className={`menu-bar h-25 w-100 ${angle === 0 ? "bg-feature" : ""} pl-3 pt-3`}>Music</div>
                <div className={`menu-bar h-25 w-100 ${angle === 1 ? "bg-feature" : ""} pl-3 pt-3`}>Games</div>
                <div className={`menu-bar h-25 w-100 ${angle === 2 ? "bg-feature" : ""} pl-3 pt-3`}>Coverflow</div>
                <div className={`menu-bar h-25 w-100 ${angle === 3 ? "bg-feature" : ""} pl-3 pt-3`}>Settings</div>
            </div>
            <img className='h-100 w-100' src={backgroundImg}></img>
            <audio ref={audioElm} src={song} onClick={handlePausePlay} onTimeUpdate={handleMusicLength}></audio>
            <div style={{ height: "5px", width: "100%", zIndex: "100", bottom: "40px", borderRadius: "7px" }} className={`position-absolute  ${angle == 0 && chooseFeature ? "d-flex" : "d-none"} justify-content-center song-length`}>
                <div style={{ height: "100%", width: "80%" }} className="bg-white range">
                    <div style={{ width: `${musicLength}%` }} className='bg-warning h-100'></div>
                </div>
            </div>
        </div>
    )
}

export default Screen;
