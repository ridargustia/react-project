import React, {Component} from "react";
import VideoComp from '../../component/VideoThumbComponent/VideoThumbComponent';

class Home extends Component {
    render(){
        return (
            <div>
                <h4>Video Component</h4>
                <hr />
                <VideoComp
                    time="8.56"
                    title="Latian Pemrograman React JS"
                    desc="320x ditonton. 2 hari yang lalu"/>
                <VideoComp
                    time="17.22"
                     title="Tutorial Express JS"
                     desc="821x ditonton. 3 menit yang lalu"/>
                <VideoComp
                    time="5.34"
                    title="PODCAST - Sisi Lain Pemrograman"
                    desc="2.3k ditonton. 3 jam yang lalu"/>
                <VideoComp
                    time="6.02"
                    title="How Many Create Website With React JS"
                    desc="509x ditonton. 2 menit yang lalu"/>
                <VideoComp />
            </div>
        )
    }
}

export default Home;