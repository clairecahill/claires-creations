import outsidelands from '../photos/outsidelands-blue.jpg';
import "../styles/home.scss"

function Home() {
    return (
        <div class="main-container">
            <div class="welcome">
                <div class="intro-message-container">
                    <h2 class="intro-message">i'm a software developer &amp; coffee enthusiast located in seattle, wa. welcome.</h2>
                </div>
                <div class="image-div">
                    <img class="profile-photo" src={outsidelands} alt="Profile"/>
                </div>
            </div>
            <div class="about-me-container">
                <h2 class="about-me-title">about me</h2>
                <div class="about-me">
                    <p>
                        hello! thanks for stumbling upon my website. as you explore the pages, it will become 
                        obvious that i love reading, finding new music, and knitting. i'm currently enjoying my
                        life in the city, going out to restaurants, coffee shops, book stores, and farmer's markets.
                        i like to hang out with my cat luna, watch reality tv (lol) and go anywhere to watch the 
                        sunset. i'm an extrovert, plant-lover, and developer. 
                    </p>
                    <p>
                        i graduated from oregon state university with my bachelor's degree in computer science 
                        then made the big move to seattle. i grew up in el dorado hills, ca then moved to 
                        corvallis, or to go to school. i moved to seattle to further my career in software
                        engineering and create lifelong memories in a completely new place.
                    </p>
                    <p>
                        this website is written in react and hosted on heroku. this is a personal project with 
                        the intention of growing my skills in web design, api integration, react, and styling. 
                        the github repository for this website is located here. i enjoyed creating it and i 
                        hope you will stay tuned for the updates that will be made as i learn new skills and 
                        technologies. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;