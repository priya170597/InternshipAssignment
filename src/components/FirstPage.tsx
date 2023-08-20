import React from 'react';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const FirstPage: React.FC = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const onSubmit = (data: any) => {
        localStorage.setItem('userDetails', JSON.stringify(data));
        if (data.name && data.email && data.phoneNumber)
        {
            navigate('/second-page');
        }
        else
        {
            alert("Please Enter Your Details First to Continue");
            navigate('/');
        }
    };


    return (
        <div>
            <h2>First Page</h2>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <TextField 
                    label = "Name"
                    {...register('name', {})}
                    fullWidth
                    margin = "normal"
                />
                <TextField 
                    label = "Phone Number"
                    {...register('phoneNumber', { 
                        pattern: /^[0-9]{10}$/, 
                    })}
                    inputMode="numeric"
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber ? 'Please enter a 10-digit phone number' : ''}
                    fullWidth
                    margin = "normal"
                />
                <TextField 
                    label = "Email"
                    {...register('email', { 
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    })}
                    error={!!errors.email}
                    helperText={errors.email ? 'Please enter a valid Email ID' : ''}
                    fullWidth
                    margin = "normal"
                />
                <Button type = "submit" variant = "contained" color = "primary">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default FirstPage;
