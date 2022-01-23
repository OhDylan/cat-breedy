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
                        <Text style={{fontSize:"1.2rem"}} strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
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

export default LandingPage
