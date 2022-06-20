import { Component } from "react";

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


export default SizeIcon;

