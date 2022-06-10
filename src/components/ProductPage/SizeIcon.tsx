import { Component } from "react";

interface IProps {
    sizeLetter: string
}

class SizeIcon extends Component<IProps>{
    render(){
        return(
            <div className = "SizeIcon">{this.props.sizeLetter}</div>
        )
    }
}

export default SizeIcon;

