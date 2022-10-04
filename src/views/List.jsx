import React from 'react';
import { ListItem } from '../components';

export function List({ data }) {
	return (
		<>
			<p>
				Hello from the <code>/list</code> page!
			</p>
			<ul>
				{React.Children.toArray(
					data.map(({ name }) => <ListItem name={name} />),
				)}

				{/**
				 * TODO: write some JavaScript that renders the `data` array
				 * using the `ListItem` component that's imported at the top
				 * of this file.
				 */}
			</ul>
		</>
	);
}
