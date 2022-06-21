import { Component } from "react";

interface IProps {
    color: string,
    setColorAtStore?:(s: string) => void,
    isSelected?: boolean
}

class ColorIcon extends Component<IProps>{    
    render(){
        return(
            <div className = {"ColorIcon "+(this.props.isSelected? "selectedColorIcon":"")}>
                <div 
                    style={{width: "100%", height: "100%", backgroundColor:this.props.color}}
                    onClick = { ()=> this.props.setColorAtStore!(this.props.color)}
                    ></div>
            </div>
        )
    }
}

export default ColorIcon;

