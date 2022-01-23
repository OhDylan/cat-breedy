import React, { useState, useEffect } from 'react';
import { Row, Col, Pagination, Result, Spin } from 'antd';

import SearchBar from '../components/SearchBar';
import ResultCard from '../components/ResultCard';
import FilterMenu from '../components/FilterMenu';
import useDebounce from '../hooks/useDebounce';

const SearchPage = () => {

    const PAGE_SIZE = 9;

    const [options, setOptions] = useState([]);
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 1000);
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [minIndex, setMinIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {     
        const listAllBreeds = () => {
            setIsLoading(true)
            fetch("https://api.thecatapi.com/v1/breeds")
            .then(result => result.json())
            .then(data => {
                setResults(data);
                setMinIndex(0);
                setMaxIndex(PAGE_SIZE);
                setIsLoading(false);
            })
            .catch(err => console.error(err))
        }
        listAllBreeds();
    }, []);

    useEffect(() => {
        if(query?.length > 2){
            const fetchResults = () => {
                fetch(`https://api.thecatapi.com/v1/breeds/search?q=${query}`)
                .then(result => result.json())
                .then(data => {
                    let parsedResults = data.map((result) => {
                        return {
                            value: result.name,
                            label: (
                                <div onClick={e => searchBreed(e.target.innerText)} >{result.name}</div>
                            )
                        }
                    })
                    setOptions(parsedResults);
                })
                .catch(err => console.error(err))
            }
            fetchResults();
        }
    }, [debouncedQuery]);

    const searchBreed = async (value) => {
        setIsLoading(true);
        try {
            const result = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${value}`);
            const data = await result.json();
            setResults(data);
            setIsLoading(false);
        } catch (err) {
            return console.error(err);
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setMinIndex((page - 1) * PAGE_SIZE);
        setMaxIndex(page * PAGE_SIZE);
    }

    const resetPageNum = () => {
        setCurrentPage(1);
        setMinIndex(0);
        setMaxIndex(PAGE_SIZE);
    }

    const sortByName = () => {
        setIsLoading(true);
        let sortedResults = [...results].sort((a, b) => {
            if(a.name < b.name) return -1;
            else if(a.name > b.name) return 1;
            return 0;
        });
        setResults(sortedResults);
        resetPageNum();
        setIsLoading(false);
    }

    const convertStringToIntAndCompare = (a, b) => {
            let aArray = a.split(" - ");
            let aLower = parseInt(aArray[0]);
            let aHigher = parseInt(aArray[1]);
            let bArray = b.split(" - ");
            let bLower = parseInt(bArray[0]);
            let bHigher = parseInt(bArray[1]);
            let aAverage = (aHigher + aLower) / 2;
            let bAverage = (bHigher + bLower) / 2;
            return aAverage - bAverage;
    }

    const sortByLifeSpan = () => {
        setIsLoading(true);
        let sortedResults = [...results].sort((a, b) => {
            if(a.life_span && b.life_span)
            {
                return convertStringToIntAndCompare(a.life_span, b.life_span);
            }
            return 0;
        });
        setResults(sortedResults);
        resetPageNum();
        setIsLoading(false);
    }

    const sortByWeight = () => {
        setIsLoading(true);
        let sortedResults = [...results].sort((a, b) => {
            if(a.weight.imperial && b.weight.imperial)
            {   
                return convertStringToIntAndCompare(a.weight.imperial, b.weight.imperial);
            }
            return 0;
        });
        setResults(sortedResults);
        resetPageNum();
        setIsLoading(false);
    }

    return (
        <div style={{overflow: "hidden"}} >
            <Row justify='center' style={{marginTop: 10, marginBottom: 30}} >
                <Col xs={0} sm={8}></Col>
                <Col xs={12} sm={6}>
                    <SearchBar 
                        options={options}
                        setQuery={setQuery}
                        search={searchBreed}
                    />
                </Col>
                <Col xs={6} sm={6}></Col>
                <Col xs={4} sm={2}>
                    <FilterMenu
                        sortByName={sortByName}
                        sortByLifeSpan={sortByLifeSpan}
                        sortByWeight={sortByWeight}
                    />
                </Col>
            </Row>
            
            { results.length > 0 && (<Row gutter={[32,16]} style={{height: "80vh", overflowX: "hidden"}} >
                {!isLoading &&  results?.map((result, index) => (
                     index >= minIndex && index < maxIndex && 
                        (<ResultCard 
                            result={result}
                        />)
                ))}
            </Row>)}
            {isLoading && <Row justify='center' style={{height: "80vh", overflowX: "hidden"}}><Spin style={{marginTop: "30vh"}} size='large' /></Row>}
            {!isLoading && results.length === 0 && (
                <Row justify='center' >
                    <Result
                        status="404"
                        title="No results found."
                        style={{height: "80vh"}}
                    />
                </Row>
            )}
            <Row justify='center' style={{marginTop: 50}}>
                <Pagination
                    pageSize={PAGE_SIZE}
                    current={currentPage}
                    total={results.length}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                />
            </Row>
        </div>
    )
}

export default SearchPage;