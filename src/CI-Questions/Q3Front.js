import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from './Q3Back';

function Q3() {
	const [choiceA, setChoiceA] = useState('');
	const [choiceB, setChoiceB] = useState('');
	const [choiceC, setChoiceC] = useState('');
	const [calc, setCalc] = useState(false);

	const handleChoiceAChange = (e) => {
		const { value } = e.target;
		setChoiceA(value.toLowerCase());
	};

	const handleChoiceBChange = (e) => {
		const { value } = e.target;
		setChoiceB(value.toLowerCase());
	};
	const handleChoiceCChange = (e) => {
		const { value } = e.target;
		setChoiceC(value.toLowerCase());
	};

	const handleSubmit = async () => {
		const choices = {
			choiceA,
			choiceB,
			choiceC,
		};

		if (
			choiceA === 'calculus' ||
			choiceB === 'calculus' ||
			choiceC === 'calculus'
		) {
			setCalc(true);
		} else {
			alert('One Choice must be Calculus.');
		}

		if (calc === true) {
			const myDocRef = await addDoc(collection(db, 'choices'), {
				choices: choices || null,
			}).then(setCalc(false));

			return myDocRef;
		}
	};

	return (
		<div className="Q3">
			<form>
				<label>Choice A:</label>
				<input onChange={handleChoiceAChange} name="choiceA" type="text" />
				<label>Choice B:</label>
				<input onChange={handleChoiceBChange} name="choiceB" type="text" />
				<label>Choice C:</label>
				<input onChange={handleChoiceCChange} name="choiceC" type="text" />
				<button type="button" onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default Q3;
