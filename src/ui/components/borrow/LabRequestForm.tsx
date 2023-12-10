import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Link from 'next/link'
import { ActivityTypes } from '@/utils/types'
import type { ActivityType } from '@/utils/types'

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
			className={`${className} my-10 flex h-screen items-center justify-center bg-gray-100`}
		>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex w-full flex-col  space-y-4 rounded-lg bg-white p-8 shadow-lg md:w-3/5'
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
					className='input input-bordered input-disabled bg-gray-50'
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
					className='input input-bordered w-full bg-white text-gray-900'
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

				<div className='mt-6 flex justify-end space-x-4'>
					<Link href='/borrow'>
						<button
							type='button'
							className='btn bg-gray-300 text-gray-700 hover:bg-gray-400'
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
