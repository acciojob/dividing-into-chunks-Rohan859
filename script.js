const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result=[];
	let temp=[];
	let sum=0;

	for(let i=0;i<arr.length;i++)
		{
			if(sum+arr[i]>n)
			{
				result.push(temp);
				temp=[];
				sum=0;
			}
			temp.push(arr[i]);
			sum+=arr[i];
		}
	result.push(temp);
	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
