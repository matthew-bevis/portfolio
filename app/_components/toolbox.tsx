import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import CSS3Icon from '../icons/css3-original.svg';
import GitIcon from '../icons/git-original.svg';
import HTML5Icon from '../icons/html5-original.svg';
import JavaScriptIcon from '../icons/javascript-original.svg';
import MaterialUIIcon from '../icons/materialui-original.svg';
import MongoDBIcon from '../icons/mongodb-original.svg';
import NodeJSIcon from '../icons/nodejs-original.svg';
import ReactIcon from '../icons/react-original.svg';
import TypeScriptIcon from '../icons/typescript-original.svg';

const iconStyle = {
    width: '50px',
    height: '50px',
    margin: '10px',
    position: 'relative',
    transition: 'transform 0.3s ease-in-out',
};

const tooltipStyle = {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '6px 12px',
    color: 'white',
    background: 'rgba(0,0,0,0.75)',
    borderRadius: '4px',
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    fontSize: '12px',
    opacity: 0,
    transition: 'opacity 0.3s, visibility 0.3s',
};

const iconVariants = {
    hover: { scale: 1.1 },
};

const Toolbox = () => {
    const [hoveredIcon, setHoveredIcon] = useState('');

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        {[
          { IconComponent: CSS3Icon, title: 'CSS3' },
          { IconComponent: GitIcon, title: 'Git' },
          { IconComponent: HTML5Icon, title: 'HTML5' },
          { IconComponent: JavaScriptIcon, title: 'JavaScript' },
          { IconComponent: MaterialUIIcon, title: 'Material UI' },
          { IconComponent: MongoDBIcon, title: 'MongoDB' },
          { IconComponent: NodeJSIcon, title: 'Node.js' },
          { IconComponent: ReactIcon, title: 'React' },
          { IconComponent: TypeScriptIcon, title: 'TypeScript' },
        ].map((icon, index) => (
          <motion.div 
            key={index}
            variants={iconVariants}
            whileHover="hover"
            onMouseEnter={() => setHoveredIcon(icon.title)}
            onMouseLeave={() => setHoveredIcon('')}
            style={iconStyle as any}
          >
            {hoveredIcon === icon.title && (
              <div style={{ ...tooltipStyle as any, opacity: 1, visibility: 'visible' }}>{icon.title}</div> // Show tooltip
            )}
            <icon.IconComponent title={icon.title} style={{ width: '100%', height: '100%' }} />
          </motion.div>
        ))}
      </div>
    );
};

export default Toolbox;
