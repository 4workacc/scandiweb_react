import { Component } from "react";
import { connect } from "react-redux";
import { ActionTypes } from "../../store/rootReducer";
import { IStore } from "../../types";

interface IProps {
    selectedSize?: string | null,
    sizeLetter: string,
    setSizeAtStore?: (s: string) => void
    isSelected?: boolean
}

class SizeIcon extends Component<IProps>{
    render(){
        return(
            <div 
                className = {"SizeIcon " + (this.props.isSelected? "selectedSizeIcon" :"") }
                onClick = { ()=> this.props.setSizeAtStore!(this.props.sizeLetter)}>{this.props.sizeLetter}</div>
        )
    }
}

const mapStateToProps = (state: IStore ) => ({
    selectedSize: state.selectedSize 
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

