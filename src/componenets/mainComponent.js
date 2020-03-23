import React from "react";

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];



export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            allquotes: "",
            quotetext: "",
            author: "",
            error: null

        }

        this.newQuote = this.newQuote.bind(this);
        this.getRandomQuote = this.getRandomQuote.bind(this);
        this.setRandomQuote = this.setRandomQuote.bind(this);
        this.customQuote = this.customQuote.bind(this);

    }

    componentDidMount() {
        var Url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"

        fetch(Url)
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(response => {
                var quotesData = response.quotes
                console.log(quotesData)
                var randomQuote = quotesData[Math.floor(Math.random() * quotesData.length)];
                this.setState({
                    allquotes: quotesData,
                    quotetext: randomQuote.quote,
                    author: randomQuote.author
                })
            })
            .catch(error => {
                this.setState({
                    allquotes: "",
                    quotetext: error.message,
                    author: "Server",
                    error: error
                })
                var intent = prompt("Would You like to Enter Custom Quote")
                if (intent === "yes" || "Yes" || "YES"){
                this.customQuote();
                }
            }

            );
    }
    customQuote() {
        var myQuote = prompt("Enter Your Custom Quote");
        var myName = prompt("Enter the custom author name");
        if (myQuote == "" || myQuote == undefined) {
            alert("No Quote recieved")

        }
        else {
            this.setState({
                quotetext: myQuote,
                author: myName,
            })
        }
    }

    getRandomQuote(quotesData) {
        return quotesData[Math.floor(Math.random() * quotesData.length)];
    }

    setRandomQuote() {
        console.log("set Random Quote Triggered")
        var quotesData = this.state.allquotes
        var randomQuote = this.getRandomQuote(quotesData);
        this.setState({
            quotetext: randomQuote.quote,
            author: randomQuote.author
        })
    }

    newQuote(allquotes) {
        console.log("NewQuote Triggered")
        if (this.state.error != null) {
            console.log(this.state.error.message)
            this.customQuote();
        }
        else{
            this.setRandomQuote(allquotes)
        }
        var color = Math.floor(Math.random() * colors.length);
        document.body.style.backgroundColor = colors[color];
        document.getElementById("quote-text").style.color = colors[color];
        document.getElementById("new-quote").style.backgroundColor = colors[color];
        document.getElementById("tumblr-quote").style.backgroundColor = colors[color];
        document.getElementById("tweet-quote").style.backgroundColor = colors[color];



    }

    render() {
        return (
            <div id="wrapper">
                <div id="quote-box">
                    <div id="quote-text">
                        <div className="quote-text">
                            <i className="fa fa-quote-left"> </i><span id="quote-text">{this.state.quotetext}</span>
                        </div>
                    </div>
                    <div className="quote-author">
                        -- <span id="author">{this.state.author}</span>
                    </div>
                    <div className="buttons-div">
                        <a className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
                            <i className="fa fa-tumblr"></i>
                        </a>
                        <button className="button" id="new-quote" onClick={this.newQuote}>New quote</button>
                    </div>
                </div>
                <div class="footer"> by <a href="https://facebook.com/hero.huzaifahabib">Hero</a></div>

            </div>



        )

    }
}

export default Main;