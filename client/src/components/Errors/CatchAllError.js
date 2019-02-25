import React from 'react';

class CatchAllError extends React.Component {

    constructor() {
        super();
        this.state = {
            error: null,
            info: null,
        };
    };

    componentDidCatch(error, info) {
        console.error('Error:', error);
        console.error('Info:', info);
        this.setState({error, info});
    };

    render() {
        return (
            this.state.error ?
                <h2 className="text-centered">
                    Argh, some unpredicted error occurred. Sorry about that.
                </h2>
                            :
                this.props.children
        );
    };
};

export default CatchAllError;