import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects';

export const HomeLayout = ({ children }) => {
    return (
    <>
        <Banner />
        <Skills />
        <Projects />
    </>
    );
};