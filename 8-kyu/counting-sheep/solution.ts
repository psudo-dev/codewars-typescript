export function countSheeps(arrayOfSheep: (boolean | undefined | null)[]) {
	return arrayOfSheep.filter((sheep) => sheep).length;
}
