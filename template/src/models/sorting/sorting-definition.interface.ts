import { SortOrder } from './sort-order.enum';

export interface ISortingDefinition<SortByTypes = any> {
	sortOrder?: SortOrder;
	sortBy?: SortByTypes;
}
