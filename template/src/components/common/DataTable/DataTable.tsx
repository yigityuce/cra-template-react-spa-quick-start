import { FC, PropsWithChildren } from 'react';
import {
	Cell,
	ColumnDef,
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	Header,
	useReactTable,
} from '@tanstack/react-table';
import { SortOrder } from '@models';
import {
	Box,
	Card,
	CardProps,
	Stack,
	Table,
	TableBody,
	TableCell,
	TableCellProps,
	TableHead,
	TableProps,
	TableRow,
	Typography,
	TypographyProps,
} from '@mui/material';
import { SortIcon } from '@components/common/SortIcon';

const Body1: FC<TypographyProps> = ({ sx, ...props }) => <Typography sx={{ ...sx, wordBreak: 'break-word' }} {...props} />;

export interface IDataTableProps<DataType extends object = object> extends CardProps {
	columns: ColumnDef<DataType>[];
	data: DataType[];
	colsResizable?: boolean;
	tableProps?: TableProps;
	headerTypographyProps?: TypographyProps;
	headerCellStyle?: (column: Header<DataType, unknown>, columnIndex: number) => TableCellProps['sx'];
	bodyCellStyle?: (cell: Cell<DataType, unknown>, rowIndex: number, columnIndex: number) => TableCellProps['sx'];
}

export const DataTable = <DataType extends object>({
	columns,
	data,
	colsResizable,
	tableProps,
	headerTypographyProps,
	headerCellStyle,
	bodyCellStyle,
	sx: containerSx,
	...containerProps
}: PropsWithChildren<IDataTableProps<DataType>>) => {
	const tableInstance = useReactTable({
		columns,
		data,
		columnResizeMode: colsResizable ? 'onChange' : undefined,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
	});

	return (
		<Card variant="outlined" sx={{ display: 'flex', overflowY: 'auto', ...containerSx }} {...containerProps}>
			<Table {...tableProps}>
				<TableHead>
					{tableInstance.getHeaderGroups().map((headerGroup) => (
						<TableRow key={`header-${headerGroup.id}`}>
							{headerGroup.headers.map((header, j) => (
								<TableCell
									key={`header-cell-${headerGroup.id}-${header.id}`}
									onClick={() => header.column.getCanSort() && header.column.toggleSorting()}
									colSpan={header.colSpan}
									sx={{
										position: 'relative',
										...(header.column.getIsResizing() ? { background: 'rgba(0, 0, 0, 0.05)' } : {}),
										...(headerCellStyle
											? headerCellStyle(header, j)
											: {
													cursor: header.column.getCanSort() ? 'pointer' : undefined,
													paddingX: 2,
													paddingY: 1.5,
													width: header.getSize(),
													maxWidth: header.getSize(),
											  }),
									}}
								>
									<Stack direction="row" alignItems="center" justifyContent="space-between">
										<Body1 {...headerTypographyProps}>
											{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
										</Body1>
										<SortIcon
											sortable={header.column.getCanSort()}
											sortOrder={
												header.column.getIsSorted()
													? header.column.getIsSorted() === 'desc'
														? SortOrder.DESC
														: SortOrder.ASC
													: undefined
											}
										/>
									</Stack>
									{colsResizable ? (
										<Box
											onMouseDown={header.getResizeHandler()}
											onTouchStart={header.getResizeHandler()}
											onClick={(e) => e.stopPropagation()}
											sx={{
												position: 'absolute',
												right: 0,
												transform: 'translateX(-50%)',
												top: 0,
												height: '100%',
												width: '8px',
												cursor: 'col-resize',
												userSelect: 'none',
												touchAction: 'none',
											}}
										/>
									) : null}
								</TableCell>
							))}
						</TableRow>
					))}
				</TableHead>
				<TableBody>
					{tableInstance.getRowModel().rows.map((row, rowIndex) => {
						return (
							<TableRow key={`row-${row.id}`} selected={row.getCanSelect() && row.getIsSelected()}>
								{row.getVisibleCells().map((cell, cellIndex) => {
									return (
										<TableCell
											key={`row-${row.id}-cell-${cell.id}`}
											sx={
												bodyCellStyle
													? bodyCellStyle(cell, rowIndex, cellIndex)
													: {
															paddingX: 2,
															minHeight: 80,
															height: 80,
															backgroundColor: rowIndex % 2 ? 'grey.50' : 'common.white',
															borderLeft: (theme) =>
																cellIndex === 0 ? undefined : `1px solid ${theme.palette.grey[100]}`,
													  }
											}
										>
											{flexRender(cell.column.columnDef.cell, cell.getContext())}
										</TableCell>
									);
								})}
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
		</Card>
	);
};
