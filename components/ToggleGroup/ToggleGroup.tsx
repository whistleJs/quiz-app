import type { ToggleGroupProps } from '.';
import * as Style from './ToggleGroup.style';

const ToggleGroup = ({ selectId, list, onSelect }: ToggleGroupProps) => {
  return (
    <Style.Container>
      {list.map((item) => (
        <Style.Item
          key={item.id}
          data-state={item.id === selectId ? 'on' : 'off'}
          onClick={() => onSelect(item)}
        >
          {item.name}
        </Style.Item>
      ))}
    </Style.Container>
  );
};

export default ToggleGroup;
