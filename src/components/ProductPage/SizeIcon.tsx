import { Component } from "react";
import { connect } from "react-redux";
import { ActionTypes } from "../../store/rootReducer";
import { IStore } from "../../types";

interface IProps {
    sizeLetter: string,
    setSizeAtStore?: (s: string) => void
}

class SizeIcon extends Component<IProps>{
    render(){
        return(
            <div 
                className = "SizeIcon"
                onClick = { ()=> this.props.setSizeAtStore!(this.props.sizeLetter)}>{this.props.sizeLetter}</div>
        )
    }
}

const mapStateToProps = (state: IStore ) => ({
    
});
const dispatchAction = (dispatch: any) => {
    return {
        setSizeAtStore:(size: string)=> dispatch({
            type: ActionTypes.SELECT_SIZE,
            payload: size
        })
    }
}


export default connect(mapStateToProps, dispatchAction)(SizeIcon);

