import './about.scoped.css';
import Fpic from '../../images/Fpic.jpeg'; 


function About() {
    return (
        <div className="main-container-about">
            <div className="about-container">
                <h1>My About Page..</h1>
            </div>
            <div className="background">
                <img src={Fpic} alt="" />
            </div>
            <div className="text-wrapper-about">
                <p className='mainText'>
                    On this E-commerce capstone I decided to go with a light & simple
                    theme. I went with a fixed top nav-bar to give it a similar look to
                    the "scroll effect" look that I was originally going for instead. In
                    addition to this, all the a-tags on the nav-bar re-route you back to
                    one another so that makes it navigable except the right footer a-tag,
                    that re-routes you back to the home page. On the other hand, being
                    unsure about what other types of content to put on the home page, I
                    just left a few items on there so that it didn't look so empty. On the
                    left side of the footer I put an email wrapped in an a-tag. On the
                    right side I added pictures instead of using icons, that were also
                    wrapped in an a-tags. For most of the pages I went with Flex-box grids
                    to create each of the styled pages. I also used pictures, exported
                    fonts & icons to create these looks. My biggest issue with styles was
                    figuring out the postioning & what was nested & where, in order to
                    style the proper containers. In general css was a lot more difficult
                    to learn then Html. As for JavaScript, where I had issues was
                    converting Html into JS. It was confusing but over all with practice
                    it got a bit easier. So far my favorite language is JavaScript because
                    I feel the satisfaction from the progress I can instantly see.. plus I
                    just love making things look organized & pretty (:
                </p>
                <div className="sec-text-wrapper">
                    <p>
                        Through my time here at Devpipeline I've learned that the key to
                        success is consistency because without it we get nowhere,
                        determination because without it we wouldn't be consistent,
                        integrity because it's the root of what makes us better people, &
                        kindness because it's important to treat each other with empathy &
                        respect.. I learned how to manage my time & resources because not
                        everyone has the same opportunities as us.. I've learned to say no &
                        have boundaries because not everyone has the same vision as us. I've
                        learned what it means to have expectations & be optimistic because
                        only we have the choice to break unheathly cycles. I've learned the
                        importance of time & of living in the presences because it keeps me
                        from losing stamina & gaining an abundant mindset.. that is what
                        Devpipeline has taught me. I feel very fortunate for being here &
                        having the privileged to be among Devpipeline's devs.
                    </p>
                </div>
                <div className="signature">
                    <p>- Karely Partida </p>
                </div>
            </div>
        </div>
    );
}

export default About;
