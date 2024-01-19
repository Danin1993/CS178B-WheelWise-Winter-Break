'use client'

// Importing necessary React, Next, and styling components
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { zodResolver } from '@hookform/resolvers/zod'

// Importing UI components from @radix-ui/themes
import { Button, TextField } from '@radix-ui/themes'

// Importing icons
import { RiUserStarLine, RiUserStarFill } from 'react-icons/ri'
import { IoWarningOutline } from 'react-icons/io5'

// Importing custom components and schemas
import CallOut from '@/app/components/CallOut'
import Spinner from '@/app/components/Spinner'
import { createLeadSchema } from '@/app/components/Schemas'

interface NewLeadForm {
	firstName: string
	lastName: string
	phone: string
	email: string
}

const NewLeadPage = () => {

	const router = useRouter()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<NewLeadForm>({
		resolver: zodResolver(createLeadSchema),
	})

	const [error, setError] = useState('')
	const [success, setSuccess] = useState('')
	const [isSubmiting, setIsSubmitting] = useState(false)

	return (
		<div>

			{/* Error Handeling - Server Side */}

			{error && <CallOut icon={IoWarningOutline}>{error}</CallOut>}
			{success && <CallOut icon={IoWarningOutline} color="green">{success}</CallOut>}

			{/* Error Handeling - Client Side */}

			{
				(errors.firstName && <CallOut icon={IoWarningOutline} title='First Name'>{errors.firstName.message}</CallOut>) ||
				(errors.lastName && <CallOut icon={IoWarningOutline} title='Last Name'>{errors.lastName.message}</CallOut>) ||
				(errors.phone && <CallOut icon={IoWarningOutline} title='Phone Number'>{errors.phone.message}</CallOut>) ||
				(errors.email && <CallOut icon={IoWarningOutline} title='Email Address'>{errors.email.message}</CallOut>)
			}

			{/* Form - Add New Lead */}

			<form
				className='flex gap-3'
				onSubmit={handleSubmit(async (data) => {
					try {
						await axios.post('/api/leads', data)

						setError('')
						setSuccess('Lead has been added')
						setIsSubmitting(true)

						setTimeout(() => {
							router.push('/leads')
						}, 2000) // 2000 milliseconds delay

					} catch (error) {

						setError('Error from API Server side!')
						setSuccess('')
						setIsSubmitting(false)

					}
				})}>
				<TextField.Root>
					<TextField.Slot>
						<RiUserStarLine />
					</TextField.Slot>
					<TextField.Input placeholder='First Name' {...register('firstName')} />
				</TextField.Root>
				<TextField.Root>
					<TextField.Slot>
						<RiUserStarFill />
					</TextField.Slot>
					<TextField.Input placeholder='Last Name' {...register('lastName')} />
				</TextField.Root>
				<TextField.Root>
					<TextField.Slot>
						<RiUserStarLine />
					</TextField.Slot>
					<TextField.Input placeholder='Phone Number' {...register('phone')} />
				</TextField.Root>
				<TextField.Root>
					<TextField.Slot>
						<RiUserStarLine />
					</TextField.Slot>
					<TextField.Input placeholder='Email Address' {...register('email')} />
				</TextField.Root>

				<Button disabled={isSubmiting}>Add Lead {isSubmiting && <Spinner />}</Button>
			</form>
		</div >
	)
}

export default NewLeadPage
