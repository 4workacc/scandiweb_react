import { Component } from "react";
import { connect } from "react-redux";
import { ActionTypes } from "../../store/rootReducer";
import { IStore } from "../../types";

interface IProps {
    color: string,
    setColorAtStore?:(s: string) => void
}

class ColorIcon extends Component<IProps>{    
    render(){
        return(
            <div className = "ColorIcon">
                <div 
                    style={{width: "100%", height: "100%", backgroundColor:this.props.color}}
                    onClick = { ()=> this.props.setColorAtStore!(this.props.color)}
                    ></div>
            </div>
        )
    }
}

const mapStateToProps = (state: IStore ) => ({
    
});
const dispatchAction = (dispatch: any) => {
    return {
        setColorAtStore:(size: string)=> dispatch({
            type: ActionTypes.SELECT_COLOR,
            payload: size
        })
    }
}


export default connect(mapStateToProps, dispatchAction) (ColorIcon);

