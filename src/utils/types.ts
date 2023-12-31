export type ApprovedStatus = 'Accepted' | 'Rejected' | 'Pending'
export type ActivityType = 'Kuliah' | 'Praktikum' | 'Seminar' | 'Lainnya'
export const ActivityTypes: ActivityType[] = [
	'Kuliah',
	'Praktikum',
	'Seminar',
	'Lainnya',
]

export type IntervalType = 'Hari' | 'Bulan' | 'Semester'
export const IntervalTypes: IntervalType[] = ['Hari', 'Bulan', 'Semester']
