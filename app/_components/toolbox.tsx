import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
// Import SVGs as React components
import  CSS3Icon from '../icons/css3-original.svg';
import GitIcon from '../icons/git-original.svg';
import HTML5Icon from '../icons/html5-original.svg';
import JavaScriptIcon from '../icons/javascript-original.svg';
import MaterialUIIcon from '../icons/materialui-original.svg';
import MongoDBIcon from '../icons/mongodb-original.svg';
import NodeJSIcon from '../icons/nodejs-original.svg';
import ReactIcon from '../icons/react-original.svg';
import TypeScriptIcon from '../icons/typescript-original.svg';

const whileHover = { scale: 1.1 };

const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const iconStyle = {
    width: '50px',
    height: '50px',
    margin: '10px',
    transition: 'transform 0.3s ease-in-out',
};
const Toolbox = () => {
    return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <motion.div variants={iconVariants} whileHover={whileHover}><CSS3Icon style={iconStyle} title="CSS3" /></motion.div>
        <motion.div variants={iconVariants} whileHover={whileHover}><GitIcon style={iconStyle} title="Git" /></motion.div>
        <motion.div variants={iconVariants} whileHover={whileHover}><HTML5Icon style={iconStyle} title="HTML5" /></motion.div>
        <motion.div variants={iconVariants} whileHover={whileHover}><JavaScriptIcon style={iconStyle} title="JavaScript" /></motion.div>
        <motion.div variants={iconVariants} whileHover={whileHover}><MaterialUIIcon style={iconStyle} title="Material-UI" /></motion.div>
        <motion.div variants={iconVariants} whileHover={whileHover}><MongoDBIcon style={iconStyle} title="MongoDB" /></motion.div>
        <motion.div variants={iconVariants} whileHover={whileHover}><NodeJSIcon style={iconStyle} title="Node.js" /></motion.div>
        <motion.div variants={iconVariants} whileHover={whileHover}><ReactIcon style={iconStyle} title="React" /></motion.div>
        <motion.div variants={iconVariants} whileHover={whileHover}><TypeScriptIcon style={iconStyle} title="TypeScript" /></motion.div>
    </div>
    );
};

export default Toolbox;
