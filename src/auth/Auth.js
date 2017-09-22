import React from 'react';
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, signin } from './actions';
import styled from 'styled-components';
import Credentials from './Credentials';

const CenteredDiv = styled.div`
    text-align: center;
`;

const Error = styled.pre`
    color: red;
`;

function Auth(props) {
    const { user, signin, signup, error, location } = props;
    const redirect = location.state ? location.state.from : '/';

    if (user) return <Redirect to={redirect}/>;

    return (
        <CenteredDiv>
            <Switch>
                <Route path="/auth/signin" component={() => (
                    <div>
                        <p>
                            Not yet registered? <Link to="/auth/signup">Sign up!</Link>
                        </p>
                        <Credentials submit={signin} {...props}/>
                    </div>
                )}/>
                <Route path="/auth/signup" render={() => (
                    <div>
                        <p>
                            Already have an account? <Link to="/auth/signin">Sign in!</Link>
                        </p>
                        <Credentials submit={signup} {...props} allowName={true}/>
                    </div>
                )}/>
            </Switch>
            {error && <Error>{ error }</Error>}
        </CenteredDiv>
    );
}

export default withRouter(connect(
    ({ auth }) => ({
        error: auth.error,
        user: auth.user
    }),
    dispatch => ({
        signup(user) { dispatch(signup(user)); },
        signin(credentials) { dispatch(signin(credentials)); }
    })
)(Auth));