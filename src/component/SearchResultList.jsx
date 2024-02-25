

const SearchResultList = ({result}) => {
    return (
        <div>
            {
                result.map((result._id) =>{
                    return <div key={_id}>{result.name}</div>
                })
            }
        </div>
    );
};

export default SearchResultList;