/**
 * Created by AL383171 on 26/05/2017.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./Header.react');
var Tweet = require('./Tweet.react');

var StreamTweet = React.createClass({
    getInitialState: function () {
        console.log('[Snapterest] streamtweet 1: running getInitialState()');
        return {
            numberOfCharactersIsIncreasing: null,
            headerText: null
        }
    },
    componentWillReceiveProps: function (nextProps) {
        console.log('[Snapterest] StreamTweet 4. Running componentWillReceiveProps()');
        var currentTweetLength = this.props.tweet.text.length;
        var nextTweetLength = nextProps.tweet.text.length;
        var isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
        var headerText;
        this.setState({
            numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
        });
        if (isNumberOfCharactersIncreasing) {
            headerText = 'Number of characters is increasing';
        } else {
            headerText = 'Latest public photo from Twitter';
        }
        this.setState({
            headerText: headerText
        });
        window.snapterest.numberOfReceivedTweets++;

    },
    componentWillMount: function () {
        console.log('[Snapterest] StrreamTweet 2. Running componentWillMount()');
        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: 'Latest public photo from Twitter'
        });
        window.snapterest = {
            numberOfReceivedTweets: 1,
            numberOfDisplayedTweets: 1
        };
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        console.log('[Snapterest] StreamTweet:5. Running shouldComponentUpdate');
        return (nextProps.tweet.text.length > 1);
    },
    componentWillUpdate: function (nextProps, nextState) {
        console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
    },
    componentDidUpdate:function (nextProps,nextState) {
        console.log('[Snapterest] StreamTweet 7. Runninc componentDidUpdate');
    window.snapterest.numberOfDisplayedTweets++;
        },
    componentDidMount: function () {
        console.log('[Snapterest] StreamTweet: 8. Running componentWillUnMount()');
        delete window.snapterest;
    },
    render: function () {
        console.log('[Snapterest] StreamTweet:Running render()');
        return (
            <section>
                <Header text={this.state.headerText}/>
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection}
                />
            </section>
        );
    }
});

module.exports = StreamTweet;