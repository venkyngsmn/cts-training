import java.io.*;
public class x10
{
	public static void main(String a1[]) throws IOException
	{
		DataInputStream dis = new DataInputStream(System.in);
		System.out.println("Enter the 2 Numbers");
		int a,b,c;
		a = Integer.parseInt(dis.readLine());
		b = Integer.parseInt(dis.readLine());
		c = a + b;
		System.out.println("---------------");
		System.out.println("A value is = "+a);
		System.out.println("B value is = "+b);
		System.out.println("Addition is = "+c);
		System.out.println("---------------");
	}
}