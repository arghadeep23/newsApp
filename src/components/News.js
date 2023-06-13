import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'

export class News extends Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NexusNews`
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    static defaultProps = {
        country: "in",
        pageSize: 5,
        category: "all categories"
    }
    async componentDidMount() {
        this.props.setProgress(10);
        console.log('cdm');
        const { country, pageSize, category } = this.props;
        console.log('unchanged')
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.props.apiKey}&page=1&pageSize=${pageSize}`;
        if (this.props.searchKeyword) {
            url += `&q=${this.props.searchKeyword}`;
            console.log('Changed url');
        }
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(60)
        let newTotalPage = Math.ceil(parsedData.totalResults / this.props.pageSize);
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalPages: newTotalPage, loading: false, totalResults: parsedData.totalResults });
        this.props.setProgress(100);
    }
    async updateNews() {
        this.props.setProgress(10);
        const { country, pageSize, category } = this.props;
        console.log('changed')
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${pageSize}`;
        if (this.props.searchKeyword) {
            url += `&q=${this.props.searchKeyword}`;
            console.log('Changed url');
        }
        this.setState({ loading: true })
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(60);
        let newTotalPage = Math.ceil(parsedData.totalResults / this.props.pageSize);
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalPages: newTotalPage, loading: false, totalResults: parsedData.totalResults });
        this.props.setProgress(100);
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.searchKeyword !== this.props.searchKeyword) {
            await this.updateNews();
        }
    }
    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 });
        const { country, pageSize, category } = this.props;
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${pageSize}`;
        if (this.props.searchKeyword) {
            url += `&q=${this.props.searchKeyword}`;
            console.log('Changed url');
        }
        let data = await fetch(url);
        let parsedData = await data.json();
        let newTotalPage = Math.ceil(parsedData.totalResults / this.props.pageSize);
        console.log(parsedData);
        this.setState({ articles: this.state.articles.concat(parsedData.articles), totalPages: newTotalPage, totalResults: parsedData.totalResults });
    };
    render() {
        console.log('render')
        return (
            <div className="container my-3">
                <h2 className="text-center" style={{ margin: '35px 0px' }}>NexusNews - Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} newsUrl={element.url} imageUrl={element.urlToImage ? element.urlToImage : "https://www.openpr.com/wiki/images/56-400x300_4851"} author={element.author ? element.author : "Anonymous"} publishedAt={element.publishedAt ? element.publishedAt.slice(0, 10) : "N.A"} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark"><FontAwesomeIcon icon={faArrowLeftLong} /> Previous</button>
                    <button disabled={this.state.page >= this.state.totalPages} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next <FontAwesomeIcon icon={faArrowLeftLong} rotation={180} /></button>
                </div> */}

            </div>
        )
    }
}

export default News