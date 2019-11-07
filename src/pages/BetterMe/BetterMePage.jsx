/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable dot-notation */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable indent */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState, Fragment, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Badge, CardColumns, Card, Row, Col, Image, ListGroup, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import './BetterMePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faPlus, faInbox, faReceipt } from '@fortawesome/free-solid-svg-icons';
import { FloatingButton } from '../../components/Group/Group.style';
import ReactEcharts from 'echarts-for-react';

import BarChart from '../../components/BetterMe/BarChart';
import MyRequestFeedbackModal from '../../components/BetterMe/MyRequestFeedbackModal';
import MySendFeedbackModal from '../../components/BetterMe/MySendFeedbackModal';
import FeedbackRequestModal from '../../components/BetterMe/FeedbackRequestModal';
import SendFeedbackModal from '../../components/BetterMe/SendFeedbackModal';
import RequestownFeedbackModal from '../../components/BetterMe/RequestownFeedbackModal';
import SentFeedbacksModal from '../../components/BetterMe/SentFeedbacksModal';
import ReceivedFeedbacksModal from '../../components/BetterMe/ReceivedFeedbacksModal';
import * as Actions from '../../actions/betterme-actions';
import { changeNavTitle, changeNavMenu } from '../../actions/common';
import { StickyNav } from '../../components/Header/GroupHeader';

const BetterMePage = (props) => {
    const [showMyRequestFeedbackModal, setshowMyRequestFeedbackModal] = useState(false);
    const [showSendMyFeedbackModal, setshowSendMyFeedbackModal] = useState(false);
    const [showFeedbackModal, setshowFeedbackModal] = useState(false);
    const [showSendFeedbackModal, setshowSendFeedbackModal] = useState(false);
    const [showOwnRequestFeedbackModal, setshowOwnRequestFeedbackModal] = useState(false);
    const [showSentFeedbacksModal, setshowSentFeedbacksModal] = useState(false);
    const [showReceivedFeedbacksModal, setshowReceivedFeedbacksModal] = useState(false);
    const [userfeedbackobj, setuserfeedbackobj] = useState({});
    const [selectedNav, setselectedNav] = useState('received');
    const [receivedFeedback, setreceivedFeedback] = useState([]);
    const [CompitenciesList, setCompitenciesList] = useState(undefined);
    const [pieupdated, setpieupdated] = useState(false);
    const PieLegend = [{ name: 'You Rock', value: '#53C7E6' }, { name: 'Cool', value: '#EEDB1E' }, { name: 'Lets work on this', value: '#F3ACD1' }];
    const pieArray = [];
    const COLORS = [];
    const UpdatedFeedbackList = [];
    const analyticsdiv = useRef();
    const rerenderdiv = useRef();
    const ReceivedListStyle = {
        width: '675px',
        height: 'auto'
    };

    let ReceivedFeedbackList = <></>;
    // let SentFeedbackList = <></>;
    let NewCompitenciesList = <></>;
    let EmployeeRatedList = [];
    const AllFeedbacks = [];
    const xAxisLineData = [];
    const seriesData = [];
    let pieces = [];
    let feedbackcounts = 0;

    const {
        setcompitencyRating,
        getreceivedfeedbacklist,
        totalfeedbacks,
        FeedbackRequests,
        mainreceivedList,
        compitencyRating,
        receivedFeedbackList,
        employees
    } = props;

    useEffect(() => {
        const { changeNavTitle, changeNavMenu } = props;
        const menus = [];
        const titleSettings = {
            title: 'BetterMe',
            icon: '/assets/icons/improvement.png'
        };

        changeNavTitle(titleSettings);
        changeNavMenu(menus);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (receivedFeedbackList.length === 0) {
            getreceivedfeedbacklist();
        }
    }, [receivedFeedbackList, getreceivedfeedbacklist]);

    useEffect(() => {
        if (pieupdated) {
            setcompitencyRating([]);
        }
    }, [pieupdated, setcompitencyRating]);

    if (receivedFeedbackList.length > 0) {
        const FeedbackRating = [];
        receivedFeedbackList.map((receive) => {
            const { feedbacks, img, name } = receive;
            if (feedbacks.length > 0) {
                feedbacks.map((feedback) => {
                    FeedbackRating.push(feedback.icon);
                });
                EmployeeRatedList.push({ name, img, feedbacks });
            }
        });

        let valueOccurance = {};
        if (FeedbackRating !== undefined) {
            valueOccurance = FeedbackRating.reduce((obj, b) => {
                obj[b] = ++obj[b] || 1;
                return obj;
            }, {});
        }

        let keyName = 'You Rock';
        for (const [key, value] of Object.entries(valueOccurance)) {
            if (key === 'cap') {
                keyName = 'Lets work on this';
            } else if (key === 'medal') {
                keyName = 'Cool';
            } else {
                keyName = 'You Rock';
            }

            const pieObj = {
                name: keyName,
                value
            };
            if (key === 'star') {
                COLORS.push('#53C7E6');
            } else if (key === 'cap') {
                COLORS.push('#EEDB1E');
            } else {
                COLORS.push('#F3ACD1');
            }
            pieArray.push(pieObj);
        }

        if (compitencyRating.length === 0) {
            props.setcompitencyRating(pieArray);
        }

        if (compitencyRating.length > 0) {
            compitencyRating.map((rating) => {
                let rateColor = '#F3ACD1';
                if (rating.name === 'You Rock') {
                    rateColor = '#53C7E6';
                } else if (rating.name === 'Lets work on this') {
                    rateColor = '#EEDB1E';
                } else {
                    rateColor = '#F3ACD1';
                }
                const ratingObj = { value: rating.value, color: rateColor };
                pieces.push(ratingObj);
                feedbackcounts = feedbackcounts +  rating.value;
            });
        }
    }

    let feedbackData = [];
    totalfeedbacks.map((feedback) => {
        feedbackData.push(feedback.name.slice(0,5));
    });

    const baroption = {
        color: ['#53C7E6', '#EEDB1E', '#F3ACD1'],
        yAxisindex: '5',
        tooltip : {
            trigger: 'axis',
            axisPointer : {            
                type : 'shadow'        
            }
        },
        legend: {
            data: ['You Rock','Work','Cool']
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '1%',
            containLabel: true
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data: feedbackData
        },
        series: [
            {
                name: 'You Rock',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        color: '#000'
                    }
                },
                data: [5,10,15,20,25,30,35],
                barMaxWidth: '30%'
            },
            {
                name: 'lets work on this',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        color: '#000'
                    }
                },
                data: [7,10,17,20,27,34,38,45,50],
                barMaxWidth: '30%'
            },
            {
                name: 'Cool',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight',
                        color: '#000'
                    }
                },
                data: [2,5,7,20,27,39],
                barMaxWidth: '30%'
            }
        ]
    };

    const getOption = {
        title: {
            text: 'Compitency Rating Chart',
            x: 'center'
        },
        legend: {
            orient: 'horizontal',
            top: 30,
            bottom: 20,
            data: PieLegend
        },
        color: ['#53C7E6','#EEDB1E','#F3ACD1'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: `${feedbackcounts}`,
                type: 'pie',
                center: ['50%', '60%'],
                data: compitencyRating,
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: true,
                        position: 'center',
                        formatter: '{a}',
                        color: '#000000',
                        fontWeight: '900',
                        fontSize: '40'
                    }
                },                
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ],
        visualMap: { pieces }
    };

    const getFeedbackReqested = (feedbacks, id, name) => {
        const currentuserfeedbackobj = {
            feedbacks,
            user_id: id,
            user_name: name
        };
        setuserfeedbackobj(currentuserfeedbackobj);
        if (!showFeedbackModal) {
            setshowFeedbackModal(true);
        }
    };

    const UserRequests = FeedbackRequests.map((request, index) => {
        return (
            <Card key={`card-${index}`}>
                <Card.Header>
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginRight: '5px' }}><Image src="/assets/imgs/people_1.png" roundedCircle /></div>
                        <div style={{ alignSelf: 'center', fontWeight: '900' }}>{request.user_name}</div>
                    </div>
                </Card.Header>
                <Card.Body>
                    <div>
                        <ListGroup>
                            {
                                request.feedbacks.map((feedback, index1) => {
                                    return (
                                        <ListGroup.Item className='feeback-list' variant='secondary' key={`feedback-${index1}`}>{feedback.name}</ListGroup.Item>
                                    );
                                })
                            }
                        </ListGroup>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <div className='answer_request' role='presentation' onClick={() => getFeedbackReqested(request.feedbacks, request.user_id, request.user_name )}><p>ANSWER REQUEST</p></div>
                </Card.Footer>
            </Card>
        );
    });

    // const showSendFeedbacks = () => {
    //     setshowSendFeedbackModal(true);
    // };

    // const showRequestFeedbacks = () => {
    //     setshowOwnRequestFeedbackModal(true);
    // };

    const handleNavSelect = (currentNav) => {
        if (currentNav !== selectedNav) {
            setselectedNav(currentNav);
        }
    };

    const showReceivedFeedbacks = (receivedFrom) => {
        setreceivedFeedback(receivedFrom);
        setshowReceivedFeedbacksModal(true);
    };
    
    const resetMyRequestedEmployeeData = () => {
        setshowMyRequestFeedbackModal(false);
    };

    const resetMySelectedEmployeeData = () => {
        setshowSendMyFeedbackModal(false);
    };

    const resetSelectedEmployee = () => {
        setshowSendFeedbackModal(false);
        props.resetemployee('selected');
    };

    const resetRequestedEmployee = () => {
        setshowOwnRequestFeedbackModal(false);
        props.resetemployee('requested');
    };

    const LineData = [
        {
            date: '29 Sep - 05 Oct', feedbacks: 10
        },
        {
            date: '06 Oct - 12 Oct', feedbacks: 5
        },
        {
            date: '13 Oct - 19 Oct', feedbacks: 20
        },
        {
            date: '20 Oct - 26 Oct', feedbacks: 15
        }
    ];

    if (LineData !== undefined) {
        LineData.map((line) => {
            const DateObj = { value: line.date };
            xAxisLineData.push(DateObj);
            seriesData.push(line.feedbacks);
        });
    }

    const getLineOption = () => ({
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xAxisLineData
        },
        yAxis: {
            type: 'value'
        },
        tooltip: {
            trigger: 'axis',
            position: 'top'
        },
        title: {
            text: 'Weekly Feedbacks'
        },
        legend: {
            data: xAxisLineData
        },
        series: [{
            data: seriesData,
            type: 'line',
            areaStyle: {
                color: '#007bff'
            },
            lineStyle: {
                color: '#007bff'
            },
            smooth: true
        }]
    });

    // if (selectedNav === 'received') {
    if (receivedFeedbackList.length > 0) {
        ReceivedFeedbackList = receivedFeedbackList.map((receive) => {
            AllFeedbacks.push(receive.feedbacks);
            const Total = receive.feedbacks.length;
            const { user_id, name } = receive;
            return (
                // eslint-disable-next-line camelcase
                <Card className="mt-3 shadow-sm" key={`receive-${user_id}`}>
                    <Card.Header className="d-flex p-2 pl-3">
                        <span style={{ fontWeight: '900', fontSize: '30px', color: 'cornflowerblue' }} onClick={() => showReceivedFeedbacks(receive)}>{Total}</span>
                        <div className="ml-2 align-self-center">
                            <span className="font-size-16" style={{ fontWeight: '500', color: '#90949C' }}>RATED COMPITENCIES</span>
                        </div>
                    </Card.Header>
                    <Card.Body className="p-2 pl-3 bg-white border-bottom d-flex flex-column">
                        <span className="pt-1 pb-1">Great Work. Please keep on doing it with same efforts.</span>
                    </Card.Body>
                    <Card.Footer className="d-flex align-items-center p-2 pl-3">
                        <div className='mr-1'><Image src="/assets/imgs/leo.jpeg" height={20} roundedCircle /></div>
                        <div>
                            <span className="pl-1"> {selectedNav === 'received' ? 'Received from' : 'Sent to'} </span>
                            <span className="font-weight-bold font-size-16 pl-1">{name}</span>
                        </div>
                    </Card.Footer>
                </Card>
            );
        });
    }
    // }

    // if (selectedNav === 'received') {

    // }
    EmployeeRatedList  = EmployeeRatedList.sort((a, b) => {return b.feedbacks.length - a.feedbacks.length});
    const EmployeeListing = EmployeeRatedList.map((employee, index) => {
        return (
            <div key={`employee-${index}`} className='mb-2 pl-3 pr-4 pb-1'>
                <div className='user-compitency-list'>
                    <div className='d-flex'>
                        <div><Image src={employee.img} roundedCircle style={{ maxWidth: '40px' }} /></div>
                        <div className='employee-name ml-2 align-self-center'>
                            <div>{employee.name}</div>
                            <div className='employee-post'>Employee</div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-self-center feedback-number">
                        <div>
                            <span>{employee.feedbacks.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    NewCompitenciesList = totalfeedbacks.map((feedback, index) => {
        return (
            <ListGroup.Item key={`comp-${index}`} className='mb-2' style={{ borderLeft: '5px solid cornflowerblue' }}>
                <div className='user-compitency-list'>
                    <div>
                        <div className='feedback-name'>{feedback.name}</div>
                    </div>
                    <div className="d-flex justify-content-center rounded-circle feedback-number">
                        <div>
                            <span style={{ color: '#ffffff' }}>5</span>
                        </div>
                    </div>
                </div>
            </ListGroup.Item>
        );
    });

    
    if (CompitenciesList === undefined) {
        setCompitenciesList(NewCompitenciesList);
    }

    const onChartClick = (param, echarts) => {
        const currentname = param.data.name;
        let feedbackName;

        if (currentname === 'You Rock') {
            feedbackName = 'star';
        } else if (currentname === 'Cool') {
            feedbackName = 'medal';
        } else {
            feedbackName = 'cap';
        }
        mainreceivedList.map((received) => {
            const { user_id, name, img } = received;
            const Feedbacks = received.feedbacks.filter(x => x.icon === feedbackName);
            if (Feedbacks !== undefined) {
                const userObj = { user_id, name, img, feedbacks: Feedbacks };
                UpdatedFeedbackList.push(userObj);
            }
        });

        if (UpdatedFeedbackList.length > 0) {
            props.updateReceivedFeedbacksList(UpdatedFeedbackList);
            setpieupdated(true);
        }
    };

    const onLineChartClick = (param) =>{
        console.log("onLineChartClick",param);
        
    }
    const onChartLegendselectchanged = (param, echart) => {
        console.log(param, echart);
        const currentname = param.name;
        let feedbackName;

        if (currentname === 'You Rock') {
            feedbackName = 'star';
        } else if (currentname === 'Cool') {
            feedbackName = 'medal';
        } else {
            feedbackName = 'cap';
        }
        mainreceivedList.map((received) => {
            const { user_id, name, img } = received;
            const Feedbacks = received.feedbacks.filter(x => x.icon === feedbackName);
            if (Feedbacks !== undefined) {
                const userObj = { user_id, name, img, feedbacks: Feedbacks };
                UpdatedFeedbackList.push(userObj);
            }
        });

        if (UpdatedFeedbackList.length > 0) {
            props.updateReceivedFeedbacksList(UpdatedFeedbackList);
            setpieupdated(true);
        }
    };

    const onChartReady = (echarts) => {
        console.log('echart is ready', echarts);
    };

    const onEvents = {
        'click': onChartClick,
        'legendselectchanged': onChartLegendselectchanged
    };

    const onLineEvents ={
        'click': onLineChartClick,
    }

    const reRenderPieChart = () => {
        console.log('rerenderdiv', rerenderdiv);
        props.setcompitencyRating([]);
        setpieupdated(false);
        props.getreceivedfeedbacklist();
    };

    // const searchcompitency = (event) => {
    //     const newFeedbacks = [];
    //     totalfeedbacks.find((x) => {
    //         const xname = x.name.toLowerCase();
    //         if (xname.includes(event.target.value)) {
    //             newFeedbacks.push(x);
    //         }
    //     });

    //     NewCompitenciesList = newFeedbacks.map((feedback, index) => {
    //         return (
    //             <ListGroup.Item key={`comp-${index}`} className='mb-2' style={{ borderLeft: '5px solid cornflowerblue' }}>
    //                 <div className='user-compitency-list'>
    //                     <div>
    //                         <div className='feedback-name'>{feedback.name}</div>
    //                     </div>
    //                     <div className="d-flex justify-content-center rounded-circle feedback-number">
    //                         <div>
    //                             <span style={{ color: '#ffffff' }}>5</span>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </ListGroup.Item>
    //         );
    //     });
    //     if (newFeedbacks.length > 0) {
    //         setCompitenciesList(NewCompitenciesList);
    //     }
    // };

    return (
        <Fragment>
            <StickyNav className="position-sticky" fill variant="tabs" defaultActiveKey="received" onSelect={handleNavSelect}>
                <Nav.Item>
                    <Nav.Link className="d-flex justify-content-center align-items-center betterme-link font-size-14" eventKey="received">Received</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="d-flex justify-content-center align-items-center betterme-link font-size-14" eventKey="sent">Sent</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="d-flex justify-content-center align-items-center betterme-link font-size-14" eventKey="rated">Rated Compitencies<Badge variant="info" style={{ marginLeft: '10px' }}>9</Badge></Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link className="d-flex justify-content-center align-items-center betterme-link font-size-14" eventKey="new_feedback" onClick={showRequestFeedbacks}>New Feedback<Badge variant="info" style={{ marginLeft: '10px' }}>0</Badge></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="d-flex justify-content-center align-items-center betterme-link font-size-14" eventKey="send_feedback" onClick={showSendFeedbacks}>Send Feedback<Badge variant="info" style={{ marginLeft: '10px' }}>0</Badge></Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                    <Nav.Link className="d-flex justify-content-center align-items-center betterme-link font-size-14" eventKey="feedback_requests">Feedback Requests<Badge variant="info" style={{ marginLeft: '10px' }}>2</Badge></Nav.Link>
                </Nav.Item>
            </StickyNav>
            <div className="d-block">
                {
                    selectedNav === 'received' &&
                    <div className="mt-4 mb-4 mx-auto" style={ReceivedListStyle}>
                        {ReceivedFeedbackList}
                    </div>
                }
                {
                    selectedNav === 'sent' &&
                    <div className="mt-4 mb-4 mx-auto" style={ReceivedListStyle}>
                        {ReceivedFeedbackList}
                    </div>
                }
                {
                    selectedNav === 'rated' &&
                    <React.Fragment>
                        <div className="d-flex p-4" ref={analyticsdiv}>
                            <Row style={{width: '100%', height: 'calc(100vh - 169px)'}}>
                                <Col sm={5} className="h-100">
                                    <div className="chart-col mb-4 shadow p-1 bg-white rounded" stlye={{height: '100%'}}>
                                        { feedbackData.length > 0 &&
                                            <Fragment>
                                                <BarChart baroption={baroption}/>
                                            </Fragment>
                                        }
                                    </div>
                                </Col>
                                <Col sm={4} className='d-flex flex-column justify-content-between h-100'>
                                    <Row className='flex-grow-1'>
                                        <Col sm={12}>
                                            <div className="chart-col mb-4 shadow p-1 bg-white rounded w-100 d-flex  align-items-center">
                                            {
                                                pieces.length > 0 &&
                                                <Fragment>
                                                    <div className="align-self-start" style={{ position: 'absolute', zIndex: '1000', padding: '5px', color: '#6495ed' }} ref={rerenderdiv} onClick={() => reRenderPieChart()}><FontAwesomeIcon icon={faRedo} /></div>
                                                    <ReactEcharts
                                                        option={getOption}
                                                        style={{ height: 280, position: 'relative' }}
                                                        notMerge
                                                        lazyUpdate
                                                        onChartReady={onChartReady}
                                                        onEvents={onEvents}
                                                        className="w-100"
                                                    />
                                                </Fragment>
                                            }
                                            </div>    
                                        </Col>
                                    </Row>
                                    <Row className='linerow flex-grow-1'>
                                        <Col sm={12}>
                                            <div className="chart-col mb-4 shadow p-1 bg-white rounded w-100 d-flex  align-items-center">
                                            {
                                                xAxisLineData.length > 0 &&
                                                <ReactEcharts
                                                    option={getLineOption()}
                                                    style={{ height: 300 }}
                                                    onEvents={onLineEvents}
                                                    className="w-100"
                                                />
                                            }
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={3} className="h-100">
                                    <div className="chart-col shadow bg-white rounded overflow-y-auto">
                                        <div className='d-flex p-3 justify-content-between'>
                                            <div><span className='compitency'>Employees List</span></div>
                                            <div><span className='compitency'>Feedbacks</span></div>
                                        </div>
                                        {/* <ListGroup className='p-2'>
                                            {EmployeeListing}
                                        </ListGroup> */}
                                        <div>
                                        {EmployeeListing}
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </React.Fragment>
                }
                {
                    selectedNav === 'feedback_requests' &&
                    <div className='pl-4'>
                        <Row>
                            <Col sm={12} className='rows1'>
                                <span style={{ fontWeight: '900', fontSize: '20px' }}>Feedback Requests</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} className='rows2'>
                                <CardColumns>
                                    {UserRequests}
                                </CardColumns>
                            </Col>
                        </Row>
                    </div>
                }
            </div>
            <OverlayTrigger
                placement={"top"}
                trigger="click"
                overlay={
                <Tooltip className="font-size-14 betterme-tootltip">
                    <OverlayTrigger
                        placement={"top"}
                        trigger="hover"
                        overlay={
                        <Tooltip className="font-size-14">
                            Request Feedback
                        </Tooltip>
                        }
                    >
                        <FloatingButton className="btn-primary feedback-btn" right={-12} bottom={100} onClick={() => setshowMyRequestFeedbackModal(true)}>
                            <FontAwesomeIcon icon={faReceipt} />
                        </FloatingButton>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement={"bottom"}
                        trigger="hover"
                        overlay={
                        <Tooltip className="font-size-14">
                            Send Feedback
                        </Tooltip>
                        }
                    >
                        <FloatingButton className="btn-primary feedback-btn" right={-12} bottom={40} onClick={() => setshowSendMyFeedbackModal(true)}>
                            <FontAwesomeIcon icon={faInbox} />
                        </FloatingButton>
                    </OverlayTrigger> 
                </Tooltip>
                }
            >
                <FloatingButton className="btn-primary" bottom={40}>
                    <FontAwesomeIcon icon={faPlus} />
                </FloatingButton>
            </OverlayTrigger>
            <MyRequestFeedbackModal show={showMyRequestFeedbackModal} employees={employees} totalfeedbacks={totalfeedbacks} onHide={() => resetMyRequestedEmployeeData()} />
            <MySendFeedbackModal show={showSendMyFeedbackModal} employees={employees} totalfeedbacks={totalfeedbacks} onHide={() => resetMySelectedEmployeeData()} />
            <FeedbackRequestModal show={showFeedbackModal} userfeedbackobj={userfeedbackobj} onHide={() => setshowFeedbackModal(false)} />
            <SendFeedbackModal show={showSendFeedbackModal} onHide={() => resetSelectedEmployee() } />
            <RequestownFeedbackModal show={showOwnRequestFeedbackModal} onHide={() => resetRequestedEmployee()} />
            <SentFeedbacksModal show={showSentFeedbacksModal} onHide={() => setshowSentFeedbacksModal(false)} />
            <ReceivedFeedbacksModal receivedfeedback={receivedFeedback} show={showReceivedFeedbacksModal} onHide={() => setshowReceivedFeedbacksModal(false)} />
        </Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        ...state.betterme
    };
}

const mapDispatchToProps = dispatch => {
    return {
        ...bindActionCreators({ ...Actions, changeNavTitle, changeNavMenu }, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BetterMePage);

