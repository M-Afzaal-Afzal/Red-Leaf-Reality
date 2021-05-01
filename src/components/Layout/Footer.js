import React from 'react';
import {
    Box,
    Container,
    Grid,
    TextField,
    makeStyles,
    Typography,
    Button,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import {useForm, Controller} from "react-hook-form";
import {useSnackbar} from 'notistack';

const useStyles = makeStyles(() => ({
    footer: {
        padding: '8rem 0 8rem',
        width: '100%',
        background: '#2d2d2d',
    },
    entityContainer: {
        padding: '1rem',
    },
    footerFirstHeading: {
        color: 'white',
        marginBottom: '4rem',
    },
    footer2ndHeading: {
        color: 'white',
    },
    footer2ndHeadings: {
        marginBottom: '4rem',
    },
    textFieldContainer: {
        marginBottom: '1rem',
    },
    submitBtn: {
        marginTop: '1rem',
        background: '#2d2d2d',
        border: '1px solid #fff',
        color: "white",
        borderRadius: 0,
        '&:hover': {
            background: '#353535'
        }
    }
}))

const Footer = () => {

    const classes = useStyles();

    const {enqueueSnackbar} = useSnackbar();

    const {control, reset, handleSubmit, formState: {errors}} = useForm();
    const theme = useTheme();
    const isSmallerThanSm = useMediaQuery(theme.breakpoints.down('sm'));


    // this function will be called when the user submit the message

    const onSubmit = ({name, email, phone, message}) => {
        // here is your data of the form input do what ever you want with it
        console.log(name, email, phone, message)

        // success message when message sent successfully

        enqueueSnackbar("Message sent successfully!!!", {
            variant: 'success',
        });

        //    reset after sending the message

        reset({
            name: '',
            email: '',
            message: '',
            phone: ''
        })

        //     for error

        //     enqueueSnackbar("Error while sending the message!!!", {
        //         variant: 'error',
        //     });
    };


    return (
        <Box className={classes.footer}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Container maxWidth={'lg'}>

                    <Grid justify={'center'} alignItems={isSmallerThanSm ? 'center' : 'flex-start'} container>
                        <Grid xs={12} md={6} className={classes.entityContainer} item>
                            <Box>
                                <Typography align={isSmallerThanSm ? "center" : 'left'} gutterBottom
                                            className={classes.footerFirstHeading}
                                            variant={'h4'}>
                                    Red Leaf Reality
                                </Typography>
                            </Box>

                            <Box className={classes.footer2ndHeadings}>
                                <Typography align={isSmallerThanSm ? "center" : 'left'} gutterBottom
                                            className={classes.footer2ndHeading} variant={'h4'}>
                                    Mon Fri - 9am to 6pm
                                </Typography>
                                <Typography align={isSmallerThanSm ? "center" : 'left'}
                                            className={classes.footer2ndHeading} variant={'h4'}>
                                    350 Park Ave CA
                                </Typography>
                            </Box>

                            <Box>
                                <Typography align={isSmallerThanSm ? "center" : 'left'} gutterBottom
                                            className={classes.footer2ndHeading} variant={'h4'}>
                                    Mon Fri - 9am to 6pm
                                </Typography>
                                <Typography align={isSmallerThanSm ? "center" : 'left'}
                                            className={classes.footer2ndHeading} variant={'h4'}>
                                    350 Park Ave CA
                                </Typography>
                            </Box>

                        </Grid>
                        <Grid xs={12} md={6} className={classes.entityContainer} item>
                            <Box style={{maxWidth: '30rem', margin: 'auto'}}>

                                <Box className={classes.textFieldContainer}>
                                    <Controller
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'You must have to specify your name!!!'
                                            }
                                        }}
                                        render={({field}) => (
                                            <TextField
                                                id="name"
                                                name="name"
                                                label="Name"
                                                error={!!errors?.name}
                                                fullWidth
                                                variant={'filled'}
                                                color={'primary'}
                                                style={{background: 'white'}}
                                                helperText={errors?.name ? errors.name.message : null}
                                                {...field}
                                            />
                                        )}
                                    />
                                </Box>

                                <Box className={classes.textFieldContainer}>
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'You must have to specify your email!!!'
                                            }, pattern: {
                                                value: /^\S+@\S+$/i,
                                                message: 'Please enter correct email!!!'
                                            }
                                        }}
                                        render={({field}) => (
                                            <TextField
                                                id="email"
                                                label="Email"
                                                name="email"
                                                error={!!errors?.email}
                                                fullWidth
                                                variant={'filled'}
                                                color={'primary'}
                                                style={{background: 'white'}}
                                                helperText={errors?.email ? errors.email.message : null}
                                                {...field}
                                            />
                                        )}
                                    />
                                </Box>

                                <Box className={classes.textFieldContainer}>
                                    <Controller
                                        name="phone"
                                        control={control}
                                        type={'number'}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'You must have to specify your phone number!!!'
                                            }
                                        }}
                                        defaultValue=""
                                        render={({field}) => (
                                            <TextField
                                                name="phone"
                                                id="phone"
                                                type={'tel'}
                                                label="Phone"
                                                error={!!errors?.phone}
                                                fullWidth
                                                variant={'filled'}
                                                color={'primary'}
                                                style={{background: 'white'}}
                                                helperText={errors?.phone ? errors.phone.message : null}
                                                {...field}
                                            />
                                        )}
                                    />
                                </Box>

                                <Box className={classes.textFieldContainer}>
                                    <Controller
                                        name="message"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: {
                                                value: true,
                                                message: 'You must have to specify your phone message!!!'
                                            }
                                        }}
                                        render={({field}) => (
                                            <TextField
                                                name="message"
                                                id="message"
                                                label="Message"
                                                error={!!errors?.message}
                                                fullWidth
                                                multiline
                                                rows={5}
                                                rowsMax={5}
                                                variant={'filled'}
                                                color={'primary'}
                                                style={{background: 'white'}}
                                                helperText={errors?.message ? errors.message.message : null}
                                                {...field}
                                            />
                                        )}
                                    />
                                </Box>

                                <Box style={{display: 'flex', justifyContent: 'flex-end'}}>
                                    <Button type={'submit'} className={classes.submitBtn} size={'large'}
                                            variant={'contained'}>
                                        Submit
                                    </Button>
                                </Box>

                            </Box>

                        </Grid>
                    </Grid>
                </Container>
            </form>
        </Box>
    );
};

export default Footer;
