import { useEffect } from 'react';
import { Banner } from './Banner';
import { Skills } from './Skills';
import { Projects } from './Projects';

export const HomeLayout = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
    <>
        <Banner />
        <Skills />
        <Projects />
    </>
    );
};