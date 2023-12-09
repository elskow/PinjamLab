import { useForm } from 'react-hook-form'
import type { SubmitHandler } from 'react-hook-form'
import Link from 'next/link'

interface LabRequestData {
	nama_pemohon: string
	jenis_kegiatan: string
	tanggal: string
	rentang_waktu: string
	dosen_penanggung_jawab: string
	description: string
}

interface LabRequestFormProps {
	className?: string
}

export default function LabRequestForm({ className }: LabRequestFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LabRequestData>()

	const onSubmit: SubmitHandler<LabRequestData> = (data) => {
		console.log(data)
	}

	return (
		<div className={className}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col md:w-1/2 space-y-4 bg-white p-8 rounded-lg shadow-lg'
			>
				<label className='text-lg font-semibold text-gray-700'>
					Nama Pemohon
				</label>
				<input
					{...register('nama_pemohon', { required: true })}
					className='input input-bordered bg-white text-gray-900'
					type='text'
					placeholder='Nama Pemohon'
				/>
				{errors.nama_pemohon && (
					<p className='text-red-500'>This field is required</p>
				)}

				<label className='text-lg font-semibold text-gray-700'>
					Jenis Kegiatan
				</label>
				<input
					{...register('jenis_kegiatan', { required: true })}
					className='input input-bordered bg-white text-gray-900'
					type='text'
					placeholder='Jenis Kegiatan'
				/>
				{errors.jenis_kegiatan && (
					<p className='text-red-500'>This field is required</p>
				)}

				<label className='text-lg font-semibold text-gray-700'>
					Tanggal
				</label>
				<input
					{...register('tanggal', { required: true })}
					className='input input-bordered bg-white text-gray-900'
					type='date'
					placeholder='Tanggal'
				/>
				{errors.tanggal && (
					<p className='text-red-500'>This field is required</p>
				)}

				<label className='text-lg font-semibold text-gray-700'>
					Rentang Waktu
				</label>
				<input
					{...register('rentang_waktu', { required: true })}
					className='input input-bordered bg-white text-gray-900'
					type='text'
					placeholder='Rentang Waktu'
				/>
				{errors.rentang_waktu && (
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

				<label className='text-lg font-semibold text-gray-700'>
					Description
				</label>
				<textarea
					{...register('description', { required: true })}
					className='textarea textarea-bordered bg-white text-gray-900'
					placeholder='Description'
				/>
				{errors.description && (
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
