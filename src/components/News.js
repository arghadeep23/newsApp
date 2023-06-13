import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'
export class News extends Component {
    constructor() {
        super();
        console.log('constructor');
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
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
        console.log('cdm');
        const { country, pageSize, category } = this.props;
        const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=afb32775f247499f8941d043a10c82e2&page=1&pageSize=${pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        let newTotalPage = Math.ceil(parsedData.totalResults / this.props.pageSize);
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalPages: newTotalPage, loading: false});
    }
    handlePrevClick = async () => {
        console.log('Previous');
        const { country, pageSize, category } = this.props;
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=afb32775f247499f8941d043a10c82e2&page=${this.state.page - 1}&pageSize=${pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, page: this.state.page - 1, loading: false });
    }
    handleNextClick = async () => {
        console.log('Next');
        const { country, pageSize, category } = this.props;
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=afb32775f247499f8941d043a10c82e2&page=${this.state.page + 1}&pageSize=${pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, page: this.state.page + 1, loading: false });
    }
    // async handleClick(add){
    //     const { country, pageSize, category } = this.props;
    //     let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=49a7d9961bd74a909ee04c8b6dea5247&page=${this.state.page + add}&pageSize=${pageSize}`;
    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     this.setState({ articles: parsedData.articles, page: this.state.page + add, loading: false });
    // }
    render() {
        console.log('render')
        return (
            <div className="container my-3">
                <h2 className="text-center" style={{margin:'35px 0px'}}>NexusNews - Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} newsUrl={element.url} imageUrl={element.urlToImage ? element.urlToImage : "https://www.openpr.com/wiki/images/56-400x300_4851"} author={element.author?element.author:"Anonymous"} publishedAt={element.publishedAt?element.publishedAt.slice(0,10):"N.A"} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark"><FontAwesomeIcon icon={faArrowLeftLong} /> Previous</button>
                    <button disabled={this.state.page >= this.state.totalPages} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next <FontAwesomeIcon icon={faArrowLeftLong} rotation={180} /></button>
                </div>

            </div>
        )
    }
}

export default News