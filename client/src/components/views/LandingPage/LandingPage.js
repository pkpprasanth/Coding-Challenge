import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { Card, Avatar, Col, Typography, Row,Icon,Spin} from 'antd';
import axios from 'axios';
import moment from 'moment';
import Popup from '../Popup/Popup'
import './new.css'
const { Title } = Typography;
const { Meta } = Card;
function LandingPage(props) {

    const [data, getalldata] = useState([])
    const [loading, setLoading] = useState(false)
    const [showBack, setShowBack] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
 
  
    function handleClick(data) {
        console.log("data",data)
        setIsOpen(!isOpen);
        setShowBack(data);
    }

    useEffect(() => {
        axios.get('http://universities.hipolabs.com/search?country=United+Kingdom')
            .then(response => {
                if (response.status==200) {
                    console.log("+++++",response.data)
                    const data=response.data
                    getalldata(data)
                    setLoading(true)
                } else {
                    alert('Failed to get Data')
                }
            })

            if(localStorage.getItem("userId")==null){
                console.log("Login First")
                props.history.push("/");
            }
    }, [])

    const renderCards = data.map((data, index) => {

 

        return <Col lg={4} md={2} xs={20} >
            <div   style={{padding:'2%'}}>
                <div className=" duration"
                    >
                    <Card  className="card" onClick={()=>handleClick(data)}>
                    <span>Name : {data.name}</span>                   
                    </Card>
                </div>
                {isOpen && <Popup
                        content={<>
                                <span>Name : {showBack.name}</span><br></br>           
                                <span>Domain : {showBack.domains[0]}</span> <br></br>                             
                                <span>Country : {showBack.country}</span>   <br></br>                           
                                <span>AlphaCode : {showBack.alpha_two_code}</span><br></br>                              
                                <span>WebSite : {showBack.web_pages[0]}</span>  <br></br>                            

                        </>}
                     handleClose={handleClick}
                    />}
                
            </div>
            
        </Col>

    })
    return (
        <div style={{  margin: '2rem auto' }}>
           <div >
             <Title level={2} > Countrys List </Title>
             
             {loading ?  <Row gutter={30}>{renderCards}</Row>:
             <div style={{position:'absolute',marginTop:"40%",marginLeft:"50%" }}>
             <Spin size="large" />
             </div>
             }
            </div>
        </div>
    )
}

export default LandingPage
