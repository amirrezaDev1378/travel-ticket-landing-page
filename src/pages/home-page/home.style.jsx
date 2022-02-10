import {makeStyles} from "@mui/styles";
import Section1Background from "../../assets/images/Section1BG.jpg";
import {createTheme} from "@mui/material";

const theme = createTheme({});
const useStyles = makeStyles({
    HomeContainer: {
        width: '100%'
    },
    Section1: {
        backgroundImage: `url("${Section1Background}")`,
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    Section1Logo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        "&> img": {
            marginTop: "-9%",
            width: "500px"
        }
    }
    ,
    Section1Text: {
        textAlign: "left",
        paddingLeft: "130px",
        marginTop: "-10%"
    },
    Section2: {},
    ServicesComponent: {

        padding: '25px',

        fontFamily: "Poppins light, sans-serif",

        backgroundColor: "white",

        [theme.breakpoints.up('md')]: {
            width: "200px",
            height: "300px",
        },

        color: "#1E1D4C",

        transition:"700ms",

        borderRadius:"25px",

        "&:hover": {
            "box-shadow": "0px 51.85px 46.3px rgba(0, 0, 0, 0.1)",
            transform:"scale(1.15) "
        }
    },
    Section3:{
        color: "#1E1D4C",
    },
    TravelCards:{
        borderRadius:"30px 30px 0 0 !important",
        height:"550px !important",
        transition:"590ms !important",
        "&:hover":{
            transform:"scale(1.1)",
            "box-shadow": "0px 15.85px 26.3px rgba(0, 0, 0, 0.2)"

        },
        "box-shadow": "0px 15.85px 26.3px rgba(0, 0, 0, 0.1)"
    },
    Section4:{
        color:"#1e1d4c",
        fontFamily: "Poppins light, sans-serif",
    },
    Section5:{
        backgroundColor:"#cfbeff",
        width:"80%",
        borderRadius:"80px 8px 8px 8px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        marginLeft:"10%",
        fontFamily: "Poppins light, sans-serif",

    }
});
export default useStyles;
