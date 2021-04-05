package openlab;
import java.util.*;
public class p2q3 {
public static void main(String[] args) {
	Scanner s = new Scanner(System.in);
	int T=s.nextInt(); //test case
	int N=s.nextInt();  //bags
	int K=s.nextInt();  //minutes
	int[] A= new int[N];//candies
	int[] B= new int[N];//candies
 	for(int i=0;i<=N-1;i++) {
		A[i]=s.nextInt();
		B[i]=A[i];
		 
		
	}
	int dec = 0;
	
	Arrays.sort(A);
	for(int i=(A.length-1);i>=K-1;i--) {
	 
	  int j=A.length-1;
            System.out.print(A[j] + " decreased to ");	
            dec+=A[j];
		     int div=A[j]/2;
			  A[j]=div;
			
				 System.out.println(A[j]);
			  
		 Arrays.sort(A);
		 
	}
	System.out.println("Hence the mock eats "+ dec);
 
}
}
