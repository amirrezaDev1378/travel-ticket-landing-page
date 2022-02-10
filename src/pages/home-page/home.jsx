import React, {useEffect} from 'react';
import useStyles from "./home.style";


import LOGO from "../../assets/icons/LOGO.png"
import weather from "../../assets/icons/weather.png";
import plane from "../../assets/icons/plane.png";
import calender from "../../assets/icons/calender.png";
import setting from "../../assets/icons/setting.png";
import rome from "../../assets/images/rome.png";
import london from "../../assets/images/london.png";
import europe from "../../assets/images/europe.png";
import svgImage from "../../assets/images/Image.svg";
import brands from "../../assets/images/logos.svg";

import {Button, Card, CardContent, CardMedia, InputAdornment, Stack, TextField, Typography} from "@mui/material";
import {DirectionsCarOutlined, MailOutline, Navigation, Payment, PhotoSizeSelectSmall, PlayArrow} from "@mui/icons-material";
import AOS from 'aos'
import 'aos/dist/aos.css';

function TravelCards({image, text, price, Days}) {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.TravelCards}>
                <CardMedia
                    component="img"
                    // height="140"
                    image={image}
                    alt="image"
                />
                <CardContent>
                    <Stack direction={"row"} spacing={20}>
                        <Typography gutterBottom variant="h5" component="div">
                            {text}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {price}
                        </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                        <Navigation/> {Days}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}


function Services({title, text, icon}) {
    const classes = useStyles();

    return (
        <div className={classes.ServicesComponent}>
            <img src={icon} alt="AVATAR"/>
            <br/>
            <h3>{title}</h3>
            <p style={{color: "#5E6282"}}>{text}</p>
        </div>
    );
}

function Home(props) {

    useEffect(() => {
        AOS.init(
            {
                delay: "500",
                duration: "800",
                once: false,
                mirror: true
            }
        );

    }, []);


    const classes = useStyles();
    return (
        <div className={classes.HomeContainer}>
            <section className={classes.Section1}>
                <div className={classes.Section1Logo}>
                    <img data-aos="fade-up" src={LOGO} alt="RASA LOGO"/>
                </div>
                <div className={classes.Section1Text}>
                    <p data-aos="fade-right" data-aos-delay="700" style={{color: '#DF6951'}}>
                        Best Destinations around the world
                    </p>
                    <p data-aos="fade-right" data-aos-delay="1100" style={{
                        color: "#181E4B",
                        fontSize: "45pt",
                        fontFamily: "Poppins light",

                    }}
                    >
                        Travel, enjoy
                        <br/>
                        and live a new
                        <br/>
                        and full life
                    </p>

                    <p data-aos="fade-right" data-aos-delay="1500" style={{fontFamily: "Poppins light"}}>
                        Built Wicket longer admire do barton vanity
                        <br/>
                        itself do in it. Preferred to sportsmen it
                        <br/>
                        engrossed listening. Park gate sell they west
                    </p>

                </div>
                <br/><br/><br/>

                <Stack
                    style={{
                        paddingLeft: "130px",
                    }}
                    direction={"row"}
                    spacing={3}
                >
                    <Button style={{
                        backgroundColor: "#F1A501",
                        color: "white"
                    }}
                    >
                        Find out more
                    </Button>
                    <Button style={{color: "white"}}> <PlayArrow
                        style={{color: "white", backgroundColor: "#DF6951", padding: 7, borderRadius: "100%", marginRight: "15px"}}/> Play Demo</Button>
                </Stack>
            </section>
            <section className={classes.Section2}>
                <h1>
                    We Offer Best Services
                </h1>
                <br/>
                <Stack direction={{md: 'row'}} spacing={8} justifyContent={"center"} alignItems={"center"}>
                    <Services
                        title={'Calculated Weather '}
                        text={'Built Wicket longer admire do barton vanity itself do in it.'}
                        icon={weather}
                    />
                    <Services
                        title={'Best Flights'}
                        text={'Engrossed listening. Park gate sell they west hard for the.'}
                        icon={plane}
                    />
                    <Services
                        title={'Local Events'}
                        text={'Barton vanity itself do in it. Preferd to men it engrossed listening. '}
                        icon={calender}
                    />
                    <Services
                        title={'Customization'}
                        text={'We deliver outsourced aviation services for military customers'}
                        icon={setting}
                    />

                </Stack>
            </section>
            <section className={classes.Section3}>
                <h1>
                    Top Destinations
                </h1>
                <br/>
                <Stack justifyContent={"center"} direction={"row"} spacing={8}>
                    <TravelCards text={"Rome, Italy"} price={"$5,42k"} Days={"10 Days Trip"} image={rome}/>
                    <TravelCards text={"London, UK"} price={"$4.2k"} Days={"12 Days Trip"} image={london}/>
                    <TravelCards text={"Full Europe"} price={"$15k"} Days={"28 Days Trip"} image={europe}/>
                </Stack>

            </section>
            <section className={classes.Section4}>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1>
                    Book Your Next Trip
                </h1>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={12}>
                    <Stack data-aos="fade-right" data-aos-delay="800" direction={"column"} spacing={3}>
                        <Stack direction={"row"} spacing={10}>
                            <PhotoSizeSelectSmall
                                style={{
                                    color: "white",
                                    backgroundColor: "#F0BB1F",
                                    borderRadius: 15,
                                    padding: 15
                                }}
                            />
                            <Stack textAlign={"left"} direction={"column"} spacing={1}>
                                <b>Choose Destination</b>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing</p>
                            </Stack>
                        </Stack>
                        <br/>
                        <br/>
                        <Stack data-aos="fade-right" data-aos-delay="1200" direction={"row"} spacing={10}>
                            <Payment
                                style={{
                                    color: "white",
                                    backgroundColor: "#F15A2B",
                                    borderRadius: 15,
                                    padding: 15
                                }}
                            />
                            <Stack textAlign={"left"} direction={"column"} spacing={1}>
                                <b>Make Payment</b>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing</p>
                            </Stack>
                        </Stack>
                        <br/>
                        <br/>
                        <Stack data-aos="fade-right" data-aos-delay="1600" direction={"row"} spacing={10}>
                            <DirectionsCarOutlined
                                style={{
                                    color: "white",
                                    backgroundColor: "#006380",
                                    borderRadius: 15,
                                    padding: 15
                                }}
                            />
                            <Stack textAlign={"left"} direction={"column"} spacing={1}>
                                <b>Reach Airport on Selected Date</b>
                                <p>Lorem ipsum dolor sit amet, consectetur
                                    adipiscing</p>
                            </Stack>
                        </Stack>

                    </Stack>
                    <img data-aos="fade-left" data-aos-delay="2000" src={svgImage} alt="image"/>
                </Stack>
                <br/>
            </section>
            <img src={brands} alt="brands"/>

            <section className={classes.Section5}>
                <h1 style={{color: "#5E6282", fontSize: "30pt", paddingBottom: "200px", paddingTop: "50px"}}>
                    Subscribe to get information, latest news and other
                    <br/>
                    interesting offers about Cobra
                </h1>

                <Stack direction={"row"} spacing={10} justifyContent={"center"} alignItems={"center"} paddingBottom={"85px"}>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Your email"
                        placeholder={"Your email"}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MailOutline/>
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        color={"warning"}
                        style={{width: "400px"}}
                    />

                    <Button style={{backgroundColor: "#FF946D", color: "white", padding: "12px 20px"}}>
                        Subscribe
                    </Button>
                </Stack>
            </section>
            <br/>
            <br/>
        </div>
    );
}

export default Home;
