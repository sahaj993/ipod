import React from 'react';

class Menu extends React.Component {
    render() {
        return (
            <div className="App">
                <div className='container'>
                    <div className='container-circle'>
                        <div className='menu' />MENU
                        <div className='reverse' style={ style.reverse }/><img alt='rev' src='https://www.flaticon.com/svg/static/icons/svg/1073/1073804.svg' />
                        <div className='forward' /><img alt='for' src='https://www.flaticon.com/svg/static/icons/svg/1073/1073796.svg' />
                        <div className='play' /><img alt='play' src='https://www.flaticon.com/svg/static/icons/svg/1073/1073777.svg' />
                        <div className='circle' />
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    reverse: {
        marginTop: 65
    }
}

export default Menu;