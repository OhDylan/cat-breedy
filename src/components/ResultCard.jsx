import React, {useState, useEffect} from 'react';
import { Card, Col, Carousel, Typography } from 'antd';

import placeholderImage from '../assets/placeholder.jpg';

const { Text } = Typography;

const ResultCard = (result) => {
    const breed = result.result;
    const [thumbnail, setThumbnail] = useState([]);

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breed.id}&limit=100`)
            .then(res => res.json())
            .then(data => {
                if(data.length > 0)
                {
                    setThumbnail(data);
                }
                else
                {
                    setThumbnail([]);
                }
            })
            .catch(err => console.error(err))
    }, [breed]);

    return (
        <Col xs={24} sm={12} lg={8} key={breed.id} >
            
                <Card
                    style={{height: 600, overflow: "hidden", borderRadius: 15}}
                    cover={thumbnail.length > 0 ?
                        (<Carousel
                            lazyLoad={true}
                            slidesToShow= {1}
                            slidesToScroll= {1}
                            infinite={true}
                            arrows={true}
                            style={{backgroundColor: "black"}}
                        >
                            {thumbnail.map((image) => {
                                return (
                                        <div>
                                            <img src={image?.url } alt={breed.name} style={{height: 400, width: "100%"}}/>
                                        </div>
                                )
                            })}
                        </Carousel>) :
                        (<img src={placeholderImage} alt={breed.name} style={{height: 400, width: "100%"}} />)
                    } 
                >
                        <div style={{marginBottom: "1.5rem"}} ><Text strong style={{fontSize: "1.2rem"}}>{breed.name}</Text></div>
                        <p>Life Span: {breed.life_span}</p>
                        <p>Weight: {breed.weight?.imperial}</p>
                </Card>
            
        </Col>
    );
}

export default ResultCard;