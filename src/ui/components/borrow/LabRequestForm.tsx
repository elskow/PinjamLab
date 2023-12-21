import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useForm, Controller } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import DatePicker from 'react-datepicker'
import Link from 'next/link'
import type { ActivityType, IntervalType } from '@/utils/types'
import { ActivityTypes, IntervalTypes } from '@/utils/types'

import 'react-datepicker/dist/react-datepicker.css'
import { api } from '@/utils/api'

interface LabRequestData {
	email_pemohon: string
	nama_pemohon: string
	jenis_kegiatan: ActivityType
	nama_kegiatan: string
	tanggal: string
	interval: IntervalType
	start_time: string
	end_time: string
	dosen_penanggung_jawab: string
}

interface LabRequestFormProps {
	className?: string
}

export default function LabRequestForm({ className }: LabRequestFormProps) {
	const { data: session } = useSession()
	const router = useRouter()

	const submitMutation = api.activity.addActivity.useMutation()
	// Validation schema
	const schema = yup.object().shape({
		email_pemohon: yup.string().trim().required('Email is required'),
		nama_pemohon: yup.string().trim().required('Name is required'),
		jenis_kegiatan: yup
			.mixed<ActivityType>()
			.oneOf(Object.values(ActivityTypes), 'Invalid activity type')
			.required('Activity type is required'),
		nama_kegiatan: yup
			.string()
			.trim()
			.required('Activity name is required'),
		tanggal: yup.string().required('Date is required'),
		interval: yup
			.mixed<IntervalType>()
			.oneOf(Object.values(IntervalTypes), 'Invalid interval type')
			.required('Interval type is required'),
		start_time: yup.string().required('Start time is required'),
		end_time: yup
			.string()
			.required('End time is required')
			.test(
				'duration',
				'Duration should not exceed 5 hours nor be less than 0',
				function (value) {
					const startTime: string = this.resolve(
						yup.ref('start_time'),
					)
					const start = new Date(`1970-01-01T${startTime}:00`)
					const end = new Date(`1970-01-01T${value}:00`)
					const duration =
						(end.getTime() - start.getTime()) / (1000 * 60 * 60) // duration in hours
					return duration <= 5 && duration > 0
				},
			),
		dosen_penanggung_jawab: yup
			.string()
			.trim()
			.required('Responsible person is required'),
	})

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<LabRequestData>({
		resolver: yupResolver(schema),
	})

	const onSubmit: SubmitHandler<LabRequestData> = async (data) => {
		const formattedData = {
			...data,
			tanggal: new Date(data.tanggal).toISOString(),
		}
		await submitMutation.mutateAsync(formattedData)
		await router.push('/borrow')

		alert('Permohonan berhasil dibuat')
	}

	return (
		<div
			className={`${className} my-10 flex items-center justify-center bg-gray-100`}
		>
			<form
				onSubmit={handleSubmit(onSubmit, (errors) => {
					console.log(errors)
				})}
				className='flex w-full flex-col  space-y-4 rounded-lg bg-white p-8 shadow-lg md:w-3/5'
			>
				<label className='text-lg font-semibold text-gray-700'>
					Nama Pemoohon
				</label>
				<input
					{...register('nama_pemohon', { required: true })}
					className='input input-bordered bg-white text-gray-900'
					type='text'
					placeholder='Nama pemohon'
				/>

				{errors.nama_pemohon && (
					<p className='text-red-500'>
						{errors.nama_pemohon.message}
					</p>
				)}
				<label className='text-lg font-semibold text-gray-700'>
					Email pemohon
				</label>
				<input
					{...register('email_pemohon')}
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
					<p className='text-red-500'>
						{errors.jenis_kegiatan.message}
					</p>
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
					<p className='text-red-500'>
						{errors.nama_kegiatan.message}
					</p>
				)}

				<label className='text-lg font-semibold text-gray-700'>
					Tanggal
				</label>
				<Controller
					control={control}
					name='tanggal'
					rules={{ required: 'This field is required' }}
					render={({ field }) => (
						<DatePicker
							{...field}
							selected={
								field.value ? new Date(field.value) : null
							}
							onChange={(date) => field.onChange(date)}
							dateFormat='dd/MM/yyyy'
							className='input input-bordered w-full bg-white text-gray-900'
							startDate={new Date()}
							minDate={new Date()}
							maxDate={
								new Date(
									new Date().setDate(
										new Date().getDate() + 28,
									),
								)
							} // 2 weeks from now
							placeholderText='Tanggal'
						/>
					)}
				/>
				{errors.tanggal && (
					<p className='text-red-500'>{errors.tanggal.message}</p>
				)}

				<label className='text-lg font-semibold text-gray-700'>
					Interval
				</label>
				<select
					{...register('interval', { required: true })}
					className='input input-bordered bg-white text-gray-900'
				>
					<option value=''>Select an interval</option>
					{IntervalTypes.map((intervalType, index) => (
						<option key={index} value={intervalType}>
							{intervalType}
						</option>
					))}
				</select>
				{errors.interval && (
					<p className='text-red-500'>{errors.interval.message}</p>
				)}

				<label className='text-lg font-semibold text-gray-700'>
					Start Time{' '}
				</label>
				<input
					{...register('start_time', { required: true })}
					className='input input-bordered bg-white text-gray-900'
					type='time'
					min='07:00'
					max='17:00'
					step='1800'
				/>
				<p className='text-sm text-gray-500'>
					Only available from 7:00 to 17:00
				</p>
				{errors.start_time && (
					<p className='text-red-500'>{errors.start_time.message}</p>
				)}

				<label className='text-lg font-semibold text-gray-700'>
					End Time
				</label>
				<input
					{...register('end_time', {
						required: true,
					})}
					className='input input-bordered bg-white text-gray-900'
					type='time'
					min='07:00'
					max='17:00'
					step='1800'
				/>
				<p className='text-sm text-gray-500'>
					Only available from 7:00 to 17:00
				</p>
				{errors.end_time && (
					<p className='text-red-500'>{errors.end_time.message}</p>
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
					<p className='text-red-500'>
						{errors.dosen_penanggung_jawab.message}
					</p>
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
