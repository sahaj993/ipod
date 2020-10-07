import React from 'react';

class Menu extends React.Component {
    mainMenu () {
        console.log('hello');
    }
    revSong () {
        console.log('test');
    }
    forSong () {
        console.log('forward');
    }
    playSong () {
        console.log('play');
    }
    render() {
        return (
            <div className="App">
                <div className='container'>
                    <div className='container-circle'>
                        <div className='menu' onClick = { this.mainMenu }/>MENU
                        <div className='reverse' style={style.reverse} />
                        <img
                            alt='reverse'
                            src='https://www.flaticon.com/svg/static/icons/svg/1073/1073804.svg'
                            onClick = { this.revSong }
                        />
                        <div className='forward' />
                        <img 
                        alt='forward' 
                        src='https://www.flaticon.com/svg/static/icons/svg/1073/1073796.svg' 
                        onClick = { this.forSong } 
                        />
                        <div className='play'/>
                        <img 
                        alt='play' 
                        src='https://www.flaticon.com/svg/static/icons/svg/1073/1073777.svg' 
                        onClick = { this.playSong }
                        />
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