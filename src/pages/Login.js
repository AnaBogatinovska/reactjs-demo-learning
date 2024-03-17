import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Controller } from "react-hook-form";
import Button from '@mui/material/Button';

const Login = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const handleClick = () => {
        localStorage.setItem('token', 'access');
        navigate("/home")
    };
    return (
        <>
            <div style={{ padding: '24px', flex: 1 }}>
                <div style={{ fontSize: '24px', textAlign: 'center', marginBottom: '24px' }}>LOGIN</div>
                <form onSubmit={handleSubmit(handleClick)} style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <div style={{ display: 'flex', gap: 24 }}>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <div className="field">
                                    <label className="field-label" htmlFor="email">Email *</label>
                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Email is required *', pattern: { value: /^\S+@\S+$/i, message: 'Enter valid email address *' } }}
                                        render={({ field }) => (
                                            <input id="email" className="field-input" {...field} />
                                        )}
                                    />
                                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                                </div>
                                <div className="field">
                                    <label className="field-label" htmlFor="password">Password *</label>
                                    <Controller
                                        name="password"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Password is required *' }}
                                        render={({ field }) => (
                                            <input id="password" className="field-input" {...field} />
                                        )}
                                    />
                                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                                </div>
                            </div>
                        </div>

                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Button variant="contained" type="submit">Login</Button>
                    </div>
                </form>
                <div style={{ textAlign: 'center', marginTop: '24px' }}>
                    <Link to="/sign-up" replace>Sign Up</Link>
                </div>
            </div>
        </>
    );
}

export default Login;