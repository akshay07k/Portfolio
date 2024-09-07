import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

interface FormInput {
    name: string,
    phonenumber: string,
    email: string,
    subject: string,
    description: string
}

const ContactForm: React.FC = () => {
    
    const { register, handleSubmit } = useForm<FormInput>();

    const onSubmit: SubmitHandler<FormInput> = (data) => {
        console.log(data);
        const mailtoLink = `mailto:example@example.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nPhone: ${data.phonenumber}\nEmail: ${data.email}\n${data.description}`)}`;
        window.location.href = mailtoLink;
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
            <div className='flex flex-col'>
                <label htmlFor="name" className='uppercase text-sm py-2'>Name</label>
                <input {...register("name", { required: true, maxLength: 20 })} type='text' className='border-2 rounded-lg p-3 flex border-gray-300'/>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="phonenumber" className='uppercase text-sm py-2'>Phone Number</label>
                <input {...register("phonenumber", { required: true, minLength: 9 })} type='text' className='border-2 rounded-lg p-3 flex border-gray-300'/>
            </div>
        </div>
        <div className='flex flex-col w py-2'>
            <label htmlFor="email" className='uppercase text-sm py-2'>Email</label>
            <input {...register("email", {
                    required: true,
                    validate: {
                        matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.
                        test(value) || "Email address must be a valid address"
                    }
                })} type='text' className='border-2 rounded-lg p-3 flex border-gray-300'/>
        </div>
        <div className='flex flex-col py-2'>
            <label htmlFor="subject" className='uppercase text-sm py-2'>Subject</label>
            <input {...register("subject", { required: true })} type='text' className='border-2 rounded-lg p-3 flex border-gray-300'/>
        </div>
        <div className='flex flex-col py-2'>
            <label htmlFor="description" className='uppercase text-sm py-2'>Message</label>
            <textarea {...register("description", { required: true, maxLength: 20 })} className='border-2 rounded-lg p-3 border-gray-300' rows={7}></textarea>
        </div>
        <button className='w-3/4 sm:mx-16 p-4  mt-4 text-sm rounded-lg bg-gradient-to-r from-[#306279] to-[#5791b5] text-white uppercase shadow-xl transition hover:scale-105 duration-300 ease-in'>Send Message</button>
    
    </form>
  )
}

export default ContactForm