import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import SignupStep1 from '.././Auth/SignupStep1';
import SignupStep2 from '.././Auth/SignupStep2';


const useStyles = makeStyles({
    root: {
        maxWidth: 400,
        flexGrow: 1,
        marginTop: '24px',
        backgroundColor: 'white',
        width: '100%'

    },
});


export default function DotsMobileStepper({ setNewUser, newUser, handleRegister, SetLoginAction, message }) {

    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <div className="signup-form">
            {
                activeStep === 0 ? (<div>
                    <div className='step1Form'>
                        <SignupStep1
                            setNewUser={setNewUser}
                            newUser={newUser}
                        />
                    </div>
                </div>) : (<div>
                    <div className='step2Form'>
                        <SignupStep2
                            setNewUser={setNewUser}
                            newUser={newUser}
                            message= {message} />
                    </div>
                </div>)
            }

            <MobileStepper
                variant="none"
                steps={1}
                position="static"
                activeStep={activeStep}
                className={classes.root}
                nextButton={
                    activeStep === 0 ?
                        (<div>
                            <Button
                                style={{
                                    color: 'white',
                                    fontSize: '14px',
                                    fontFamily: 'IBMPlexSans,sans-serif',
                                    fontWeight: 600,
                                    letterSpacing: '.5px',
                                    backgroundColor: '#0079d3',
                                    border: 'none',
                                    borderRadius: '4px',
                                    textAlign: 'center',
                                    background: '#0079d3',
                                    cursor: 'pointer',
                                    minWidth: '155px',
                                    width: '100%',
                                    height: '30px',
                                }}
                                size="small" onClick={handleNext} disabled={activeStep === 1}>
                                CONTINUE
                            </Button>

                            <div className='stepper-loginButton'
                            >
                                Already a redditor?  
                                
                                <span className="su-link" onClick={() => SetLoginAction("Login")}> LOG IN</span>
                                 
                            </div>
                        </div>) :
                        (<div>
                            <Button
                                style={{ display: 'flex' }} size="small" onClick={handleRegister}>
                                SIGN UP
                            </Button></div>)
                }
                backButton={
                    activeStep === 1 ?
                        (<div>
                            <Button style={{ display: 'flex' }} size="small" onClick={handleBack} disabled={activeStep === 0}>
                                Back
                            </Button>
                        </div>

                        ) : (<></>)
                }
            />



        </div>
    );
}
