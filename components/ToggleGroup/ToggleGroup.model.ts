export interface ToggleGroupItem {
  id: number | string;
  name: number | string;
}

export interface ToggleGroupProps {
  selectId: number | string;
  list: ToggleGroupItem[];
  onSelect: (item: ToggleGroupItem) => void;
}
