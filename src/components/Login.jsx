import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";


const Login = () => {
    const [loginState, setLoginState] = useState(false);

    const history = useHistory();

    const handleInternalLogin1 = () => {
        localStorage.setItem("type", "internal1");
        setLoginState(!loginState);
        history.push('/products');
    }

    const handleInternalLogin2 = () => {
        localStorage.setItem("type", "internal2");
        setLoginState(!loginState);
        history.push('/sales');
    }

    const handleExternalLogin = () => {
        localStorage.setItem("type", "external");
        setLoginState(!loginState)
        history.push('/external-products');
    }
    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "-80px" }} >
            <div>
                <Card style={{ maxWidth: "max-content", marginTop: "30px", background: "#da814a" }}>
                    <CardContent>
                        <h1>Internal Users</h1>
                        <Button variant="contained" style={{ background: "green", color: "#fff" }} onClick={() => handleInternalLogin1()} >
                            Internal User 1
                        </Button>
                        <br />
                        <br />
                        <Button variant="contained" color="primary" onClick={() => handleInternalLogin2()} >
                            Internal User 2
                        </Button>
                    </CardContent>
                </Card>

                <Card style={{ maxWidth: "max-content", marginTop: "30px", background: "#c4da4a" }}>
                    <CardContent>
                        <h1>External Users</h1>
                        <Button variant="contained" color="secondary" onClick={() => handleExternalLogin()} >
                            External User Login
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default Login