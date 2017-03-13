import React, {Component} from 'react';
import AllComments from './AllComments';
import Comments from './Comments';

export default class CommentButton extends Component {
    constructor() {
        super();
        this.state = {
            inputsVisible: false,
            buttonText: "Write Comment"
        };
    }

    onClick = () => {
        this.setState({
            inputsVisible: !this.state.inputsVisible,
            buttonText: !this.state.buttonText
        });
    }
    render() {
        let buttonText = "Delete Ideas and form";
        if (this.state.buttonText) {
            buttonText = "Write Your Ideas"
        }

        return (

            <div >
                <div>
                  {this.state.inputsVisible
                        ? <AllComments/>
                        : null}
                    <div onClick={this.onClick}>
                        <button>
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

var ideas = [
    {
        usr: 'Medivh',
        value: 'Everyone will survive!'
    }, {
        usr: 'Antonidas',
        value: 'ALL FOR ONE!'
    }, {
        usr: 'Sage Truthbearer',
        value: 'Death shall reign'
    }
];
