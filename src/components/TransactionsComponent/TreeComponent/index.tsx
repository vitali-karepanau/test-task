import { TreeSelect } from 'antd';
import { TreeNodeValue } from 'antd/lib/tree-select/interface';
import * as React from 'react';

export interface TreeComponentProps {
    style?: {
        [key: string]: string | number;
    };
    onChange: (data: TreeNodeValue) => void;
    data: Item[];
    placeholder: string;
    groupingLabel: string;
    groupingLevel: number;
    selected: TreeNodeValue;
}

export interface Item {
    title: string;
    value: string;
    key: string;
    children?: Item[];
}

const countChildren = (data: TreeNodeValue, list: Item[]) => {
    let count = 0;
    list.forEach((item: Item) => {
        const arr = typeof data === 'object' ? [...data] : [data];
        if (arr.find(row => row === item.value)) {
            count += sumChildren(0, item);
        } else {
            if (item.children) {
                count += countChildren(data, item.children);
            }
        }
    });
    return count;
};

const sumChildren = (count: number, item: Item): number => {
    if (item.children) {
        return item.children.reduce(sumChildren, 0);
    }
    return count + 1;
};

export const TreeComponent: React.FC<TreeComponentProps> = (props: TreeComponentProps) => {
    const [selected, setSelected] = React.useState<TreeNodeValue>(props.selected);

    const maxTagPlaceholderHandler = () => {
        const count = countChildren(selected, props.data);

        if (props.groupingLevel === 0) {
            const arr = typeof selected === 'object' ? [...selected] : [selected];
            if (count > 1) {
                return `${props.groupingLabel} (${arr.length})`;
            } else {
                return arr[0];
            }
        } else {
            return props.data.reduce((pV: string, cV: Item) => {
                const sum = countChildren(selected, cV.children || []);
                if (sum > 0) {
                    return `${pV}${pV.length > 0 ? ', ' : ''}${cV.value} (${sum})`;
                }
                return pV;
            },                       '');
        }
    };

    const onChangeHandle = (value: TreeNodeValue) => {
        setSelected(value);
        props.onChange(value);
    };

    React.useEffect(
        () => {
            setSelected(props.selected);
        },
        [props.selected]
    );

    return (
        <TreeSelect
            treeData={props.data}
            treeCheckable={true}
            showCheckedStrategy="SHOW_ALL"
            maxTagCount={0}
            maxTagPlaceholder={maxTagPlaceholderHandler}
            onChange={onChangeHandle}
            style={props.style || {}}
            searchPlaceholder={props.placeholder}
            allowClear={true}
            value={selected}
        />
    );
};
