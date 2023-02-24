import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const Home = () => {
    const history = useHistory();

    const handleLogin = () => {
        history.push('/external-products');
    }

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "-80px" }} >
            <Card style={{ maxWidth: "max-content", marginTop: "30px", background: "#c4da4a" }}>
                <CardContent>
                    <h1>Home</h1>
                    <Button variant="contained" color="secondary" onClick={() => handleLogin()} >
                        Go to login page
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Home