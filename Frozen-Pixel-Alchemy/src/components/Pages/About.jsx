
import { useNavigate } from "react-router-dom";
import {Button} from "../Shared/Button"; // import button component from shared comp
import './AboutStylingSheet.css';

    
    const About = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>
                About Jack
            </h2>
            <img src='./public/Jack_Image.png' className="jack" alt="Jack" />
            <p>
                Jack is a passionate visual storyteller, blending artistry with technical precision to capture moments that resonate. With years of experience in photography, his work spans diverse genres, from intimate portraits to grand landscapes. Whether behind the lens or in front of an audience, Jack brings creativity, expertise, and a deep appreciation for the art of photography.
            </p>
            <h2>
                Public Speaking, Presentations, and Workshops
            </h2>
            <p>
                Jack is not only a photographer but also a dedicated educator and speaker. He regularly conducts workshops, presentations, and public talks focused on:
            </p>
            <ul>
                <div>

                    <li>
                        Photography Techniques: Mastering composition, lighting, and post-processing.
                    </li>
                    <li>
                        Industry Insights: The business of photography, branding, and building a portfolio.
                    </li>
                    <li>
                        Creative Storytelling: How images can evoke emotion and narrate powerful stories. Through interactive sessions, Jack empowers aspiring photographers and professionals alike, helping them refine their skills and discover their unique visual voice.
                    </li>
                </div>
            </ul>


            <h2>
                Official Partners and Sponsors
            </h2>
            <p>
                Jack collaborates with a network of brands, industry leaders, and creative professionals who share his vision. His official partners and sponsors include:
            </p>
            <ul>
                <li>
                    Camera & Equipment Brands – Supporting innovation in imaging technology.
                </li>
                <li>
                    Photography Studios & Agencies – Working alongside top-tier professionals.
                </li>
                <li>
                    Art & Print Companies – Bringing Jack’s work to life through high-quality prints. These partnerships allow Jack to continuously push creative boundaries while delivering exceptional visual experiences.
                </li>
            </ul>
            <h2>
                Interested in Working With Jack?
            </h2>
            <p>
                Jack is always open to new collaborations, commissions, and creative projects. Whether you're looking for a skilled photographer, a speaker for an event, or a strategic partnership, Jack would love to hear from you.
            </p>

            {/* navigate to contact page on button click */}
            <Button className="learn-more-btn" onClick={() => navigate("/contact")}>
                             📩 Get in touch to discuss potential opportunities and bring your vision to life.
                        </Button>
                    </div>
    );
};

export default About;