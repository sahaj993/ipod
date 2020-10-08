import React from 'react';
// import ZingTouch from 'zingtouch';

class Menu extends React.Component {
    // mainMenu() {
    //     var conatinerElement = document.getElementsByClassName('container-circle');
    //     var activeRegion = ZingTouch.Region(conatinerElement);
    //     var childElement = document.getElementsByClassName('reverse');
    //     console.log('hello');
    // }
    render() {
        return (
            <div className="App">
                <div className='container' style={style.container}>
                    <div className='container-circle' style={style.containerCircle} onClick={this.mainMenu}>
                        <div className='menu' style={style.menu} />MENU
                        <div className='reverse' />
                        <img
                            style={style.reverse}
                            alt='reverse'
                            src='https://www.flaticon.com/svg/static/icons/svg/1073/1073804.svg'
                        />
                        <div className='forward' />
                        <img
                            style={ style.forward }
                            alt='forward'
                            src='https://www.flaticon.com/svg/static/icons/svg/1073/1073796.svg'
                        />
                        <div className='play' />
                        <img
                            style={ style.play }
                            alt='play'
                            src='https://www.flaticon.com/svg/static/icons/svg/1073/1073777.svg'
                        />
                        <div className='circle' style={ style.circle }/>
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    container: {
        margin: 'auto',
        backgroundColor: '#80808087',
        height: 150,
        width: 150
    },
    containerCircle: {
        position: 'relative',
        marginLeft: 10,
        backgroundColor: 'white',
        color: '#80808087',
        height: 150,
        width: 130,
        borderRadius: '50%',
    },
    menu: {
        marginTop: 50
    },
    reverse: {
        position: 'absolute',
        top: 65,
        right: 8
    },
    forward: {
        position: 'absolute',
        top: 65,
        left: 8
    },
    play: {
        position: 'absolute',
        top: 120,
        left: 50
    },
    circle: {
        position: 'absolute',
        top: 44,
        left: 37,
        backgroundColor: '#80808087',
        height: 60,
        width: 54,
        borderRadius: '50%'
    }
}

export default Menu;