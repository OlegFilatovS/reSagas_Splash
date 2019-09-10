import React, { Component } from 'react';
import {connect} from "react-redux";
import * as actions from '../../actions';
import './styles.css';
import {bindActionCreators} from "redux";

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {


    componentDidMount() {
        fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
            .then(res => res.json())
            .then(images => {
                this.setState({
                    images,
                });
            });
    }

    render() {
        const { images } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}

                    <a onClick={this.props.loadImages}> Load More Images </a>

                </section>
            </div>
        );
    }
}

const mapStateToProps = ({ isLoading, images, error }) => ({                         //here goes the state
    isLoading,
    images,
    error,
});

const mapDispatchToProps = dispatch => ({
   loadImages: () => dispatch(actions.loadImages())
});                                                        //here goes the actions

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
