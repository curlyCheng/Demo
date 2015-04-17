/**
 * [bucketsort description]
 * @arr  {[Array]}
 * @result {[String]}
 * 桶排序 空间消耗大 O(M+N)
 */
function bucketSort(arr){
	var temp = new Array();
	var result = "";
	var sep = ",";
	for(var i=0;i<arr.length;i++)
	{
		if(typeof temp[arr[i]] !== "number")
			temp[arr[i]] = 0;
		temp[arr[i]]++;
	}
	for(var i=0;i<temp.length;i++)
		for(var j=0;j<temp[i];j++)
			result += ((result=="" ? "" : sep) + i);
	return result;
}
/**
 * [bubblesort description]
 * @param a  {[Array]}
 * @return a {[Array]}
 * 冒泡排序 时间复杂度O(pow(N,2))
 */
function bubbleSort(a){
	var t;
	var n = a.length;
	for(var i=0; i<n-1; i++)
		for(var j=0; j<n-i; j++){
			if(a[j]<a[j+1]){
				t = a[j+1];
				a[j+1] = a[j];
				a[j] = t;
			}
		}
	return a;
}
/**
 * [quicksort description]
 * @a {[Array]}
 * @left  {[Number]}
 * @right  {[Number]}
 * @return a {[Array]}
 * 快速排序 O(NlogN)
 */
function quickSort(a,left,right){
	if(left > right) return;
	var i = left;
	var j = right;
	var temp = a[left];

	while(i != j){
		while(a[j]>=temp && i<j)
			j--;

		while(a[i]<=temp && i<j)
			i++;

		if(i<j){
			var t = a[i];
			a[i] = a[j];
			a[j] = t;
		}
	}
	a[left] = a[i];
	a[i] = temp;

	quicksort(a,left,i-1);
	quicksort(a,i+1,right);
}
/**
 * [insertsort description]
 * @arr  {[Array]}
 * @return {[type]}
 * 插入排序 O(pow(N,2)) 稳定 略强于冒泡 与已排序部分比较
 */
function insertsSort(arr){
	for(var i = 1; i<arr.length; i++)
	{
		var temp = arr[i];
		for(j=i; j>0 && arr[j-1]>temp; j--){
			arr[j] = arr[j-1];
		}
		arr[j] = temp;
	}
}
/**
 * [selectSort description]
 * @arr  {[Array]}
 * @return {[type]}
 * 选择排序 O(pow(N,2)) 不稳定 选择最小或最大的
 */
function selectSort(arr){
	for(var i = 0; i<arr.length-1; i++){
		var min = i;
		for(var j=i+1; j<arr.length; j++){
			if(arr[min] > arr[j]){
				min = j;
			}
		}
		if( i != min){
			var t = arr[min];
			arr[min] = arr[i];
			arr[i] = t;	
		}
		
	}
	return arr;
}


/**
 * [mergeSort description]
 * @arr  {[Array]}
 * @first  {[Number]}
 * @last  {[Number]}
 * @return arr {[Array]}
 * 归并排序 O(NlogN) 分治
 */
function mergeArray(arr,first,mid,last){
	var temp = new Array();
	var i = first, j = mid+1, m = mid, n = last;
	var k = 0;
	while(i <= m && j <= n){
		if(arr[i] <= arr[j])
			temp[k++] = arr[i++];
		else
			temp[k++] = arr[j++];
	}
	while (i <= m)
		temp[k++] = arr[i++];
	while (j <= n)
		temp[k++] = arr[j++];
	for(i=0; i<k; i++)
		arr[first+i] = temp[i];
	return arr;
}

function mergeSort(arr,first,last){
	if(first >= last) return;
	mid = parseInt((last+first)/2);
	mergeSort(arr,first,mid);
	mergeSort(arr,mid+1,last);
	mergeArray(arr,first,mid,last);
	return arr;
}