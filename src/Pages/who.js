import react from 'react';
import { Passage, MainTitleCentered } from '../Components/PageElements';
import { Link } from 'react-router-dom';

const Who = () => {

    const PrintPassage = () => {
        return (
            <div>
                <Passage>Hi, my name is Alex Moore, and I'm someone who never learned what the term
                    "master of none" meant. I graduated back in 2020 with a degree in Computer
                    Science and a minor in Digital Studies, and I only decided now that making
                    this website miiiiight be a good idea.
                </Passage>

                <Passage>
                    I'm currently attempting to get my foot in the door with software development,
                    hence why I made this website myself with React. Though, I'm also pursing more
                    creative fields, more specifically video/film making, writing, and game development,
                    to name a few.
                </Passage>

                <Passage>
                    This website is still a work in progress, but eventually, I'll have seperate
                    tabs for what I've done regaurding each field I'm interested in.
                </Passage>
            </div>
        );
    }

    return (
        <div>
            <MainTitleCentered>Who am I, and why am I like this?</MainTitleCentered>
            {PrintPassage()}

            <Link to="/aleimew-website-mainpage"> return home</Link>
        </div>
    );
}

export default Who;