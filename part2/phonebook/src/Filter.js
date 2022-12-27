const Filter = (props) => {

    return (
        <div>
            show with: <input value={props.filterValue} onChange={(e) => props.filterChange(e)} />
        </div>
    )
}

export default Filter;