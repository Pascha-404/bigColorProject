import React from 'react';

import { SortableContainer } from 'react-sortable-hoc';

import DraggableColorbox from './DraggableColorbox';

const DraggableColorList = SortableContainer(({ colors, deleteColor }) => {
	return (
		<div style={{ height: '100%' }}>
			{colors.map((color, idx) => (
				<DraggableColorbox
					index={idx}
					key={color.name}
					color={color.color}
					name={color.name}
					deleteColor={deleteColor}
				/>
			))}
		</div>
	);
});

export default DraggableColorList;
