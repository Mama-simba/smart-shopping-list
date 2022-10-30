import './ListItem.css';
import { updateItem } from '../api';

const currentTime = new Date();

export function ListItem({ name, items, listToken }) {
	const { isChecked, id, totalPurchases, dateLastPurchased } = items;

	if (isChecked) {
		const currentDate = new Date();
		const currentTimeToSec = currentDate.getTime() / 1000;
		const lastPurchaseToSec = dateLastPurchased.seconds;
		const timeElapsed = currentTimeToSec - lastPurchaseToSec;

		const one_day_in_seconds = 86400;
		if (timeElapsed >= one_day_in_seconds) {
			const itemData = {
				isChecked: false,
			};
			updateItem(listToken, id, itemData);
		}
	}

	const handleCheckbox = () => {
		if (isChecked) {
			const itemData = {
				isChecked: false,
			};
			updateItem(listToken, id, itemData);
		} else {
			const updatedTotalPurchases = totalPurchases + 1;
			const itemData = {
				isChecked: true,
				totalPurchases: updatedTotalPurchases,
				dateLastPurchased: currentTime,
			};
			updateItem(listToken, id, itemData);
		}
	};

	return (
		<>
			<li className="ListItem">
				<input
					type="checkbox"
					name="purchased"
					id="purchased"
					onChange={handleCheckbox}
					defaultChecked={isChecked}
				/>
				<label htmlFor="purchased">{name}</label>
			</li>
		</>
	);
}
