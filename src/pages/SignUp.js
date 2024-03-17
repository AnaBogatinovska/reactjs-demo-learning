import { useState } from "react";
import { useForm } from 'react-hook-form';
import { Controller } from "react-hook-form";
import { Button } from "@mui/material";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const submitForm = (event) => {

        console.log(event)
    }
    return (
        <div style={{ padding: '24px', flex: 1 }}>
            <div style={{ fontSize: '24px', textAlign: 'center', marginBottom: '24px' }}>REGISTER</div>
            <form onSubmit={handleSubmit(submitForm)} style={{ maxWidth: '500px', margin: '0 auto' }}>
                <div style={{ display: 'flex', gap: 24 }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className="field">
                                <label className="field-label" htmlFor="firstname">First Name *</label>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'First Name is required *' }}
                                    render={({ field }) => (
                                        <input id="firstName" placeholder="Type here.." className="field-input" {...field} />
                                    )}
                                />
                                {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
                            </div>
                            <div className="field">
                                <label className="field-label" htmlFor="lastname">Last Name *</label>
                                <Controller
                                    name="lastName"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Last Name is required *' }}
                                    render={({ field }) => (
                                        <input id="lastname" className="field-input" {...field} />
                                    )}
                                />
                                {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
                            </div>
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
                                <label className="field-label" htmlFor="addressLine1">AddressLine 1 *</label>
                                <Controller
                                    name="addressLine1"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'AddressLine 1 is required *' }}
                                    render={({ field }) => (
                                        <input id="addressLine1" className="field-input" {...field} />
                                    )}
                                />
                                {errors.addressLine1 && <p className="error-message">{errors.addressLine1.message}</p>}
                            </div>
                            <div className="field">
                                <label className="field-label" htmlFor="addressLine2">AddressLine 2</label>
                                <Controller
                                    name="addressLine2"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <input id="addressLine2" className="field-input" {...field} />
                                    )}
                                />
                            </div>
                            <div style={{ display: 'flex', gap: 8 }}>
                                <div className="field" style={{ flex: 1 }}>
                                    <label className="field-label" htmlFor="country">Country *</label>
                                    <Controller
                                        name="country"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Country is required *' }}
                                        render={({ field }) => (
                                            <select id="country" className="field-input" {...field}>
                                                <option value="">Select...</option>
                                                <option value="in">India</option>
                                                <option value="au">Australia</option>
                                                <option value="mkd">Macedonia</option>
                                                <option value="usa">USA</option>
                                                <option value="other">Other</option>
                                            </select>
                                        )}
                                    />
                                    {errors.country && <p className="error-message">{errors.country.message}</p>}
                                </div>
                                <div className="field" style={{ flex: 1 }}>
                                    <label className="field-label" htmlFor="city">City *</label>
                                    <Controller
                                        name="city"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'City is required *' }}
                                        render={({ field }) => (
                                            <input id="city" className="field-input" {...field} />
                                        )}
                                    />
                                    {errors.city && <p className="error-message">{errors.city.message}</p>}
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: 8 }}>
                                <div className="field" style={{ flex: 1 }}>
                                    <label className="field-label" htmlFor="state">State *</label>
                                    <Controller
                                        name="state"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'State is required *' }}
                                        render={({ field }) => (
                                            <input id="state" className="field-input" {...field} />
                                        )}
                                    />
                                    {errors.state && <p className="error-message">{errors.state.message}</p>}
                                </div>
                                <div className="field" style={{ flex: 1 }}>
                                    <label className="field-label" htmlFor="postcode">Postcode *</label>
                                    <Controller
                                        name="postcode"
                                        control={control}
                                        defaultValue=""
                                        rules={{ required: 'Postcode is required *', pattern: { value: /^[0-9]+$/, message: 'Only digits allowed *' } }}
                                        render={({ field }) => (
                                            <input id="postcode" className="field-input" {...field} maxLength={6} />
                                        )}
                                    />
                                    {errors.postcode && <p className="error-message">{errors.postcode.message}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{ textAlign: 'center' }}>
                    <Button variant="contained" type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default SignUp;