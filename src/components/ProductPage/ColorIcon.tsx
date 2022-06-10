import { Component } from "react";

interface IProps {
    color: string
}

class ColorIcon extends Component<IProps>{
    render(){
        return(
            <div className = "ColorIcon">
                <div style={{width: "100%", height: "100%", color: this.props.color}}></div>
            </div>
        )
    }
}

export default ColorIcon;

