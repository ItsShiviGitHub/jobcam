import React from 'react';
import Button from '@mui/material/Button';

const NewButton = ({ children, onClick, backColor, ...props }) => {
    const handleHover = (event) => {
        event.target.classList.add('hovered');
    };

    const handleMouseOut = (event) => {
        event.target.classList.remove('hovered');
    };

    return (
        <Button
            {...props}
            type='submit'
            sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '0px',
                ':hover': {
                    '&::after': {
                        transform: 'scaleY(1)',
                    },
                    '&::before': {
                        transform: 'scaleY(1)',
                    },
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '100%',
                    border: '20px',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.3s ease',
                },
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '0px',
                    backgroundColor: backColor,
                }
            }}
            onClick={onClick}
            onMouseOver={handleHover}
            onMouseOut={handleMouseOut}
        >
            {children}
        </Button>
    );
};

export default NewButton;
