import React from 'react'
import { Field } from 'formik'
import { cn } from '@/lib/utils'

interface FormFieldProps {
	name: string
	placeholder: string
	type?: string
	as?: string
	rows?: number
	className?: string
	error?: string
	touched?: boolean
}

const FormField = ({
	name,
	placeholder,
	type = 'text',
	as,
	rows,
	className,
	error,
	touched
}: FormFieldProps) => {
	return (
		<div>
			<Field
				className={cn(
					'py-8 px-10 w-full bg-lightGrey font-medium text-siteDark border-0 outline-none inline-block max-lsm:py-2 max-lsm:px-3 max-lsm:font-normal placeholder:text-siteDark placeholder:opacity-80',
					className
				)}
				name={name}
				placeholder={placeholder}
				type={type}
				as={as}
				rows={rows}
			/>
			{error && touched && (
				<p className='text-red-500 font-medium mt-1'>{error}</p>
			)}
		</div>
	)
}

export default FormField
