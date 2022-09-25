import React, { useState } from 'react'
import Screen from './Screen';
import Menu from './Menu';
import scene from './assets/images/scene.jpg';
import sacred from './assets/songs/sacred.mp3';
const Home = () => {


    const [angle, setAngle] = useState(0);
    const [menu, setMenu] = useState(false);
    const [chooseFeature, setChooseFeature] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [backgroundImg, setBackgroundImg] = useState(scene);
    const [pause, setPause] = useState(true);
    const [currentMusic, setCurrentMusic] = useState(0);
    const [switchMusic, setSwitchMusic] = useState(0);
    const [song, setSong] = useState(new Audio(sacred));
    const [homeBg, setHomeBg] = useState(0);
    const [musicLength, setMusicLength] = useState(0);

    return (
        <div style={{ height: "30rem", width: "20rem", borderTopLeftRadius: "34px", borderTopRightRadius: "34px", borderBottomLeftRadius: "34px", borderBottomRightRadius: "34px" }} className=" bg-secondary">
            <Screen
                angle={angle}
                setAngle={setAngle}
                menu={menu}
                setMenu={setMenu}
                chooseFeature={chooseFeature}
                setChooseFeature={setChooseFeature}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                backgroundImg={backgroundImg}
                setBackgroundImg={setBackgroundImg}
                pause={pause}
                setPause={setPause}
                currentMusic={currentMusic}
                setCurrentMusic={setCurrentMusic}
                switchMusic={switchMusic}
                setSwitchMusic={setSwitchMusic}
                song={song}
                setSong={setSong}
                homeBg={homeBg}
                setHomeBg={setHomeBg}
                musicLength={musicLength}
                setMusicLength={setMusicLength}
            />

            <Menu
                angle={angle}
                setAngle={setAngle}
                menu={menu}
                setMenu={setMenu}
                chooseFeature={chooseFeature}
                setChooseFeature={setChooseFeature}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                backgroundImg={backgroundImg}
                setBackgroundImg={setBackgroundImg}
                pause={pause}
                setPause={setPause}
                currentMusic={currentMusic}
                setCurrentMusic={setCurrentMusic}
                switchMusic={switchMusic}
                setSwitchMusic={setSwitchMusic}
                song={song}
                setSong={setSong}
                homeBg={homeBg}
                setHomeBg={setHomeBg}
                musicLength={musicLength}
                setMusicLength={setMusicLength}
            />

        </div>
    )
}

export default Home;