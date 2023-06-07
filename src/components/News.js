import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
    constructor() {
        super();
        console.log('constructor');
        this.state = {
            articles: [],
            loading:false,
            page:1
        }
    }
    handlePrevClick=async ()=>{
        console.log('Previous');
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=49a7d9961bd74a909ee04c8b6dea5247&page=${this.state.page-1}&pageSize=20`;
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles,page:this.state.page-1});
    }
    handleNextClick=async ()=>{
        console.log('Next');
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=49a7d9961bd74a909ee04c8b6dea5247&page=${this.state.page+1}&pageSize=20`;
        let data=await fetch(url);
        let parsedData=await data.json();
        this.setState({articles:parsedData.articles,page:this.state.page+1});
    }
    async componentDidMount(){
        console.log('cdm');
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=49a7d9961bd74a909ee04c8b6dea5247&page=1&pageSize=20`;
        let data=await fetch(url);
        let parsedData=await data.json();
        let newTotalPage=Math.ceil(parsedData.totalResults/20);
        console.log(parsedData);
        this.setState({articles:parsedData.articles,totalPages:newTotalPage});
    }
    render() {
        console.log('render')
        return (
            <div className="container my-3">
                <h2 className="text-center">SendNewwzs - Top Headlines</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} newsUrl={element.url} imageUrl={element.urlToImage?element.urlToImage:"https://www.openpr.com/wiki/images/56-400x300_4851"}/>
                            </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between"> 
                    <button disabled={this.state.page<=1} type="button" onClick={this.handlePrevClick} className="btn btn-dark">&larr; Previous</button>
                    <button disabled={this.state.page>=this.state.totalPages} type="button" onClick={this.handleNextClick} className="btn btn-dark">Next &rarr;</button>
                </div>
                
            </div>
        )
    }
}

export default News