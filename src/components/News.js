import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "Brashna Kasi",
      title:
        "America doesn't really care about cricket. Can Major League Cricket change that?",
      description:
        "The new league makes its debut near Dallas on Thursday when the Texas Super Kings play the LA Knight Riders. The league's backers hope to cultivate a new generation of U.S. cricketers.",
      url: "https://www.npr.org/2023/07/13/1187445629/major-league-cricket-debut-texas-history-sport",
      urlToImage:
        "https://media.npr.org/assets/img/2023/07/13/ap23193166972710_wide-83ac6baf7108a8a2d6ef64e40e3084c753b83936-s1400-c100.jpg",
      publishedAt: "2023-07-13T16:38:41Z",
      content:
        "The Kolkata Knight Riders' Andre Russell plays a shot during Indian Premier League cricket match in Kolkata on April 29. Russell is a player on Major League Cricket's Los Angeles Knight Riders.\r\nBika… [+3576 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "NPR",
      },
      author: null,
      title:
        "Pakistan to send its cricket team to participate in World Cup in India - foreign office - Reuters",
      description:
        "Pakistan to send its cricket team to participate in World Cup in India - foreign office  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L3Bha2lzdGFuLXNlbmQtaXRzLWNyaWNrZXQtdGVhbS1wYXJ0aWNpcGF0ZS13b3JsZC1jdXAtaW5kaWEtZm9yZWlnbi1vZmZpY2UtMjAyMy0wOC0wNi_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage:" https://www.reuters.com/resizer/Ugq5mPGuhki6UWdPMrLZhT1myFc=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HIPEPR3TKFPT7N6VFNPP43L5IE.jpg",
      publishedAt: "2023-08-06T14:25:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "NPR",
      },
      author: null,
      title:
        "Silkworm sashimi, cricket curry on menu as bugs make a comeback in Japan - Reuters",
      description:
        "Silkworm sashimi, cricket curry on menu as bugs make a comeback in Japan  Reuters",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiamh0dHBzOi8vd3d3LnJldXRlcnMuY29tL2xpZmVzdHlsZS9zaWxrd29ybS1zYXNoaW1pLWNyaWNrZXQtY3VycnktbWVudS1idWdzLW1ha2UtY29tZWJhY2stamFwYW4tMjAyMy0wNy0yNi_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-07-26T04:45:43Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
    {
      source: {
        id: "google-news",
        name: "Google News",
      },
      author: null,
      title:
        "Organizers of Brampton cricket tournament say city has fan base to support permanent facility - CBC.ca",
      description:
        "<ol><li>Organizers of Brampton cricket tournament say city has fan base to support permanent facility  CBC.ca\r\n</li><li>Global T20 cricket tournament returns after a four-year hiatus  The Globe and Mail\r\n</li><li>Global T20 cricket wants expansion to other ci…",
      url: "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiWGh0dHBzOi8vd3d3LmNiYy5jYS9uZXdzL2NhbmFkYS90b3JvbnRvL2JyYW1wdG9uLWdsb2JhbC1ndDIwLWNyaWNrZXQtdG91cm5hbWVudC0xLjY5Mjg4MjjSASBodHRwczovL3d3dy5jYmMuY2EvYW1wLzEuNjkyODgyOA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
      urlToImage: null,
      publishedAt: "2023-08-05T01:00:00Z",
      content:
        "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
        {this.state.articles.map((element) => {
         return <div className="col-md-4" key={element.url}>
            <NewsItem
              title={element.title.slice(0,40)} description={element.description.slice(0,80)}
              imgUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>
        })}
          
        </div>
      </div>
    );
  }
}

export default News;
