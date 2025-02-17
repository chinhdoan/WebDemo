import React, { useState , useEffect  } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link, useNavigate} from 'react-router-dom'
// import axios from 'axios';
// import useStyles from './Styles.js';
// import companyLogo from '../imgs/logo.png';
import './Header.css'
import Container from 'react-bootstrap/Container';
import NavigationBar from '../NavigationBar/NavigationBar';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Header() {
    // const [devices, setDevices] = useState([])
    // const navigate = useNavigate();
    // useEffect(() => {
    //         axios.get("http://localhost:3001")
    //         .then(result => setDevices(result.data))
    //         .catch(err => console.log(err))
    //     },[])

    // const classes = useStyles();
    return (
        <>
            <NavigationBar/>                    
        </>
    )
}
