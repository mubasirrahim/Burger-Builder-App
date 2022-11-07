import React,{Component} from 'react';
import Toolbar from '../Navigation/Toolbar/toolbar';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Sidebar from '../Navigation/Sidebar/Sidebar';


class layout extends Component {
    state={
        showSidebar:false
    }

    sidebarClosedHandler=()=>{
        this.setState({showSidebar:false});
    }

    sidebarToggleHandler=()=>{
        this.setState(
            (prevState)=>{
                return{showSidebar:!prevState.showSidebar}
            }
        )
    }
    render(){
    return(
        <Auxiliary>
        <Toolbar clicked={this.sidebarToggleHandler}/>
        <Sidebar closed={this.sidebarClosedHandler}
        open={this.state.showSidebar}/>
        <main className={classes.Content}>
            {this.props.children}
        </main>
    </Auxiliary>

    )}
   
    };

export default layout;