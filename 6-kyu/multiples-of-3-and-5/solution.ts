export class Challenge {
	static solution(num: number) {
		if (num < 0) {
			return 0;
		}
		num--;
		const sumOfMultiples = (multiplier: 3 | 5 | 15) => {
			let multiplesOf = Math.floor(num / multiplier);
			const arrayOfMulti = [];
			while (multiplesOf > 0) {
				const multiple = multiplesOf * multiplier;
				arrayOfMulti.push(multiple);
				multiplesOf--;
			}
			return arrayOfMulti.reduce((sum, num) => {
				return sum + num;
			}, 0);
		};
		return sumOfMultiples(3) + sumOfMultiples(5) - sumOfMultiples(15);
	}
}

export class Challenge2 {
	static solution(n: number) {
		let total = 0;
		for (let i = 0; i < n; ++i) if (i % 3 == 0 || i % 5 == 0) total += i;
		return total;
	}
}

export class Challenge3 {
	static solution(num: number) {
		if (num < 0) {
			return 0;
		}
		num--;
		const sumOfMultiples = (multiplier: 3 | 5 | 15) => {
			const count = Math.floor(num / multiplier);
			const total = ((multiplier + count * multiplier) * count) / 2;
			return total;
		};
		return sumOfMultiples(3) + sumOfMultiples(5) - sumOfMultiples(15);
	}
}
