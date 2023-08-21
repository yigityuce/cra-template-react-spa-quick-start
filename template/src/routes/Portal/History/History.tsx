import { FC, useMemo } from 'react';
import { DataTable } from '@components/common';
import { ColumnDef } from '@tanstack/react-table';
import { Stack } from '@mui/material';

type Person = {
	firstName: string;
	lastName: string;
	age: number;
	visits: number;
	status: string;
	progress: number;
};

const data: Person[] = [
	{
		firstName: 'tanner',
		lastName: 'linsley',
		age: 24,
		visits: 100,
		status: 'In Relationship',
		progress: 50,
	},
	{
		firstName: 'tandy',
		lastName: 'miller',
		age: 40,
		visits: 40,
		status: 'Single',
		progress: 80,
	},
	{
		firstName: 'joe',
		lastName: 'dirte',
		age: 45,
		visits: 20,
		status: 'Complicated',
		progress: 10,
	},
];

export const History: FC = () => {
	const columns = useMemo<ColumnDef<Person>[]>(
		() => [
			{
				accessorKey: 'firstName',
				enableSorting: true,
				header: () => 'First Name',
				cell: ({ getValue }) => getValue(),
			},
			{
				accessorKey: 'lastName',
				enableSorting: true,
				header: () => 'Last Name',
				cell: ({ getValue }) => getValue(),
			},
			{
				accessorKey: 'age',
				enableSorting: true,
				header: () => 'Age',
				cell: ({ getValue }) => getValue(),
			},
			{
				accessorKey: 'visits',
				enableSorting: true,
				header: () => 'Visits',
				cell: ({ getValue }) => getValue(),
			},
			{
				accessorKey: 'status',
				enableSorting: false,
				header: () => 'Status',
				cell: ({ getValue }) => getValue(),
			},
			{
				accessorKey: 'progress',
				enableSorting: true,
				header: () => 'Progress',
				cell: ({ getValue }) => getValue(),
			},
		],
		[],
	);

	return (
		<Stack direction="column" sx={{ padding: 4 }}>
			<DataTable columns={columns} data={data} />
		</Stack>
	);
};
