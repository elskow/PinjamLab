import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'
import { ActivityTypes } from '@/utils/types'
import type { ActivityType } from '@/utils/types'

// Define the types for the form data and props
interface LabRequestData {
	id: number
	email_peminjam: string
	nama_peminjam: string
	jenis_kegiatan: ActivityType
	nama_kegiatan: string
	tanggal: string
	start_time: string
	end_time: string
	dosen_penanggung_jawab: string
}

interface LabRequestFormProps {
	className?: string
}

// Define the form component
export default function LabRequestForm({ className }: LabRequestFormProps) {
	const { data: session } = useSession()
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LabRequestData>()
	const [startDate, setStartDate] = useState(new Date())

	const onSubmit: SubmitHandler<LabRequestData> = (data) => console.log(data)

	return (
		<div
			className={`${className} flex justify-center items-center h-screen bg-gray-100 my-10`}
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col w-full  md:w-3/5 space-y-4 bg-white p-8 rounded-lg shadow-lg'
			>
				<label className='text-lg font-semibold text-gray-700'>
					Nama Peminjam
				</label>
				<input
					{...register('nama_peminjam', { required: true })}
					className='input input-bordered bg-white text-gray-900'
					type='text'
					placeholder='Nama Peminjam'
				/>
				<label className='text-lg font-semibold text-gray-700'>
					Email Peminjam
				</label>
				<input
					{...register('email_peminjam')}
					className='input input-bordered bg-gray-50 input-disabled'
					type='email'
					value={session?.user?.email ?? ''}
					readOnly
				/>
				<label className='text-lg font-semibold text-gray-700'>
					Jenis Kegiatan
				</label>
				<select
					{...register('jenis_kegiatan', { required: true })}
					className='input input-bordered bg-white text-gray-900'
				>
					<option value=''>Select an activity type</option>
					{ActivityTypes.map((activityType, index) => (
						<option key={index} value={activityType}>
							{activityType}
						</option>
					))}
				</select>
				{errors.jenis_kegiatan && (
					<p className='text-red-500'>This field is required</p>
				)}

				<label className='text-lg font-semibold text-gray-700'>
					Nama Kegiatan
				</label>
				<input
					{...register('nama_kegiatan', { required: true })}
					className='input input-bordered bg-white text-gray-900'
					type='text'
					placeholder='Nama Kegiatan'
				/>
				{errors.nama_kegiatan && (
					<p className='text-red-500'>This field is required</p>
				)}

				<label className='text-lg font-semibold text-gray-700'>
					Tanggal
				</label>
				<DatePicker
					selected={startDate}
					onChange={(date: Date) => setStartDate(date)}
					dateFormat='dd/MM/yyyy'
					className='input input-bordered bg-white text-gray-900 w-full'
					startDate={new Date()}
					minDate={new Date()}
					placeholderText='Tanggal'
				/>
				{errors.tanggal && (
					<p className='text-red-500'>This field is required</p>
				)}

				<label className='text-lg font-semibold text-gray-700'>
					Start Time
				</label>
				<input
					{...register('start_time', { required: true })}
					className='input input-bordered bg-white text-gray-900'
					type='time'
					min='07:00'
					max='17:00'
					step='1800'
				/>
				{errors.start_time && (
					<p className='text-red-500'>This field is required</p>
				)}

				<label className='text-lg font-semibold text-gray-700'>
					End Time
				</label>
				<input
					{...register('end_time', { required: true })}
					className='input input-bordered bg-white text-gray-900'
					type='time'
					min='07:00'
					max='17:00'
					step='1800'
				/>
				{errors.end_time && (
					<p className='text-red-500'>This field is required</p>
				)}

				<label className='text-lg font-semibold text-gray-700'>
					Dosen Penanggung Jawab
				</label>
				<input
					{...register('dosen_penanggung_jawab', { required: true })}
					className='input input-bordered bg-white text-gray-900'
					type='text'
					placeholder='Dosen Penanggung Jawab'
				/>
				{errors.dosen_penanggung_jawab && (
					<p className='text-red-500'>This field is required</p>
				)}

				<div className='flex justify-end space-x-4 mt-6'>
					<Link href='/borrow'>
						<button
							type='button'
							className='btn bg-gray-300 hover:bg-gray-400 text-gray-700'
						>
							Cancel
						</button>
					</Link>
					<button
						type='submit'
						className='btn bg-blue-500 text-white hover:bg-blue-600'
					>
						Create
					</button>
				</div>
			</form>
		</div>
	)
}
