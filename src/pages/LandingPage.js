import React from 'react'
import { Row, Col, Typography, Space, Button } from 'antd';
import LandingSVG from '../assets/cat_human.svg';

const { Title, Text } = Typography;

const LandingPage = () => {
    return (
        <div style={{width:"100vw"}} >
            <Row align='middle'>
                <Col xs={0} sm={2}></Col>
                <Col xs={24} sm={10} style={{padding: 30}} >
                    <Space direction="vertical" style={{width: "80%"}} >
                        <Title>Cat Breedy</Title>
                        <Text style={{fontSize:"1.2rem"}} strong>This is an app to search for cat breeds. The tech stacks are based on React and Ant Design components library. It is based on <strong>The Cat API</strong>(<a target="_blank" rel="noreferrer" href="https://thecatapi.com/" >The Cat API - Cats as a Service</a>). You may find the source code here: <a target="_blank" rel="noreferrer" href="https://github.com/OhDylan/cat-breedy" >Github - Cat Breedy</a>. Please contact me if any issue is found, or raise a ticket in the Github repository.</Text>
                        <Button shape='round' size='large' href='/search'style={{width:120, height: "auto", verticalAlign: "middle", fontSize: "1.2rem", fontWeight: "bolder", margin: "10px 0"}} >Explore</Button>
                    </Space>
                </Col>
                <Col xs={24} sm={12}>
                    <img src={LandingSVG} alt="Landing" style={{padding: 10, maxWidth: "100%"}} />
                </Col>
            </Row>
        </div>
    )
}

export default LandingPage;
