import { useNavigate } from "react-router-dom";
import Button from "../Shared/Button";

const Home = () => {
  const navigate = useNavigate();
  
  return (
      <div>
        <h1 className="h-title">Welcome to Frozen Pixel Alchemy....!</h1>
          <h2>“Photography is the pause button of life.”</h2>
            <p>
                Jack Monroe is a passionate visual storyteller, renowned for capturing the unseen beauty in everyday moments and monumental events alike. With an instinctive eye for light, composition, and emotion, Jack has spent over a decade transforming fleeting instants into timeless imagery. From quiet portraits to bustling cityscapes and sunlit weddings, his portfolio spans across genres but remains united by a single goal: to tell authentic human stories.
            </p>
            <p>
                Over the years, Jack’s work has been featured by leading publications, exhibited in art galleries, and trusted by clients ranging from young couples to international brands. His approach is grounded in empathy, artistry, and a deep understanding of what makes a moment truly unforgettable.
            </p>
            <p>
                Whether you’re looking to document your milestone, launch a creative brand, or simply celebrate who you are, Jack offers more than just photography—he offers connection, clarity, and a vision.
          </p>
          <div className="home-imgs">
            <img src={('./src/assets/Images/Home/Home1.jpeg')} width="250px" height="250px" alt="Home-image-1"/>
            <img src={('./src/assets/Images/Home/Home2.jpeg')} width="250px" height="250px" alt="Home-image-2"/>
            <img src={('./src/assets/Images/Home/Home3.jpeg')} width="250px" height="250px" alt="Home-image-3"/>
          </div>
            <br />
          <Button className="learn-more-btn" onClick={() => navigate("/about")}>
                → Learn More About Jack
            </Button>
          <br />

          <h1>
            Recent clicks......
          </h1>
            <img src={('./src/assets/Images/RecentClicks/Recent1.jpeg')} width="250px" height="250px" alt="Recent-image-1"/>
            <img src={('./src/assets/Images/RecentClicks/Recent2.jpeg')} width="250px" height="250px" alt="Recent-image-2"/>
            <img src={('./src/assets/Images/RecentClicks/Recent3.jpeg')} width="250px" height="250px" alt="Recent-image-3"/>

            <h1>
                Blog
            </h1>
            <h3>
                Blog content:
            </h3>
            <p>
                sdjhcb;jhasdbnvjksd.bvhjsb
            </p>
            <h3>
                Comments:
            </h3>
            <p>
                jlbcalbsnckasnakbjbLK
            </p>
        </div>
  );
};

export default Home;