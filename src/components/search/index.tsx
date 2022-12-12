import {
    SearchContainer,
    SearchInput,
    SearchIcon,
} from './styled';

export type ISearchProps = {
    onChangeHandler: () => void;
};

export const Search = (props: ISearchProps) => {
    const { onChangeHandler } = props;

    return (
        <SearchContainer>
            <SearchInput
                onChange={onChangeHandler}
                type='text'
                placeholder='Product SKU, Name…'
            />
            <SearchIcon/>
        </SearchContainer>
    );
};
