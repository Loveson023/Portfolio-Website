import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import Navbar from "../../components/Home/Navbar";
// import Particles from 'react-tsparticles';
import Particle from "../../components/Home/Particle";
import Footer from "../../components/Home/Footer";
export class News extends Component {

  articles = [
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Edward Helmore",
      title:
        "Man dies in Death Valley as California national park swelters in extreme heat - The Guardian US",
      description:
        "High temperature ‘may have been a factor’ in death of 71-year-old in Golden Canyon area, park officials say",
      url: "https://www.theguardian.com/us-news/2023/jul/20/death-valley-visitor-dies-extreme-heat-california",
      urlToImage:
        "https://i.guim.co.uk/img/media/5dfaaa0a98dc0e8511d20692b97293e6d6de9e7d/0_182_5472_3283/master/5472.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=81b0c47f2ea1fafe56dc13ef4e96f4cc",
      publishedAt: "2023-07-20T16:13:00Z",
      content:
        "A 71-year-old man collapsed and died in Death Valley on Tuesday as temperatures in the valley the point of lowest elevation in North America as well as one of the hottest places in the world reached … [+2157 chars]",
    },
    {
      source: {
        id: null,
        name: "SFGate",
      },
      author: "Gabe Lehman",
      title:
        "Early San Francisco 'Barbie' audiences go wild for the film - SFGATE",
      description:
        'If the clearly biased San Francisco crowd was any indication, the "Barbie" movie will live up to its sky-high critical and commercial expectations.',
      url: "https://www.sfgate.com/local/article/barbie-movie-early-san-francisco-audience-response-18209044.php",
      urlToImage:
        "https://s.hdnux.com/photos/01/33/57/77/24051660/3/rawImage.jpg",
      publishedAt: "2023-07-20T16:05:46Z",
      content:
        "The Barbie movie, along with double feature candidate Oppenheimer, hits theaters this weekend in one of the most anticipated film debuts in recent memory. But a few lucky San Francisco fans got a sne… [+2774 chars]",
    },
    {
      source: {
        id: null,
        name: "Cyclingnews.com",
      },
      author: "Stephen Farrand",
      title:
        "Tour de France stage 18 Live: The sprinters get their chance after anarchy in the Alps - Cyclingnews",
      description:
        "Four-rider attack defeats the sprinters in pursuit race to Bourg-en-Bresse",
      url: "https://www.cyclingnews.com/races/tour-de-france-2023/stage-18/live-report/",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/VYRac52xmN2n9yXFunK7qB-1200-80.jpg",
      publishedAt: "2023-07-20T16:04:34Z",
      content:
        "2023-07-20T16:41:32.270ZThanks for joining us today for our unique live coverage. \r\nJoin us on Friday for full live coverage of stage 19 from Moirans-en-Montagne to Poligny.\r\nThe 172km hilly stage se… [+26834 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Hamdi Alkhshali, Celine Alkhaldi, Aqeel Najim",
      title:
        "Protesters storm Swedish embassy in Iraq over Quran burning plan - CNN",
      description:
        "Iraqi security forces dispersed hundreds of demonstrators who stormed the main gates of the Swedish embassy in the Iraqi capital of Baghdad, in response to police in Stockholm sanctioning another planned burning of the Muslim holy book, the Quran.",
      url: "https://www.cnn.com/2023/07/19/middleeast/iraq-swedish-embassy-protest-quran-burning-intl-hnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230719193029-03-baghdad-swedish-embassy-protest-0720.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-07-20T15:27:00Z",
      content:
        "Iraqi security forces dispersed hundreds of demonstrators who stormed the main gates of the Swedish embassy in the Iraqi capital of Baghdad, in response to police in Stockholm sanctioning another pla… [+4594 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=11c9354a7f0d4b7897d2de12fa668cc9";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url =
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=11c9354a7f0d4b7897d2de12fa668cc9&page=${this.state.page + 1}&pageSize=20";
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  handlePrevClick = async () => {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=11c9354a7f0d4b7897d2de12fa668cc9&page=${this.state.page-1}&pageSize=20";
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  render() {
    return (
      <>
        <Particle />
        <Navbar />
        <div className="container my-3">
          <h1 className="text-center text-white">Top Headlines</h1>
          {this.state.loading && <Spinner />}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={element.title}
                      discription={element.description}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
          </div>
          <div className="container d-flex justify-content-between my-4">
            <button
              disabled={this.state.page <= 1}
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
            >
              {" "}
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default News;
