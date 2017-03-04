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

            <div className='background2'>
                <div className='comments'>
                    <Comments data={ideas} className='comments'/> {this.state.inputsVisible
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
        txt: 'Everyone will survive!'
    }, {
        usr: 'Antonidas',
        txt: 'ALL FOR ONE!'
    }, {
        usr: 'Sage Truthbearer',
        txt: 'Death shall reign'
    }
];
