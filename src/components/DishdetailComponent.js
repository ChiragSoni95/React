import React, { Component } from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle} from 'reactstrap';

class Dishdetail extends Component{
    constructor(props){
        super(props)
    }

    renderDish(dish){
        if(dish != null){
            return (
                <CardBody>
                    <CardTitle>{this.props.dishSelected.name}</CardTitle>
                    <CardText>{this.props.dishSelected.description}</CardText>
                </CardBody>
            )
        }
        else{
            return (
                <div></div>
            )
        }
    }

    renderComments(commentsArray){
        var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        if(commentsArray.length > 0){
            const comm = commentsArray.map((com) => {
                var d = new Date(com.date);
                return (
                    <div key={com.id}>
                        <ul className="list-unstyled">
                            <li>{com.comment}</li>
                            <li>-- {com.author} , {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</li>
                        </ul>
                    </div>
                );
            });

            return (
                <div className="container">
                    <h4>Comments</h4>
                    {comm}
                </div>
            );

        }else{
            return (
                <div></div>
            );
        }

    }

    render(){
        if(this.props.dishSelected != null){
            return (
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" object src={this.props.dishSelected.image} alt={this.props.dishSelected.name} />
                            {this.renderDish(this.props.dishSelected)}
                        </Card>
                    </div>
                    <div>
                        {this.renderComments(this.props.dishSelected.comments)}
                    </div>
                </div>
            )
        }else{
            return (
                <div></div>
            )
        }
    }
}

export default Dishdetail;
