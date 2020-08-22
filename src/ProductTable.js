import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';

const ProductTable = props =>{





return (<table>

<tr>
    <th>Price</th>
    <th>Name</th>
    <th>Category</th>
</tr>
{props.tab.map(el=>
<tr>
<td>{el.price}</td>
<td>{el.name}</td>
<td>{el.category}</td>
</tr>

)
}

</table>
);}


ProductTable.propTypes = {
    tab: PropTypes.array
    
};

export default ProductTable;










  

