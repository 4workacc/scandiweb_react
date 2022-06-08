import { Component } from "react";
import { connect } from "react-redux";
import { IStore } from "../../types";

interface IProps {
    curProductId?: number| null
}
class ProductPage extends Component<IProps> {
    render() {
        return (
            <div className="ProductPage">
                {"Product page" +this.props.curProductId}
            </div>
        )
    }
}

const mapStateToProps = (state: IStore) => ({
    curProductId: state.displayProductId
}) 

export default connect(mapStateToProps)(ProductPage);