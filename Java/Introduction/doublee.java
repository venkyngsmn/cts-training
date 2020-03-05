import java.io.*;
class doublee
{
	public static void main(String args[])throws IOException
	{
		DataInputStream dis = new DataInputStream(System.in);
		System.out.println("Enter a number");
		double a = Double.parseDouble(dis.readLine());
		System.out.println("Entered number is "+a);
	}
}